function Footer() {
  return (
    <div className="footer flex flex-row flex-wrap justify-between bg-black text-white px-56 pt-5">
      <div className="store">
        <h1 className="text-3xl tracking-widest font-semibold pb-3">Online Store</h1>
        <div className="tags flex flex-col">
          <a className="text-2xl tracking-widest pb-3" href="/#">Men Clothing</a>
          <a className="text-2xl tracking-widest pb-3" href="/#">Women Clothing</a>
          <a className="text-2xl tracking-widest pb-3" href="/#">Men Accessories</a>
          <a className="text-2xl tracking-widest" href="/#">Women Accessories</a>
        </div>
      </div>
      <div className="links">
        <h1 className="text-3xl tracking-widest font-semibold pb-3">Helpful Links</h1>
        <div className="tags flex flex-col">
          <a className="text-2xl tracking-widest pb-3" href="/">Home</a>
          <a className="text-2xl tracking-widest pb-3" href="/about">About</a>
          <a className="text-2xl tracking-widest" href="/contact">Contact</a>
        </div>
      </div>
      <div className="partners">
        <h1 className="text-3xl tracking-widest font-semibold pb-3">Partners</h1>
        <div className="tags flex flex-col">
          <a className="text-2xl tracking-widest pb-3" href="/#">Zara</a>
          <a className="text-2xl tracking-widest pb-3" href="/#">Pantaloons</a>
          <a className="text-2xl tracking-widest pb-3" href="/#">Levis</a>
          <a className="text-2xl tracking-widest pb-3" href="/#">UCB</a>
          <a className="text-2xl tracking-widest" href="/#">+ Many More</a>
        </div>
      </div>
      <div className="address">
        <h1 className="text-3xl tracking-widest font-semibold pb-3">Online Store</h1>
        <div className="tags flex flex-col">
          <a className="text-2xl tracking-widest pb-3" href="/#">Building 101</a>
          <a className="text-2xl tracking-widest pb-3" href="/#">Central Avenue</a>
          <a className="text-2xl tracking-widest pb-3" href="/#">LA - 902722</a>
          <a className="text-2xl tracking-widest" href="/#">Unites States</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
