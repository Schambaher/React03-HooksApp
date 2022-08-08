import { Link, NavLink } from "react-router-dom"


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light rounded-3 mt-3">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">HookContext</Link>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <NavLink 
                            to={'/'} 
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to={'/about'} 
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to={'/login'} 
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
