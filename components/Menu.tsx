import { ChangeEventHandler, MouseEventHandler, FormEventHandler } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaFemale, FaMale, FaSearch, FaUsers } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { CSSProperties } from "react";

type MenuProps = {
  searchTerm: string;
  sortUsers: MouseEventHandler<HTMLDivElement>;
  handleSearchInputChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>
};

const usersButtonStyle: CSSProperties = {
  backgroundColor: "#f935a9",
};
const maleUsersButtonStyle: CSSProperties = {
  backgroundColor: "#7946c1",
  margin: "0 1rem",
};
const femaleUsersButtonStyle: CSSProperties = {
  backgroundColor: "#30bbb5",
};

const Menu = ({
  handleSearchInputChange,
  sortUsers,
  handleSubmit,
  searchTerm,
}: MenuProps) => (
  <div className="text-white mx-5 mb-3">
    <p style={{ fontSize: "xx-large" }}>
      Hello, <span style={{ fontWeight: "bolder" }}>Admin</span>
    </p>
    <p>Welcome to your dashboard, kindly sort through the user base.</p>

    <Form className="my-5" onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text className="bg-secondary border-0">
            <FaSearch size="26" color="white" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          autoFocus
          placeholder="Find a user"
          name="searchTerm"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </InputGroup>
    </Form>

    <h2>Show Users</h2>
    <br />
    <div className="d-flex justify-content-center text-center">
      <div onClick={sortUsers}>
        <Button style={usersButtonStyle}>
          <FaUsers size="65" />
        </Button>
        <p>All Users</p>
      </div>
      <div onClick={sortUsers}>
        <Button style={maleUsersButtonStyle}>
          <FaMale size="65" />
        </Button>
        <p>Male Users</p>
      </div>
      <div onClick={sortUsers}>
        <Button style={femaleUsersButtonStyle}>
          <FaFemale size="65" />
        </Button>
        <p>Female Users</p>
      </div>
    </div>
  </div>
);

export default Menu;
