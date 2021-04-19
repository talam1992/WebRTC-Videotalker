import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png'
import UsernameInput from './components/UsernameInput';
import SubmitBuuton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { setUsername } from '../store/actions/dashboardActions';
import { registerNewUser } from '../utils/wssConnection/wssConnection';
import './LoginPage.css';



const LoginPage = ({ saveUsername }) => {
    const [username, setUsername] = useState('');

    const history = useHistory();

    const handleSubmitButtonPressed =() => {
        history.push('./dashboard');
        registerNewUser(username)
        saveUsername(username);
    };

    return (
        <div className='login-page_container background_main_color'>
             <div className='login-page_login_box background_secondary_color'>
                 <div className='login-page_logo_container'>
                    <img className='login-page_logo_image' src={logo} alt='VideoTalker' />
                 </div>
                 <div className='login-page_title_container'>
                    <h2>Get on Board</h2>
                 </div>
                 <UsernameInput username={username} setUsername={setUsername}/>
                 <SubmitBuuton handleSubmitButtonPressed={handleSubmitButtonPressed}/>
            </div>
        </div>
    );
};

const mapActionToProps = (dispatch) => {
    return {
        saveUsername: username => dispatch(setUsername(username))
    };
};

export default connect(null, mapActionToProps)(LoginPage);

