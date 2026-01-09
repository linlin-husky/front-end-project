import React, { useState } from 'react';
import './EmailVerification.css';

function EmailVerification({ className, value, onChange }) {


    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);



    return (
        <div>
            <label className="email__label">Email:
                <input
                    id={className}
                    className={className}
                    type="text"
                    value={value}
                    onChange={onChange}

                    placeholder="Enter your email"
                />
            </label>


            {value && (
                <p className={`email-error__symbol ${isValid ? 'email-error__symbol--valid' : 'email-error__symbol--invalid'
                    }`}
                >
                    {isValid ? '✔' : '✘'}
                </p>
            )}

        </div>
    );
}

export default EmailVerification;