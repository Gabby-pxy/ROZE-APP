import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

function Settings(){
    return(
        <div className = "settings">
       
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profle Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://qph.cf2.quoracdn.net/main-qimg-7dd84c3fd6c7a9f92ed02d1bfdedc553"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Karina" />
                    <label>Email</label>
                    <input type="text" placeholder="karina2aespa@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings;