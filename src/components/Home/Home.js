import React, { useEffect, useState } from "react";
import "./Home.css";
import Team from "../AllTeam/AllTeam";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div>
      <div className="header">
        <h1>Soccer Club Tracker</h1>
      </div>
      {teams.map((team) => (
        <Team team={team}></Team>
      ))}
    </div>
  );
};

export default Home;
