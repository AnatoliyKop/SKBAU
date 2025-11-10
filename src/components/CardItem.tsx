import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { CardData } from "../utils/typs.ts";

const CardItem = ({ title, description, link }: CardData) => {
    return (
        <Card className="h-100 shadow-lg border-0 rounded-4">
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title className="gradient">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </div>
                <Link to={link}>
                    <Button variant="warning" className="mt-2 w-100">
                        Mehr erfahren
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default CardItem;