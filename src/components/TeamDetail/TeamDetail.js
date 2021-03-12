import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import female from "../../images/female.png";
import male from "../../images/male.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youTube.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaseballBall,
  faFutbol,
  faGlobeEurope,
  faLocationArrow,
  faTransgender,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetail = () => {
  const { teamId } = useParams();
  const [club, setClub] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClub(data.teams[0]));
  }, [teamId]);

  const gender = club.strGender;
  let playerImage;
  if (gender === "Male") {
    playerImage = <img className="playerImg w-100" src={male} alt="" />;
  } else {
    playerImage = <img className="playerImg w-100" src={female} alt="" />;
  }

  return (
    <div>
      <div className="backgroundImg">
        <img className="bannerImg" src={club.strTeamBadge} alt="" />
      </div>
      <div className="detail">
        <div className="row m-1">
          <div className="basicInfo col-md-6">
            <h1>{club.strTeam}</h1>
            <h5>
              {" "}
              <FontAwesomeIcon icon={faBaseballBall} /> League: {club.strLeague}
            </h5>
            <h5>
              <FontAwesomeIcon icon={faGlobeEurope} /> Country:{" "}
              {club.strCountry}
            </h5>
            <h5>
              <FontAwesomeIcon icon={faFutbol} /> Sports Type: {club.strSport}
            </h5>
            <h5>
              <FontAwesomeIcon icon={faTransgender} /> Gender: {club.strGender}
            </h5>
            <h5>
              <FontAwesomeIcon icon={faLocationArrow} /> Location:{" "}
              {club.strStadiumLocation}
            </h5>
          </div>
          <div className="playerImg col-md-6 ">{playerImage}</div>
        </div>
        <div className="description">
          <p>{club.strDescriptionEN}</p>
        </div>
        <div className="footer d-flex justify-content-center">
          <a href={"https://" + club.strFacebook} target="blank">
            <img className="socialImg" src={facebook} alt="" />
          </a>
          <a href={"https://" + club.strTwitter} target="blank">
            <img className="socialImg" src={twitter} alt="" />
          </a>
          <a href={"https://" + club.strYoutube} target="blank">
            <img className="socialImg" src={youtube} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
