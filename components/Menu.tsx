import { ChangeEventHandler, MouseEventHandler, FormEventHandler, MutableRefObject } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaFemale, FaMale, FaSearch, FaUsers } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { CSSProperties } from "react";
import { constantVariable } from "../config";
import SearchFeedback from "./SearchFeedback";
import type { UserType } from "../interfaces";

type MenuProps = {
  searchTerm: string;
  showProfile: boolean;
  latestUsers: MutableRefObject<UserType[]>;
  sortUsers: MouseEventHandler<HTMLDivElement>;
  handleSearchInputChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

const {
  ALL_USERS_ICON_BG_COLOR,
  FEMALE_USERS_ICON_BG_COLOR,
  MALE_USERS_ICON_BG_COLOR,
} = constantVariable;

const usersButtonStyle: CSSProperties = {
  backgroundColor: ALL_USERS_ICON_BG_COLOR,
};
const maleUsersButtonStyle: CSSProperties = {
  backgroundColor: MALE_USERS_ICON_BG_COLOR,
  margin: "0 1rem",
};
const femaleUsersButtonStyle: CSSProperties = {
  backgroundColor: FEMALE_USERS_ICON_BG_COLOR,
};

const Menu = ({
  handleSearchInputChange,
  sortUsers,
  handleSubmit,
  searchTerm,
  showProfile,
  latestUsers
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
          disabled={showProfile}
          autoFocus
          placeholder="Find user"
          name="searchTerm"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </InputGroup>
    </Form>
    <SearchFeedback latestUsers={latestUsers} />
    <h2>Show Users</h2>
    <br />
    <div
      aria-describedby="Menu options"
      className="d-flex justify-content-center text-center"
    >
      <div onClick={sortUsers}>
        <Button disabled={showProfile} style={usersButtonStyle}>
          <FaUsers size="65" />
        </Button>
        <p>All Users</p>
      </div>
      <div onClick={sortUsers}>
        <Button disabled={showProfile} style={maleUsersButtonStyle}>
          <FaMale size="65" />
        </Button>
        <p>Male Users</p>
      </div>
      <div onClick={sortUsers}>
        <Button disabled={showProfile} style={femaleUsersButtonStyle}>
          <FaFemale size="65" />
        </Button>
        <p>Female Users</p>
      </div>
    </div>
  </div>
);

export default Menu;
