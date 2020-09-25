import React, { Fragment, useCallback } from 'react';
import '../../styles/Logout.css';
import {logout} from '../../actions/authActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function Logout(props){
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
    return (
        <div>
            <Fragment>
                <Link to="/" onClick={props.logout} className="nav-link nav-text" >Logout</Link>

                {/*<a href="/#" onClick={handleOnClick, props.logout}><i className="fas fa-sign-out-alt"></i></a> */}
            </Fragment>
        </div>
    );
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};

export default connect(null, {logout})(Logout);
