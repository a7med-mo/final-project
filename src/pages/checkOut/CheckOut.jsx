import { useContext } from "react";
import { useLocation } from "react-router-dom"; 
import { CartContext } from "../../components/Store/CartContext";
import ViewOrderDetails from "../../components/ViewOrderDetails/ViewOrderDetails";
import EnterUserData from "../../components/EnterUserData/EnterUserData";
import CheckOutHeader from "../../components/CheckOutHeader/CheckOutHeader";

export default function CheckOut() {
    const location = useLocation(); 
    const { cartItems } = useContext(CartContext);

    const productFromBuyNow = location.state?.product;
    const quantityFromBuyNow = location.state?.quantity;

    const itemsToDisplay = productFromBuyNow
        ? [{ ...productFromBuyNow, quantity: quantityFromBuyNow }]
        : cartItems;

    return (
        <>
            <CheckOutHeader />
            <div className="check-out">
                <EnterUserData />
                <ViewOrderDetails cartItems={itemsToDisplay} />
            </div>
        </>
    );
}
