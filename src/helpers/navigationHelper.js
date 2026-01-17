
import { useNavigate } from "react-router-dom";

export function useAppNavigation() {
  const navigate = useNavigate();

  return {
    goLogin: () => navigate("/login"),
    goHome: () => navigate("/")
  };
}

