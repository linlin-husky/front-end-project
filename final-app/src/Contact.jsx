import './Contact.css';
import Button from "./Button";

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>

            <div className="contactpage__content--others">
                <p>
                    Have a question about one of our wonderful cats? Want to join the event or volunteer with other cat lovers? We'd love to hear from you!
                </p>

                <p>
                    Whether you're curious about upcoming events, looking to adopt, or need help with your account, our team is here to help. You can feel free to reach us through the following ways:
                </p>
            </div>

            <p className="contactpage__content"> Phone: +1 (555) 123-4567</p>
            <p className="contactpage__content"> Email: hello@catswonderland.org</p>
            <p className="contactpage__content">Visit Us: 12 Silk Lane, PO Box 222, Boston, MA 02474</p>
            <p className="contactpage__content">Hours: Open Daily : 10:00 AM to 6:00 PM</p>
            <p className="contactpage__content">
                Mailing Inquiries: Cats Wonderland, PO Box 222, Boston, MA 02474
            </p>
            <p className="contactpage__content">
                Follow us on Instagram: <a href="https://instagram.com/catswonderland">@catswonderland</a>
            </p>
            <p className="contactpage__content">
                You can also visit our FAQ page for quick answers to common questions!
            </p>

            <Button className="skip-button" onClick={() => {
                console.log('Button clicked!');
                window.location.href = "/";
            }}
                visual="link">Back to homepage
            </Button>
        </div>
    );
}

export default Contact;