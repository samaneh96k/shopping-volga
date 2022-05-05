import Navbar from "./../Navbar/index";
import Footer from "./../footer/index";


const Layout = ({ children }) => {


  return (
    <div>
      <Navbar/>

      <div>
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
