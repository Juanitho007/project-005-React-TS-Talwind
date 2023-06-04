import { useContext, ReactNode } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import { Navigate, useLocation } from "react-router-dom";
interface ProtectedRouterProps {
  children: ReactNode;
}
const ProtectedRouter = ({ children }:ProtectedRouterProps) => {
  const { userName } = useContext(UserNameContext);
  const location = useLocation();

  if (userName) return <>{children}</>;
  else return <Navigate to="/" state={{from: location.pathname + location.search}}/>;
};

export default ProtectedRouter;
