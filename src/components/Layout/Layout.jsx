import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout_container">
      <Header />
      <main className="main_container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
