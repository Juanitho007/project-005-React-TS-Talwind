import { useContext, ReactNode } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import { Navigate } from "react-router-dom";
interface ProtectedRouterProps {
  children: ReactNode;
}
const ProtectedRouter = ({ children }:ProtectedRouterProps) => {
  const { userName } = useContext(UserNameContext);
  if (userName) return <>{children}</>;
  else return <Navigate to="/" />;
};

export default ProtectedRouter;
