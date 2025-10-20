import type { CardData } from "../utils/typs.ts";
import { Button, Card } from "react-bootstrap";

const CardItem = ({ title, description, link }: CardData) => {
    return (
        <Card className="h-100 shadow-lg border-0 rounded-4">
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title className="gradient">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </div>
                <Button variant="warning" href={link}>
                    Mehr erfahren
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardItem;