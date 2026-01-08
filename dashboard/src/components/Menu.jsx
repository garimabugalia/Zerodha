
import { useState } from "react"
import { Link } from 'react-router-dom'


const Menu = () => {

    const [selectedmenu, setSelectedmenu] = useState(0);
    const [isopen, setIsopen] = useState(false);

    const handleClickmenu = (idx) => {
        setSelectedmenu(idx);
    };

    const hadleProfileClick = (idx) => {
        setIsopen(!isopen)
    };

    const menuClass = "menu";
    const activeMenuClass = "menu Selected"
    return (
        <div className="menu-container">
            <img src="media/kite-logo.svg" className="w-[25px]" />
            <div className="menus">
                <ul>
                    <li>
                        <Link to="/"
                            onClick={() => handleClickmenu(0)}
                            className="{selectedmenu === 0 ? activeMenuClass : menuClass} !no-underline"
                        >Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders"
                            onClick={() => handleClickmenu(1)}
                             className="{selectedmenu === 1 ? activeMenuClass : menuClass} !no-underline"
                        > Orders</Link>
                        
                    </li>
                    <li>
                        <Link to="/holdings"
                            onClick={() => handleClickmenu(2)}
                            className="{selectedmenu === 2 ? activeMenuClass : menuClass} !no-underline"
                        > Holdings</Link>

                    </li>
                    <li>
                        <Link to="/positions"
                            onClick={() => handleClickmenu(3)}
                            className="{selectedmenu === 3 ? activeMenuClass : menuClass} !no-underline"
                        >Positions</Link>
                    </li>
                    <li>
                        <Link to="/funds"
                            onClick={() => handleClickmenu(4)}
                            className="{selectedmenu === 4? activeMenuClass : menuClass}  !no-underline"
                        >Funds</Link>
                    </li>
                    {/* <li>
                        <Link to="/apps"
                            onClick={() => handleClickmenu(5)}
                            className={selectedmenu === 5 ? activeMenuClass : menuClass}  
                        >Apps</Link>
                    </li> */}
                </ul>
                <hr />
                <div className="profile" onClick={hadleProfileClick}>
                    <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                </div>
            </div>
        </div>
    )
}

export default Menu;