import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="min-w-full min-h-screen bg-gradient-to-t from-white from-49% via-gray-800/30 via-51% to-red-500 flex mx-auto flex-col items-center text-center justify-between flex-wrap">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
