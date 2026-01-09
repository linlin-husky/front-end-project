import React, { useState } from 'react';
import './PasswordVerification.css';

function PasswordVerification({ className }) {
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setPassword(inputValue);


        const hasUppercase = /[A-Z]/.test(inputValue);
        const hasLowercase = /[a-z]/.test(inputValue);
        const hasNumber = /\d/.test(inputValue);
        const isLengthValid = inputValue.length >= 8;

        setIsValid(hasUppercase && hasLowercase && hasNumber && isLengthValid);
    };

    return (
        <div>
            <label className="password__label">Password:
                <input
                    id="password__field"
                    className={className}
                    type="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
            </label>


            {password && (
                <p className={`password-error__symbol ${isValid ? 'valid' : 'invalid'}`}>
                    {isValid ? '✔' : '✘'}
                </p>
            )}



            {
                password && !isValid && (
                    <p className="password-error__message">
                        Password must contain at least 8 characters, including uppercase, lowercase, and number
                    </p>
                )
            }

        </div >
    );
}

export default PasswordVerification;
