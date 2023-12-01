import IMAGES from "../images/images"

export default function About() {
    return (
        <div>
            <img src={IMAGES.aboutImage} alt="Camper van in a scenic location" className="about--image"/>
            <div className="about--container">
                <h3>Don't squeeze in a sedan when you could relax in a van</h3>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p> 
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="destination">
                    <h3>Your destination is waiting. Your van is ready.</h3>
                    <button className="destination--button">Explore our vans</button>
                </div>
            </div>
        </div>
    )
}