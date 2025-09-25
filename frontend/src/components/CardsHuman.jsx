import "../styles/CardsHuman.css"
import HumanImg from "../assets/_image_.svg"

const CardsHuman = () => {
    return(
        <section className="card-section">
            <div className="card-container">
                <div className="cards-image">
                    <img src={HumanImg} alt="card-image" />
                </div>
                <div className="card-text">
                    <h2 className="card-h2">
                        Rick Sanchez
                    </h2>
                    <p className="card-p">
                        Human
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CardsHuman;
