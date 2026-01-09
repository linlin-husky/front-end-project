import { useId } from 'react';
import React from 'react';
import DropdownWithOther from './DropdownWithOther';
import EmailVerification from './EmailVerification';
import PasswordVerification from './PasswordVerification';
import './Form.css';


function Form({ id }) {
    const defaultId = useId();
    const finalId = id || defaultId;

    const handleSubmit = (e) => {
        e.preventDefault();

    }


    return (
        <form className="register" onSubmit={handleSubmit}>

            <p className="register__title">Welcome to Cat Wonderland</p>


            <EmailVerification className="register__email" />

            <PasswordVerification className="register__password" />

            <label className="register__label4" htmlFor="annoyMeCheckbox">
                <input className="register__input" type="checkbox" id="annoyMeCheckbox" name="annoy-me" />
                Do you want us to send you annoying emails?
            </label>

            <DropdownWithOther className="register__select" />

            <button className="register__submit" type="submit">Submit</button>

        </form>
    );
}

export default Form;