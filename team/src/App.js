import "./index.css";
import { Routes, Route, NavLink } from "react-router-dom";
import team from "./data/team.json";
import MemberCard from "./Components/MemberCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <header className="" exact path={"/"}>
              <h1 className="">Ctrl Alt Delete</h1>
              <div className="flex flex-row">
                {team.map((member) => (
                  <NavLink className="bg-slate-600 p-2" to={`/${member.id}`}>
                    {member.name}
                  </NavLink>
                ))}
              </div>
            </header>
          }
        />
        {team.map((member) => (
          <Route
            path={`/${member.id}`}
            element={<MemberCard member={member} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
