/*eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from "prop-types";

const UserView = ({user, onFetchUser}) => (
    <div>
        <hr/>
        <div>
            User id: {user.id}
        </div>
        <hr/>
        <button onClick={onFetchUser}>Fetch User</button>
    </div>);

UserView.propTypes = {
    user: PropTypes.object.isRequired,
    onFetchUser: PropTypes.func.isRequired
};

export default UserView;
