import "./index.css";
import { Routes, Route, NavLink } from "react-router-dom";
import team from "./data/team.json";
import logo from "./assets/trans-logo.png";
import MemberCard from "./components/MemberCard";

function App() {
  return (
    <div className = "min-h-screen bg-slate-100 flex items-center justify-center">
      <Routes>
        <Route exact path = "/" element = {
            <header className = "flex flex-row justify-center items-center w-full">
              <img className = "w-1/2 animate-slideLeft" src = {logo} alt = "teamLogo" />
              <div className = "flex flex-col">
                <h1 className = "text-6xl text-fuchsia-800 text-opacity-70 font-bold animate-slideUp select-none my-4">Ctrl Alt Elite</h1>
                <div className="flex flex-wrap">
                  {team.map((member, index) => (
                    <NavLink className = "bg-light-fus p-2 shadow-lg shadow-fuchsia-300 rounded-lg w-1/3 text-center m-3 py-3 px-0 hover:animate-pulse text-slate-200 font-semibold" to = {`/${member.id}`}>
                      {member.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </header>
        }/>
        {team.map((member) => (
          <Route
            path = {`/${member.id}`}
            element = {<MemberCard member = {member} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
