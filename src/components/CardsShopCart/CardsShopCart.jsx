/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../Store/CartContext";
import CardShopCart from "../CardShopCart/CardShopCart";
import CartEmpty from "../CartEmpty/CartEmpty";
import MainOrder from "../Order/MainOrder/MainOrder";


export default function CardsShopCart({ product }) {

    const cart = useContext(CartContext);

    const deleteItem = (cartId) => {

        console.log(cartId);
        let newItems = cart.cartItems.filter(i => i.cartId !== cartId);
        cart.setCartItems([...newItems]);


    };

    const editItem = (cartId, count) => {
        let newItems = cart.cartItems.map(i => i.cartId === cartId ? { ...i, quantity: count } : i);
        cart.setCartItems([...newItems]);
    };

    return (
        <>
            {cart.cartItems.length === 0 ?
                (<CartEmpty />)
                :
                (<div className="section-card-shop-cart px py">
                    <table>
                        <thead>
                            <tr>
                                <th className="th-product">Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th className="th-total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.cartItems.map((item, index) => (
                                <CardShopCart
                                    key={index}
                                    item={item}
                                    deleteItem={deleteItem}
                                    editItem={editItem}
                                    product={product}
                                />
                            ))}
                        </tbody>

                    </table>
                    <MainOrder total={cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} />
                </div>)
            }


        </>
    )
};
