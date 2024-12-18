import { useContext } from "react";
import { CartContext } from "../../components/Store/CartContext";
import { CheckOutContext } from "../../components/Store/CheckOutContext";
import ViewOrderDetails from "../../components/ViewOrderDetails/ViewOrderDetails";
import EnterUserData from "../../components/EnterUserData/EnterUserData";
import CheckOutHeader from "../../components/CheckOutHeader/CheckOutHeader";

export default function CheckOut() {
    const { cartItems } = useContext(CartContext);
    const { puyItNow, fromCart } = useContext(CheckOutContext);

    return (
        <>
            <CheckOutHeader />
            <div className="check-out">
                <EnterUserData />
                {fromCart ? (
                    <ViewOrderDetails cartItems={cartItems} /> 
                ) : (
                    <ViewOrderDetails cartItems={puyItNow} /> 
                )}
            </div>
        </>
    );
}
