import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

function PrivateRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  //if user doesn't exists redirect him to login page
  return auth.user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
