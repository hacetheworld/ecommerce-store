import React from 'react';
import './custom-button.styles.scss';
export default function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
    return (
        <button className={` custom-button ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    );
}
