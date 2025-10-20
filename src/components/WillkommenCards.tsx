import CardItem from "./CardItem.tsx";
import {cardData} from "../utils/constants.ts";

const WillkommenCards = () => {
    return (
        <div className="container">
            <div className="row justify-content-center g-4">
                {cardData.map((card) => (
                    <div key={card.title} className="col-sm-6 col-md-4 col-lg-3">
                        <CardItem {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WillkommenCards;