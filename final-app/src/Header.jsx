import './Header.css'
import CatLogo from './images/alvan-nee-ZCHj_2lJP00-unsplash.jpg'
import Modal from './Modal';
import Form from './Form.jsx';
import GlobalNav from './GlobalNav.jsx';



function Header({ changePage }) {

    function goToHomePage(e) {
        e.preventDefault();
        window.history.pushState(null, '', '/');
    }


    return (
        <>
            <header className="header">
                <a className="skip-to-content-link" href="#main">Skip to content</a>
                <img src={CatLogo} className="header__logo" href='/' onClick={goToHomePage} alt="Logo: A cute cat A cat sits facing left, gazing skyward with its left paw reaching toward the sky, while its right paw presses firmly against the floor." />
                <h1 className="header__title">Cats Wonderland</h1>
                <Modal className="openModal">
                    <Form id="12345" />
                </Modal>
            </header>


            <GlobalNav className="header__nav" changePage={changePage} />
        </>
    );
}

export default Header;