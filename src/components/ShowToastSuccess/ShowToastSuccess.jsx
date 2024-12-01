import toast from "react-hot-toast";

export const ShowToastSuccess = ({ message }) => {
    toast.success(message, {
        style: {
            fontSize: "13px",
            border: "1px solid #28a745", 
            background: "#d4edda", 
            padding: "11px",
            color: "#155724", 
        },
    });
};
