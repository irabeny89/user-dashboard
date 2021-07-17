import User from "./User";
import type { UserType } from "../interfaces";

type UsersProps = { users: UserType[]; renderProfile: (id: string) => void };

const Users = ({ users = [], renderProfile }: UsersProps) => (
  <div>
    {users.map((user) => (
      <User
        {...user}
        renderProfile={renderProfile}
        key={`${user.login.uuid}${user.login.sha1}`}
      />
    ))}
  </div>
);

export default Users;
