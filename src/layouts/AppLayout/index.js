import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function AppLayout({ children, needAuthenticated = false }) {
  const navigate = useNavigate();

  const auth = useMemo(() => {
    // navigate("/maintenance", { replace: true }); // tulis code untuk maintenace jika maintenance
    const stored = localStorage.getItem("auth");
    try {
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }, []);

  // Cek expired token dan hapus jika kadaluarsa
  useEffect(() => {
    if (auth?.expires_in) {
      const nowInSeconds = Math.floor(Date.now() / 1000);
      if (nowInSeconds >= auth.expires_in) {
        localStorage.removeItem("auth");
        navigate("/login", { replace: true });
      }
    }
  }, [auth, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (needAuthenticated && !auth) {
      navigate("/login", { replace: true });
    }
  }, [auth, needAuthenticated, navigate]);

  if (needAuthenticated && !auth) {
    return null;
  }

  return children;
}
