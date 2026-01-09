import './Footer.css';
import EmailVerification from './EmailVerification';
import Button from "./Button";
import { useState } from 'react';

function Footer({ changePage }) {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '') return;
        setSubmitted(true);
        setEmail('');
    }

    function goToPage(e) {
        e.preventDefault();
        changePage(e.target.pathname);
    }

    return (
        <footer className="footer">
            <div className='footer_form'>
                <h2 className='subscribe__title'>Stay up to date on Wonderland Cats News!</h2>
                <form className='subscribe__form' onSubmit={handleSubmit}>
                    <EmailVerification
                        className="subscirbe__email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className='subscribe__submit' type="submit">
                        {submitted ? 'Subscribed' : 'Subscribe'}
                    </Button>
                </form>

                {submitted && (
                    <p className="subscribe-message">Thanks for your subscription!</p>
                )}
            </div>

            <ul className="footer__list">
                <li className="footer__item"><a href="/privacy/" onClick={goToPage}>Privacy Policy</a></li>
                <li className="footer__item"><a href="/faq/" onClick={goToPage}>FAQ</a></li>
                <li className="footer__item"><a href="/contact/" onClick={goToPage}>Contact Us</a></li>
                <li className="footer__item"><a href="/social/" onClick={goToPage}>Social Media</a></li>
            </ul>

        </footer>
    );
}
export default Footer;

