import Button from "./Button";
import Accordion from './Accordion';

function FAQ() {
    return (
        <div>
            <h2>FAQ</h2>
            <div className="faq-accordion">
                <Accordion title="How to adopt a cat">

                    Adopting a cat is a rewarding journey, but it starts with preparation. Make sure you have a proper space ready — a safe, quiet area with essentials like a litter box, scratching post, and cozy resting spots. Just as important is knowledge: understanding a cat’s needs, behavior, and routine will help you build a strong bond from day one. "
                </Accordion>

                <Accordion title="How to welcome new cat">

                    "Welcoming a new cat into your home is a big step. Our website offers a supportive space where cat lovers can share experiences, ask questions, and learn from one another — all to help you feel confident and connected as you grow your feline family."
                </Accordion>

                <Accordion title="How to feed Cat Correctly">

                    Feeding your cat the right way is key to their health and happiness. We provide guidance on choosing quality food, understanding portion sizes, and creating a consistent feeding routine. Whether you're raising a kitten or caring for a senior cat, our community is here to share advice and real-life tips."
                </Accordion>

                <Accordion title="How to know cat feels happy">
                    A happy cat shows it in subtle ways — relaxed posture, slow blinks, playful energy, and soft purring. Learn how to read your cat’s body language, understand their emotional needs, and create an environment where they thrive. Our community shares real stories and tips to help you build a joyful bond with your feline friend."
                </Accordion>

                <Accordion title="How to celebrate my cat's birthday?">
                    Becoming part of our cat-loving community is easy and rewarding. Join discussions, share your stories, ask questions, or simply connect with fellow cat enthusiasts who understand the joy (and chaos!) of feline companionship. Whether you're a first-time cat parent or a seasoned pro, there's a place here for you."
                </Accordion>

                <Accordion title="What should be done to adopt a stray cat">
                    Becoming part of our cat-loving community is easy and rewarding. Join discussions, share your stories, ask questions, or simply connect with fellow cat enthusiasts who understand the joy (and chaos!) of feline companionship. Whether you're a first-time cat parent or a seasoned pro, there's a place here for you."
                </Accordion>

                <Accordion title="How to protect my female cat from postnatal depression">
                    Becoming part of our cat-loving community is easy and rewarding. Join discussions, share your stories, ask questions, or simply connect with fellow cat enthusiasts who understand the joy (and chaos!) of feline companionship. Whether you're a first-time cat parent or a seasoned pro, there's a place here for you."
                </Accordion>

                <Accordion title="If I have over one cat, what should be done to stop them fighting?">
                    Becoming part of our cat-loving community is easy and rewarding. Join discussions, share your stories, ask questions, or simply connect with fellow cat enthusiasts who understand the joy (and chaos!) of feline companionship. Whether you're a first-time cat parent or a seasoned pro, there's a place here for you."
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

export default FAQ;