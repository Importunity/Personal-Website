import { LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import {logout} from '../../actions/authActions';

const Logout = () => {
    const dispatch = useDispatch();
    const logoutClick = () => {
        dispatch(logout())
    }
    return(
        <div onClick={logoutClick}><LogoutOutlined /> Logout</div>
    )
}

export default Logout;