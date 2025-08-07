import { toast } from "react-hot-toast";

export const showToast = (promise, messages) =>
  toast.promise(promise, messages, {
    position: "top-right",
    duration: 4000,
    style: {
      borderRadius: "8px",
      background: "#fff",
      color: "#333",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      fontSize: "14px",
    },
  });
