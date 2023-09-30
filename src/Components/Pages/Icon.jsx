import icon from '/Visusal Studio Codes/Projects React/shoplane/src/Assets/icon1.png';
import icon_2 from '/Visusal Studio Codes/Projects React/shoplane/src/Assets/icon2.png';
import icon_3 from '/Visusal Studio Codes/Projects React/shoplane/src/Assets/icon3.png';
import icon_4 from '/Visusal Studio Codes/Projects React/shoplane/src/Assets/icon4.png';

function Icon () {
    return(
        <div className="Icon flex flex-row justify-between mx-56 mt-28 mb-40">
            <div className="IconList w-36 h-36 rounded-full relative" style={{backgroundColor:'var(--Icon-Color)'}}>
                <a href="/#"><img className='w-12 h-12 ml-12 mt-12 absolute' src={icon} alt="" /></a>
                <h4 className='mt-40 text-xl font-bold whitespace-nowrap'>Free Delivery</h4>
            </div>
            <div className="IconList w-36 h-36 rounded-full" style={{backgroundColor:'var(--Icon-Color)'}}>
                <a href="/#"><img className='w-12 h-12 ml-12 mt-12 absolute' src={icon_2} alt="" /></a>
                <h4 className='mt-40 text-xl font-bold whitespace-nowrap'>Money Back</h4>
            </div>
            <div className="IconList w-36 h-36 rounded-full" style={{backgroundColor:'var(--Icon-Color)'}}>
                <a href="/#"><img className='w-12 h-12 ml-12 mt-12 absolute' src={icon_3} alt="" /></a>
                <h4 className='mt-40 text-xl font-bold whitespace-nowrap'>Always Support</h4>
            </div>
            <div className="IconList w-36 h-36 rounded-full" style={{backgroundColor:'var(--Icon-Color)'}}>
                <a href="/#"><img className='w-12 h-12 ml-12 mt-12 absolute' src={icon_4} alt="" /></a>
                <h4 className='mt-40 text-xl font-bold whitespace-nowrap'>Secure Payment</h4>
            </div>
        </div>
    )
}

export default Icon;