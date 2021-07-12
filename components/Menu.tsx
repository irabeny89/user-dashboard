import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaFemale, FaMale, FaSearch, FaUsers } from "react-icons/fa";
import { Button } from "react-bootstrap";

const usersButtonStyle = {
  backgroundColor: "#f935a9",
};
const maleUsersButtonStyle = {
  backgroundColor: "#7946c1",
  margin: "0 1rem",
};
const femaleUsersButtonStyle = {
  backgroundColor: "#30bbb5",
};

const Menu = () => (
    <div className="text-white mx-5">
      <p style={{ fontSize: "xx-large" }}>
        Hello, <span style={{ fontWeight: "bolder" }}>Admin</span>
      </p>
      <p>Welcome to your dashboard, kindly sort through the user base</p>
      <Form className="my-5">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className="bg-secondary border-0">
              <FaSearch size="26" color="white" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control placeholder="Find a user" />
        </InputGroup>
      </Form>
      <h5>Show Users</h5>
      <br />
      <div
        style={{
          display: "flex",
          textAlign: "center",
        }}
      >
        <div>
          <Button style={usersButtonStyle}>
            <FaUsers size="65" />
          </Button>
          <p>All Users</p>
        </div>
        <div>
          <Button style={maleUsersButtonStyle}>
            <FaMale size="65" />
          </Button>
          <p>Male Users</p>
        </div>
        <div>
          <Button style={femaleUsersButtonStyle}>
            <FaFemale size="65" />
          </Button>
          <p>Female Users</p>
        </div>
      </div>
    </div>
  );

export default Menu;
