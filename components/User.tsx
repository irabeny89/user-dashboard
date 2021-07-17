import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import type { UserType } from "../interfaces";
import { MdEmail, MdContactPhone, MdForward } from "react-icons/md";
import { Button } from "react-bootstrap";
import { capitalize } from "../utils";

type UserProps = { renderProfile: (id: string) => void } & UserType;

const User = ({
  renderProfile,
  picture: { medium },
  name: { first, last },
  location: {
    street: { name, number },
    city,
    state,
  },
  login: { uuid },
  email,
  cell,
}: UserProps) => (
  <Card className="my-4 bg-info rounded text-white px-3">
    <Row className="align-items-center rounded my-2 bg-dark p-3">
      <Col sm="3" className="rounded-circle text-center pt-1 mb-3">
        <Image
          className="rounded-circle"
          src={`${medium || "/Ernest Cartoon.jpg"}`}
          width="90"
          height="90"
          alt="image"
        />
      </Col>
      <Col sm="6" className="offset-1">
        <h4>
          {capitalize(first)} {capitalize(last)}
        </h4>
        <p>
          {number}, {capitalize(name)}, {capitalize(city)}, {capitalize(state)}
        </p>
        <p>
          <MdEmail /> {email}
        </p>
        <p>
          <MdContactPhone /> {cell}
        </p>
      </Col>
      <Col sm="2" className="text-center mt-3">
        <Button variant="outline-light" onClick={() => renderProfile(uuid)}>
          <MdForward />
        </Button>
      </Col>
    </Row>
  </Card>
);

export default User;
