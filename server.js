import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./public/data/data.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);


server.use((req, res, next) => {
    next();
});

server.use((req, res, next) => {
    const db = router.db;

    if (req.path.startsWith('/products')) {
        const pathParts = req.path.split('/');
        const productId = pathParts[2];


        if (pathParts[3] === 'reviews' && req.method === 'GET') {
            const product = db.get('products').find({ id: productId }).value();
            if (product && product.reviews) {
                return res.json(product.reviews);
            } else {
                return res.status(404).json({ message: 'No reviews found for this product.' });
            }
        }

        if (pathParts[3] === 'reviews' && req.method === 'POST') {
            const product = db.get('products').find({ id: productId }).value();
            if (product) {
                const newReview = req.body;
                if (!product.reviews) {
                    product.reviews = [];
                }
                product.reviews.push(newReview);

                db.get('products').find({ id: productId }).assign(product).write();

                return res.status(201).json(newReview);
            } else {
                return res.status(404).json({ message: 'Product not found.' });
            }
        }

        if (req.method === 'PATCH') {
            const updates = req.body;

            if (!updates || Object.keys(updates).length === 0) {
                return res.status(400).json({ message: 'No data provided to update.' });
            }

            const product = db.get('products').find({ id: productId }).value();

            if (product) {
                db.get('products').find({ id: productId }).assign(updates).write();

                return res.json({
                    message: `Product with ID ${productId} has been updated.`,
                    updatedProduct: db.get('products').find({ id: productId }).value(),
                });
            } else {
                return res.status(404).json({ message: 'Product not found.' });
            }
        }
    }

    next();
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
