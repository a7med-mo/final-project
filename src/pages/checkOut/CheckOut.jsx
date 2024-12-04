import ViewOrderDetails from "../../components/ViewOrderDetails/ViewOrderDetails";
import EnterUserData from "../../components/EnterUserData/EnterUserData";
import { useContext } from "react";
import { CartContext } from "../../components/Store/CartContext";
import CheckOutHeader from "../../components/CheckOutHeader/CheckOutHeader";


export default function CheckOut() {

    const { cartItems} = useContext(CartContext);

    return (
        <>
            <CheckOutHeader />
            <div className="check-out">
                <EnterUserData />
                <ViewOrderDetails cartItems={cartItems} />
            </div>
        </>
    )
}
