import "./App.css";
import UserList from "./components/userList/UserList";
import students from "./data/students.json";

function App() {
  return (
    <div className="App">
      {/* <ul>
        <li>students[0].name</li>
        <li>students[1].name</li>
        <li>students[2].name</li>
        <li>students[3].name</li>
        <li>students[4].name</li>
        <li>students[5].name</li>
        <li>students[6].name</li>
        <li>students[7].name</li>
        <li>students[8].name</li>
        <li>students[9].name</li>
        <li>students[10].name</li>
      </ul> */}
      {/* <ul>
        {students.map((student) => (
          <li key={student.name}>{student.name}</li>
        ))}
      </ul> */}
      {/* <UserCard name={students[0].name} avatar={students[0].avatar} />
      <UserCard name={students[1].name} avatar={students[1].avatar} />
      <UserCard name={students[2].name} avatar={students[2].avatar} /> */}
      {/* {students.map((student) => (
        <UserCard {...student} key={student.name} />
      ))} */}
      <UserList users={students} />
    </div>
  );
}

export default App;
