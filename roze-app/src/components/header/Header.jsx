import "./header.css"

function Header(){
    return(
        <div className="header">
            <div className= "headerTitles"> 
                <span className= "headerTitleSm">Be the next It-Girl</span>
                <span className= "headerTitleLg"> Roze</span>
            </div>
            <img className="headerImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/22d9c998967991.5ee86b5fe6c99.jpg" alt="" />
        </div>
    )
}

export default Header;