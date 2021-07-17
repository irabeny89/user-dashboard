import { MouseEventHandler } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaGreaterThan, FaLessThan, FaFileDownload } from "react-icons/fa";
import Users from "./Users";
import type { UserType } from "../interfaces";
import Profile from "./Profile";
import { Container } from "react-bootstrap";
import { getJSONLink } from "../utils";

type OutputPanelProps = {
  selection: string;
  users: UserType[];
  showProfile: boolean;
  profile: UserType | undefined;
  renderProfile: (id: string) => void;
  backToList: () => void;
  paginate: MouseEventHandler<HTMLButtonElement>;
};

const OutputPanel = ({
  users = [],
  showProfile,
  profile,
  selection,
  renderProfile,
  backToList,
  paginate,
}: OutputPanelProps) => (
  <div>
    <Container fluid aria-describedby="List of users">
      {users.length && (
        <Container fluid className="bg-white p-3 rounded">
          <h2>{!showProfile && selection}</h2>
          {showProfile ? (
            <Profile profile={profile} backToList={backToList} />
          ) : (
            <Users users={users} renderProfile={renderProfile} />
          )}
          <Row className="mt-5">
            <Col>
              <Button
                variant="outline-dark"
                as="a"
                href={`${getJSONLink(selection)}`}
              >
                <FaFileDownload /> See JSON results
              </Button>
            </Col>
            <Col className="text-center">
              <Button variant="outline-dark" onClick={paginate}>
                <FaLessThan /> Prev
              </Button>{" "}
              <Button variant="outline-primary" onClick={paginate}>
                <FaGreaterThan /> Next
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  </div>
);

export default OutputPanel;
