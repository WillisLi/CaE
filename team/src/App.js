import './index.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import team from './data/team.json';

function App() {
  return (
    <div className = "App">
      <header className = "">
        <h1 className = "">Ctrl Alt Delete</h1>
        <div className = "flex flex-row">
          {team.map((member) => (
            <NavLink className = "bg-slate-600 p-2" to = {`/${member.name}`}>
              {member.name}
            </NavLink>
          ))}
        </div>
      </header>
      <Routes>
        {team.map((member) => (
          <Route path = {`/${member.name}`} element = {<Placeholder />}/>
        ))}
      </Routes>
    </div>
  );
}

export default App;
