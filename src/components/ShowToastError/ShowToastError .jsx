import toast from "react-hot-toast";

export const ShowToastError = ({message}) => {
    toast.error(message, {
        style: {
            fontSize: "13px",
            border: "1px solid #e74c3c",
            background: "#f8d7da",
            padding: "11px",
            color: "#e74c3c",
        },
    });
};
