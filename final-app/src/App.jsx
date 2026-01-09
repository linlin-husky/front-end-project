import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import Privacy from './Privacy';
import FAQ from './FAQ';
import Contact from './Contact';
import Social from './Social';
import Events from './Events';
import ThemeButton from "./ThemeButton";


function App() {

    const [page, setPage] = useState(document.location.pathname || '/');



    const changePage = (pathname) => {
        window.history.pushState(null, '', pathname);
        setPage(pathname);
    };

    useEffect(() => {
        function handlePageLoad() {
            setPage(document.location.pathname);
        }

        window.addEventListener('popstate', handlePageLoad);

        return () => {
            window.removeEventListener('popstate', handlePageLoad);
        };
    }, []);



    return (
        <div className="app">

            <Header changePage={changePage} />
            <ThemeButton />
            {page === '/' && <Home />}
            {page === '/about/' && <About />}
            {page === '/events/' && <Events />}
            {page === '/cats/' && <Cats />}
            {page === '/privacy/' && <Privacy />}
            {page === '/faq/' && <FAQ />}
            {page === '/contact/' && <Contact />}
            {page === '/social/' && <Social />}
            <Footer changePage={changePage} />
        </div>
    );
}

export default App;
