/* eslint-disable react/prop-types */
import { FiLogOut } from "react-icons/fi";

export default function User({ showUser, handleLogout }) {
    return (
        <div className={`box-user ${showUser ? 'active' : ''}`}>
            <button className="btn-out" onClick={handleLogout}>
                <div className="box-icon">
                    <FiLogOut />
                    <h5>Logout</h5>
                </div>
            </button>
        </div>
    );
}
