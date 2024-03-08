import { Link } from "react-router-dom";
import projects from "./projects.json";
import "./App.css";

function App() {
  console.log(projects);
  return (
    <>
      <h1>NazgulMX</h1>
      <hr />
      <h2>Projects!</h2>
      {projects.map((p) => (
        <div>
          <Link to={p.slug}>{p.name}</Link>
        </div>
      ))}
    </>
  );
}

export default App;
