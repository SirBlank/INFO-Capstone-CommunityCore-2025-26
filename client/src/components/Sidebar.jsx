import { NavLink } from "react-router"


export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo-box">
                <div className='logo'>
                    <img src="/iSchoolWhite.png" className="logo-img" alt="iSchool icon"></img>
                </div>
            </div>
            <nav>
                <div className="nav-item">
                    <img src="/iSchoolWhite.png" className="logo-img" alt="iSchool icon"/>
                    <NavLink className="nav-link">Programs</NavLink>
                </div>
                <div className="nav-item">
                    <img src="/iSchoolWhite.png" className="logo-img" alt="iSchool icon"/>
                    <NavLink className="nav-link">Users</NavLink>
                </div>
                <div className="nav-item">
                    <img src="/iSchoolWhite.png" className="logo-img" alt="iSchool icon"/>
                    <NavLink className="nav-link">Settings</NavLink>
                </div>
            </nav>
        </aside>
    )

}