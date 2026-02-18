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
                <NavLink className="nav-item">
                    <img src="/iSchoolWhite.png" className="logo-img" alt="iSchool icon"/>
                    <p className="nav-link">Programs</p>
                </NavLink>
                <NavLink className="nav-item">
                    <img src="/iSchoolWhite.png" className="logo-img" alt="iSchool icon"/>
                    <p className="nav-link">Users</p>
                </NavLink>
                <NavLink className="nav-item">
                    <img src="/iSchoolWhite.png" className="logo-img" alt="iSchool icon"/>
                    <p className="nav-link">Settings</p>
                </NavLink>
            </nav>
        </aside>
    )

}