import Carousel from './Carousel';
import Button from "./Button";

import CatCard1 from './images/amber-kipp-75715CVEJhI-unsplash.jpg';
import CatCard2 from './images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg';
import CatCard3 from './images/cyrus-chew-Dl39g6QhOIM-unsplash.jpg';
import CatCard4 from './images/hang-niu-Tn8DLxwuDMA-unsplash.jpg';
import './Home.css';

function Home() {
    return (
        <>
            <h2 className="homeTitle">Dive into Meow's World!</h2>
            <Carousel />
            <div className="container">
                <h2 className="homeTitle">Meows Take Over the Internet</h2>
            </div>
            <div className="homepage__cards">
                <div className="card">
                    <span className="card__title">The Cats Commons</span>
                    <p className="card__content">Cats have been living with people for thousands of years.
                        They were first tamed in the Near East, where they helped farmers by catching mice. Over time, they became part of our homes and our hearts.

                        The Cats Wonderland is a space for cat lovers to enjoy everything about cats —
                        their history, fun facts, and cat-related events. Some cats have even become famous online and in movies!
                    </p>
                    <img src={CatCard1} className="content__cat1" alt="This is a cute cat looking at a vase of flowers ." />
                    <Button className="my-button" onClick={() => {
                        console.log('visualButton clicked!');
                        window.location.href = "/cats/";
                    }} type="button" visual="button">Read more</Button>
                </div>
                <div className="card">
                    <span className="card__title">Upcoming Meow Gatherings</span>
                    <p className="card__content">
                        Join fellow feline enthusiasts at our upcoming meow gatherings, where you can connect with other cat lovers and celebrate our furry friends.Discover a world of feline fun and connection at our upcoming cat
                        {' '}
                        <Button className="my__visualLinkButton" onClick={() => {
                            console.log('visualLink clicked!');
                            window.location.href = "/events/";
                        }} visual="link">events
                        </Button>
                        {' '} !
                    </p >
                    <div className="content__cat">
                        <img src={CatCard2} className="content__cat2" alt="These are four cute cats." />
                        <img src={CatCard3} className="content__cat3" alt="This is a lion." />
                        <img src={CatCard4} className="content__cat3" alt="This is a tiger." />
                    </div>

                    <p className="last-content">Our popular and extremely cute cats will be at the events to bring you happiness!</p>
                </div>
            </div>
        </>
    );
}

export default Home;
