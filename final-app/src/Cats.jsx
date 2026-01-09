import Card from './Card';
import Button from "./Button";
import CatShow1 from './images/mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg';
import CatShow2 from './images/milada-vigerova-0TPAlZ87mzk-unsplash.jpg';
import CatShow3 from './images/milada-vigerova-7E9qvMOsZEM-unsplash.jpg';
import CatShow4 from './images/raoul-droog-yMSecCHsIBc-unsplash.jpg';
import CatShow5 from './images/cyrus-chew-Dl39g6QhOIM-unsplash.jpg';
import CatShow6 from './images/timur-m-SAKLELG-pO8-unsplash.jpg';

import './Cats.css';

function Cats() {

    const onReadMore = () => {
        window.location.href = "/events/";
        console.log("Read more clicked!");
    }

    return (
        <>
            <h2 className='page-title'>Celebrity Cats Spotlight</h2>


            <div className="cards">
                <Card
                    className="card"
                    onReadMore={onReadMore}
                    title="Jorts"
                    pic={CatShow1}
                    alt="A white and gray fluffy cat with blue eyes looks upward with a curious look"
                    text=" As a british short hair, Jorts has gained recognition not only for his adorable looks but also for attending various cat-centered events. "
                    linkText="Read More"
                />
                <Card
                    className="card"
                    onReadMore={onReadMore}
                    title="Maru"
                    pic={CatShow2}
                    alt="A dark gray cat with yellowish eyes sits on the wooden floor, looking slightly upward with an attentive look"
                    text="A dark gray cat called Maru with yellowish eyes sits on the wooden floor, looking slightly upward with an attentive look "
                    linkText="Read More"
                />
                <Card
                    className="card"
                    onReadMore={onReadMore}
                    title="Jean"
                    pic={CatShow3}
                    alt="A gray cat with green eyes sits upright on a white table, leaning to the side"
                    text="A gray cat called Jean with green eyes sits upright on a white table, leaning to the side. Jean wins lots of fans in Cat Cafe Meet."
                    linkText="Read More"
                />
                <Card
                    className="card"
                    onReadMore={onReadMore}
                    title="Nyancat"
                    pic={CatShow4}
                    alt="A fluffy gray cat with folded ears wearing reflective, yellow-tinted sunglasses, looking very cool"
                    text="A fluffy gray cat called Nyancat with folded ears wearing reflective, yellow-tinted sunglasses, looking very cool."
                    linkText="Read More"
                />
                <Card
                    className="card"
                    onReadMore={onReadMore}
                    title="Grumpy Cat"
                    pic={CatShow5}
                    alt="A fluffy orange and white cat is sitting upright on a blanket near the window, staring forward with grumpy look"
                    text="Our famous fluffy orange and white cat is sitting upright on a blanket near the window, staring forward with grumpy look."
                    linkText="Read More"
                />
                <Card
                    className="card"
                    onReadMore={onReadMore}
                    title="LiI Bub"
                    pic={CatShow6}
                    alt="Cute fluffy kitten with blue eyes is staring directly at you with slightly surprised expression on a cozy bed"
                    text="Cute fluffy kitten called Lil Bub with blue eyes is staring directly at you with slightly surprised expression on a cozy bed."
                    linkText="Read More"
                />
            </div>
            <Button className="skip-button" onClick={() => {
                console.log('Button clicked!');
                window.location.href = "/";
            }}
                visual="link">Back to homepage
            </Button>
        </>
    );
}

export default Cats;