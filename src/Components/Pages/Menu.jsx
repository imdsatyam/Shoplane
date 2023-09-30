import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faCircleUser
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div className="Menu flex flex-row justify-between items-center px-44 py-7" style={{boxShadow: '2px 4px 2px rgba(17, 16, 16, 0.5)'}}>
      <div className="logo">
        <h4 className="text-5xl font-light tracking-wide"><span className="font-medium">SHOP</span>LANE</h4>
      </div>
      <div className="menubar flex flex-row">
        <li className="menulist text-2xl px-40 font-medium">
          <a href="/" className="menuiteam">
            Home
          </a>
        </li>
        <li className="menulist text-2xl pr-40 font-medium">
          <a href="/clothing" className="menuiteam">
            Clothing
          </a>
        </li>
        <li className="menulist text-2xl pr-40 font-medium">
          <a href="/accessories" className="menuiteam">
            Accessories
          </a>
        </li>
      </div>
      <div className="profile__icon text-3xl">
        <a href="/#" className="pr-20">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="/#" className="pr-20">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <a href="/#" className="pr-20">
          <FontAwesomeIcon icon={faCircleUser} />
        </a>
      </div>
    </div>
  );
}

export default Menu;
