import UserCard from "../userCard/UserCard";
import "./UserList.css";

export default function UserList({ users }) {
  return (
    <div className="UserList">
      {users.map((user) => (
        <UserCard {...user} key={user.name} />
      ))}
    </div>
  );
}
