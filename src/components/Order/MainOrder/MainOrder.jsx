/* eslint-disable react/prop-types */
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import OrderInformation from "../OrderInformation/OrderInformation";


export default function MainOrder({ total }) {
    return (
        <>
            <div className="section-main-order px">
                <ConfirmOrder />
                <OrderInformation total={total} />
            </div>
        </>
    )
}
