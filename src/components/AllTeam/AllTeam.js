import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./AllTeam.css";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Team = (props) => {
  const { strTeamBadge, strTeam, strLeague, idTeam } = props.team;
  const history = useHistory();
  const handleClick = (clubId) => {
    const url = `/team/${clubId}`;
    history.push(url);
  };
  return (
    <div className="team col-sm-12 col-md-3 ">
      <Card className="mainCard container bg-light border-secondary">
        <Card.Img
          className="images img-thumbnail mt-3 p-4"
          variant="top"
          src={strTeamBadge}
        />
        <Card.Body className="cardTitle">
          <Card.Title>
            {" "}
            <h3>{strTeam}</h3>{" "}
          </Card.Title>
          <Card.Text>
            {" "}
            <h6>League: {strLeague}</h6>{" "}
          </Card.Text>
          <Button onClick={() => handleClick(idTeam)} variant="primary">
            Explore Here <FontAwesomeIcon icon={faArrowRight} />{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
