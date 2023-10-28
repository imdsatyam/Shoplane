import Menu from "./Pages/Menu";
import Banner from "./Pages/Banner";
import Icon from "./Pages/Icon";
import Accessory from "./Pages/Accessory";
import Footer from "./Pages/Footer";
import Copyright from "./Pages/Copyright";

function Accessories() {
    return(
        <div className="Accessories">
            <Menu />
            <Banner />
            <Icon />
            <Accessory />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Accessories;