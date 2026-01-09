import Button from "./Button";
import './About.css';
import PanelImage1 from './images/amber-kipp-75715CVEJhI-unsplash.jpg';
import PanelImage2 from './images/ayako-h7Dw2hF4e0A-unsplash.jpg';
import PanelImage3 from './images/cyrus-chew-Dl39g6QhOIM-unsplash.jpg';
import PanelImage4 from './images/timo-volz-mrTydVjg04o-unsplash.jpg';
import PanelImage5 from './images/timur-m-SAKLELG-pO8-unsplash.jpg';
import PanelImage6 from './images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg';
import Accordion from './Accordion';



function About() {
    return (
        <div>
            <h2>About Cats Wonderland</h2>
            <div className="about-accordion">
                <Accordion title="What We Share">
                    <img className="accordion__pic" src={PanelImage1} alt="A yellow and gray cat is resting on a wooden surface, with its eyes looking upward curiously." />
                    Our website focuses on sharing ideas for fun and interactive activities that cat families can enjoy together, such as DIY cat toys, enrichment games, and outdoor adventures. We include safety tips and guidelines to ensure a positive experience for both cats and humans.
                </Accordion>

                <Accordion title="What We Educate">
                    <img className="accordion__pic" src={PanelImage2} alt=" A white and black cat with yellow eyes sits upright on a white bed, looking forward with cute look" />
                    Our website educate the new and experienced cat owners on how to help their cat companions enjoy a healthy and happy life. Our focus area includes how to feed the cats and provide enough nutrition, how to understand the cats behavior and mental healthy, how to mindfully create meaning moments with their cats, and so on.
                </Accordion>

                <Accordion title="What We Offer">
                    <img className="accordion__pic" src={PanelImage3} alt="A fluffy orange and white cat is sitting upright on a blanket near the window, staring forward with grumpy look" />
                    And then our website Offer practical advice on creating a cat-friendly home environment, including tips for cat-proofing, litter box placement, vertical space enrichment, and creating designated cat zones.
                </Accordion>

                <Accordion title="What We Create">
                    <img className="accordion__pic" src={PanelImage4} alt="A yellow cat with green eyes is sitting upright inside a small cardboard box on the wooden floor, facing forward with a alert and slightly curious look" />
                    At last, our website create a public space where cat owners can connect with one another, share stories, ask questions, and offer support. Foster a supportive and inclusive community where members can seek advice and celebrate their shared love for cats.
                </Accordion>

                <Accordion title="What We Make Together">
                    <img className="accordion__pic" src={PanelImage5} alt="Cute fluffy kitten with blue eyes is staring directly at you with slightly surprised expression on a cozy bed" />
                    We create meaningful memories through fun, hands-on experiences — whether it's something artistic, DIY projects, or unique crafts made with love.
                </Accordion>

                <Accordion title="What We Celebrate">
                    <img className="accordion__pic" src={PanelImage6} alt="'A fluffy orange cat is lying on its side with eyes closed, peacefully sleeping with right paw near its face" />
                    We celebrate the everyday joys that cats bring into our lives — their gentle presence, their cuddles, and the special bond they help us build. From quiet companionship to moments of joy, we honor the love, connection, and happiness that grow through sharing life with a cat.
                </Accordion>
            </div>

            <Button className="skip-button" onClick={() => {
                console.log('Button clicked!');
                window.location.href = "/";
            }}
                visual="link">Back to homepage
            </Button>
        </div>
    );
}

export default About;


