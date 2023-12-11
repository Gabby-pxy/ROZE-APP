import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css"

function Sidebar(){
    const [cats, setCats] = useState([])
    useEffect(() => {
        const getCats = async ()=>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        };
        getCats();
    },
     []);

    return (
        <div className = "sidebar">
            <div className="sidebarItem">
                 <span className="sidebarTitle">'FIT OF THE WEEK</span>
                 <img className="sidebarImg"
                    src="https://i.pinimg.com/564x/a5/90/25/a590257a24f1e8f7e3f903dbf3b54975.jpg" 
                    alt="" />
                <p className = "sidebarDescription"> 
                    Purr. Jaideyn Lowe is devouring this outfit from the clunky black boots to the miniskirt and racer jacket. Y2k is resurging and we are here for it. Just because fall is here doesn't mean you gotta stop being a baddie. Here is our outfit of the week.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <li className="sidebarListItem">{c.name}</li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-x-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
    </div>
</div>
        </div>
    )
}

export default Sidebar;