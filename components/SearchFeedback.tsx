import { CSSProperties, MutableRefObject } from "react";
import { Badge } from "react-bootstrap";
import { constantVariable } from "../config";
import type { UserType } from "../interfaces";

type SearchFeedbackProps = { latestUsers: UserType[] };

const SearchFeedback = ({ latestUsers }: SearchFeedbackProps) => {
  const {
    ALL_USERS_ICON_BG_COLOR,
    FEMALE_USERS_ICON_BG_COLOR,
    MALE_USERS_ICON_BG_COLOR,
  } = constantVariable;
  const allUsersNumber = latestUsers.length;
  const maleUsersNumber = latestUsers.filter(
    ({ gender }) => gender == "male"
  ).length;
  const femaleUsersNumber = latestUsers.filter(
    ({ gender }) => gender == "female"
  ).length;
  const allUsersStyle: CSSProperties = {
    backgroundColor: ALL_USERS_ICON_BG_COLOR,
  };
  const maleUsersStyle: CSSProperties = {
    backgroundColor: MALE_USERS_ICON_BG_COLOR,
  };
  const femaleUsersStyle: CSSProperties = {
    backgroundColor: FEMALE_USERS_ICON_BG_COLOR,
  };
  return (
    <div className="mb-3">
      Found: <Badge style={allUsersStyle}>{allUsersNumber}</Badge> | Male:{" "}
      <Badge style={maleUsersStyle}>{maleUsersNumber}</Badge> | Female:{" "}
      <Badge style={femaleUsersStyle}>{femaleUsersNumber}</Badge>
    </div>
  );
};

export default SearchFeedback;
