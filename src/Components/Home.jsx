import Menu from "./Pages/Menu";
import Banner from "./Pages/Banner";
import Icon from "./Pages/Icon";
import Cloth from "./Pages/Cloth";
import Accessory from "./Pages/Accessory";
import Footer from "./Pages/Footer";
import Copyright from "./Pages/Copyright";

function Home () {
    return(
        <div className="Home">
            <Menu />
            <Banner />
            <Icon />
            <Cloth />
            <Accessory />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Home;