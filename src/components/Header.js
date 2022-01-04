import authUtils from "../utils/authUtils";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, currentRoles, setCurrentRoles, onLogout }) => {
    const navigate = useNavigate();

    const onClick = () => {
        onLogout()
        setCurrentRoles([])
        navigate('/')
    }

    return (
        <div>
            <ul className='header'>
                <li><NavLink activeclassname='active' to='/'>Home</NavLink></li>

                {authUtils.handleAccess('user', currentRoles) && <li><NavLink activeclassname='active' to='/ownerlist'>Owner List</NavLink></li>}
                {authUtils.handleAccess('user', currentRoles) && <li><NavLink activeclassname='active' to='/harbours'>Harbours</NavLink></li>}
                {authUtils.handleAccess('admin', currentRoles) && <li> <NavLink activeclassname='active' to='/admin'>Admin</NavLink></li>}
                {authUtils.handleAccess('admin', currentRoles) && <li> <NavLink activeclassname='active' to='/create-boat'>Create Boat</NavLink></li>}
                {authUtils.handleAccess('admin', currentRoles) && <li> <NavLink activeclassname='active' to='/connect'>Connect a Boat</NavLink></li>}

                {!isLoggedIn && <li><NavLink activeclassname='active' to='/login'>Login</NavLink></li>}
                {isLoggedIn && <button onClick={onClick} className='logout'>Logout</button>}
            </ul>
        </div >
    )
}

export default Header