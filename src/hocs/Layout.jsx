import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import "../styles/fonts.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
