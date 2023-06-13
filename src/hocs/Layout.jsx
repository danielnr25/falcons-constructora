import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import "../styles/fonts.css";


const Layout = (props) => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
