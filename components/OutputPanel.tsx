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
  page: number;
  hasUsers: boolean;
  renderProfile: (id: string) => void;
  backToList: () => void;
  paginate: MouseEventHandler<HTMLButtonElement>;
};

const OutputPanel = ({
  users = [],
  showProfile,
  profile,
  selection,
  page,
  hasUsers,
  renderProfile,
  backToList,
  paginate,
}: OutputPanelProps) => (
  <div className="text-white">
    <Container fluid aria-describedby="List of users">
      {users.length && (
        <Container fluid className="p-3 rounded">
          <h2>{!showProfile && selection}</h2>
          {showProfile ? (
            <Profile profile={profile} backToList={backToList} />
          ) : (
            <div>
              {hasUsers ? (
                <Users users={users} renderProfile={renderProfile} />
              ) : (
                <div className="text-center">User Not Found</div>
              )}
            </div>
          )}
          {!showProfile && (
            <Row className="mt-5">
              <Col>
                <Button
                  variant="outline-light"
                  as="a"
                  href={`${getJSONLink(selection, page)}`}
                >
                  <FaFileDownload /> See JSON results
                </Button>
              </Col>
              <Col xs="auto">
                <Button variant="outline-light" onClick={paginate}>
                  <FaLessThan /> Prev
                </Button>{" "}
                <Button variant="outline-light" onClick={paginate}>
                  <FaGreaterThan /> Next
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      )}
    </Container>
  </div>
);

export default OutputPanel;
