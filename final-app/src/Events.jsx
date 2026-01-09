import React, { useState, useEffect } from 'react';
import './Events.css';
import EventModal from './EventModal';
import Card from './Card';
import Button from './Button';
import EventShow1 from './images/fuu-j-FReocFYzRaA-unsplash.jpg';
import EventShow2 from './images/naughty-cat.jpg';
import EventShow3 from './images/cutecat.jpg';
import EventShow4 from './images/t-ed-K1Tsk9DnHpg-unsplash.jpg';
import EventShow5 from './images/tatyana-rubleva-8xSMklqPHK4-unsplash.jpg';
import EventShow6 from './images/asal-mshk-Y43vAzHTEE0-unsplash.jpg';



const eventData = [
    {
        title: "Cats Nutrition Wellness Day",
        date: "March 20",
        category: "nutrition",
        pic: EventShow1,
        description: "Discover what fuels a healthy feline life! Join us for expert talks on balanced diets, supplements, and more."
    },
    {
        title: "Cat Behavior Seminar",
        date: "April 23",
        category: "behavior",
        pic: EventShow2,
        description: "Ever wonder why cats do what they do? Learn about feline behavior and communication from a certified behaviorist."
    },
    {
        title: "\"Ask the Vet\" Q&A Session",
        date: "May 8",
        category: "health",
        pic: EventShow3,
        description: "Got burning questions about your cat's health? Our local vet will be on hand to answer them."
    },
    {
        title: "Cat Cafe Meet & Greet",
        date: "June 1",
        category: "social",
        pic: EventShow4,
        description: "Enjoy coffee and treats while socializing with adoptable cats in a relaxed cafe setting."
    },
    {
        title: "Handmade Cat Scarf Workshop",
        date: "Dec 12",
        category: "craft",
        pic: EventShow5,
        description: "Create adorable handmade scarves for your feline friends! Enjoy a cozy crafting session guided by experts, perfect for beginners and cat lovers alike."
    },
    {
        title: "Pawsome Birthday Bash: A Celebration for Cats!",
        date: "Flexible",
        category: "social",
        pic: EventShow6,
        description: "Suggest participants pick a date close to their cat's birthday, Celebrate your furry friend's special day with fellow cat lovers! Share stories, maybe even a 'cat-friendly' cake."
    }
]

function Events() {
    const [filter, setFilter] = useState("all");
    const [filteredEvents, setFilteredEvents] = useState(eventData);
    const [availableCategories, setAvailableCategories] = useState([]);

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [joinedEvents, setJoinedEvents] = useState([]);


    function handleConfirm() {
        if (selectedEvent && !joinedEvents.includes(selectedEvent.title)) {
            setJoinedEvents([...joinedEvents, selectedEvent.title]);
            console.log(`Joined event: ${selectedEvent.title}`);
        }
        setSelectedEvent(null);
    }

    function handleLeave(title) {
        setJoinedEvents(prev => prev.filter(t => t !== title));
        setSelectedEvent(null);
    }


    useEffect(() => {

        const categoriesSet = eventData.reduce((acc, event) => {
            acc.add(event.category);
            return acc;
        }, new Set());

        const sortedCategories = Array.from(categoriesSet).sort();

        setAvailableCategories(["all", ...sortedCategories]);
    }, []);

    useEffect(() => {

        if (filter === "all") {
            setFilteredEvents(eventData);
        } else {
            setFilteredEvents(eventData.filter(event => event.category === filter));
        }
    }, [filter]);

    return (

        <div className="events-page">

            <h2>Explore Wonderful Events</h2>

            <div className="filter-controls">
                {availableCategories.map(category => (
                    <Button
                        key={category}
                        className={`filter-item ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        <>
                            {filter === category && "✔ "}
                            {category === "all" ? "All Events" : category.charAt(0).toUpperCase() + category.slice(1)}
                        </>

                    </Button>



                ))}
            </div>

            <div className="events-gallery">
                {filteredEvents.map((event, idx) => (
                    <Card
                        key={idx}
                        className="event-card"
                        title={event.title}
                        pic={event.pic}
                        alt={event.title}

                        customContent={
                            <>
                                <p className="event-card__date">{event.date}</p>
                                <p className="event-card__description">{event.description}</p>
                            </>
                        }

                        linkText={joinedEvents.includes(event.title) ? "Joined!" : "Join Here"}
                        ariaLabel={`Click to join the event: ${event.title}. Confirming means you will participate in this event.`}
                        onReadMore={() => setSelectedEvent(event)}
                    />

                ))}
                {filteredEvents.length === 0 && <p>No events found for this category.</p>}
            </div>

            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
                onConfirm={handleConfirm}
                onLeave={handleLeave}
                isJoined={selectedEvent && joinedEvents.includes(selectedEvent.title)}
            />

            <Button className="skip-button" onClick={() => {
                console.log('Button clicked!');
                window.location.href = "/";
            }}
                visual="link">Back to homepage
            </Button>
        </div>
    );
}
export default Events;



