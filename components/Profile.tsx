import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaArrowLeft } from "react-icons/fa";
import { UserType } from "../interfaces";
import { Container } from "react-bootstrap";
import { capitalize } from "../utils";

type ProfileProps = {
  profile: UserType | undefined;
  backToList: () => void;
};

const Profile = ({ profile, backToList }: ProfileProps) =>
  !profile ? (
    <div id="feedback">
      <Button
        onClick={backToList}
      >
        <FaArrowLeft /> Go back
      </Button>
      No data.{" "}
    </div>
  ) : (
      <div className="bg-dark text-white rounded">
        <Button
          onClick={backToList}
        >
          <FaArrowLeft color="white" /> Go back
        </Button>
        <div className="text-center my-5 rounded-circle">
          <Image
            className="rounded-circle"
            src={`${profile.picture?.medium || "/vercel.svg"}`}
            width="200"
            height="200"
            alt="image"
          />
        </div>
        <Container>
          <Row>
            <Col xs="2">
              <p>Name:</p>
              <p>Gender:</p>
              <p>Street:</p>
              <p>City:</p>
              <p>State:</p>
              <p>Email:</p>
              <p>Uname:</p>
              <p>Age:</p>
              <p>Cell:</p>
            </Col>
            <Col xs="9" className="offset-1 text-wrap">
              <p>
                {capitalize(profile.name?.title)}{" "}
                {capitalize(profile.name?.first)}{" "}
                {capitalize(profile.name?.last)}
              </p>
              <p>{capitalize(profile.gender)}</p>
              <p>
                {profile.location?.street.number},{" "}
                {capitalize(profile.location?.street.name)}
              </p>
              <p>{capitalize(profile.location?.city)}</p>
              <p>{capitalize(profile.location?.state)}</p>
              <p>{profile.email}</p>
              <p>{profile.login?.username}</p>
              <p>{profile.dob?.age}</p>
              <p>{profile.cell}</p>
            </Col>
          </Row>
        </Container>
        <Button
          onClick={backToList}
          className="mt-4"
        >
          <FaArrowLeft /> Go back
        </Button>
      </div>
  );

export default Profile;
