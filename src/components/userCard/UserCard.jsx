import './UserCard.css';

export default function UserCard({ name, avatar }) {
  return (
    <div className="UserCard">
      <img src={avatar} alt="" />
      <p>{name}</p>
    </div>
  );
}
