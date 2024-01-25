import { Card, Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

export default function Store() {
  return (
    <>
      <Card.Title className="fs-1 mb-4" style={{fontWeight: "bolder",
}}>Store</Card.Title>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}><StoreItem {...item}/></Col>
        ))}
      </Row>
    </>
  );
}
