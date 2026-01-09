import './EventModal.css';
import Button from './Button';
import EmailVerification from './EmailVerification';
import { useState, useEffect } from 'react';

function EventModal({ event, onClose, onConfirm, onLeave, isJoined }) {

    const [email, setEmail] = useState('');
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


    const [showEmailError, setShowEmailError] = useState(false);


    const [needsParking, setNeedsParking] = useState(false);
    const [showParkingError, setShowParkingError] = useState(false);

    useEffect(() => {
        if (event) {
            setEmail('');
            setNeedsParking(false);
            setShowParkingError(false);
        }
    }, [event]);

    if (!event) return null;


    const handleJoin = () => {

        if (!isEmailValid) {
            setShowEmailError(true);
            return;
        }

        setShowEmailError(false);

        if (!needsParking) {
            setShowParkingError(true);
            return;
        }

        setShowParkingError(false);
        onConfirm(email);


        setEmail('');
        setNeedsParking(false);
    };




    const handleLeave = () => {
        onLeave(event.title);
        setEmail('');
        setNeedsParking(false);

    };

    const handleCancel = () => {
        onClose();
        setEmail('');
        setNeedsParking(false);
        setShowParkingError(false);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <dialog
                className="modal"
                open
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="modal-title">Join Cat Event</h2>
                <p>Are you sure you want to participate in this event?</p>

                <div className="modal-event-info">
                    <h3>{event.title}</h3>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Category:</strong> {event.category.charAt(0).toUpperCase() + event.category.slice(1)}</p>
                </div>

                <EmailVerification
                    className="modal-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                {showEmailError && (
                    <p className="email-error">Please enter your email</p>
                )}


                <label htmlFor="modalCheckbox" className="modal-label">
                    <input
                        type="checkbox"
                        id="modalCheckbox"
                        name="modal-checkbox"
                        className="modal-checkbox"
                        checked={needsParking}
                        onChange={(e) => setNeedsParking(e.target.checked)}
                    />
                    Do you need parking space?
                </label>

                {showParkingError && (
                    <p className="modal-error">Please select if you need parking.</p>
                )}



                <div className="modal-buttons">
                    <Button type="button"
                        className="button-cancelled"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>

                    {!isJoined ? (
                        <Button
                            type="button"
                            className="button-joined"
                            onClick={handleJoin}

                        >
                            Confirm
                        </Button>
                    ) : (
                        <Button type="button" className="button-joined" onClick={handleLeave}
                        >
                            Leave Event
                        </Button>
                    )}
                </div>
            </dialog >
        </div >
    );
}

export default EventModal;