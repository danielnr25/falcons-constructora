import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import "../styles/fonts.css";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description }) => {
  return (
    <div className="bg-slate-100">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
