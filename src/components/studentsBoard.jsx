import { Paper } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import scorePaper from "../assets/scorePaper.svg";
import slytherinLogo from "../assets/slytherinLogo.svg";
import ravenclawLogo from "../assets/ravenclawLogo.svg";
import gryffindorLogo from "../assets/gryffindorLogo.svg";
import hufflepuffLogo from "../assets/hufflepuffLogo.svg";
import ProfileCard from "../components/profileCard";
import {
  root,
  alunosTitle,
  studentsBoardStyle,
  houseTitle,
  nameTitle,
} from "../styles/studentsBoardStyle";

const StudentsBoard = () => {
  const [students, setStudents] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  const logos = {
    Slytherin: slytherinLogo,
    Ravenclaw: ravenclawLogo,
    Gryffindor: gryffindorLogo,
    Hufflepuff: hufflepuffLogo,
  };

  const handleClick = () => {
    setShowProfile(true);
  };

  useEffect(() => {
    axios
      .get("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => {
        setStudents(
          response.data.map((student) => {
            return (
              <div key={student.name} style={studentsBoardStyle}>
                <p style={nameTitle}>{student.name}</p>
                <p style={houseTitle}>{student.house}</p>
                <img
                  alt="Profile Button"
                  src={scorePaper}
                  onClick={() => {
                    setProfileInfo({
                      image: student.image,
                      houseLogo: logos[student.house],
                      house: student.house,
                      name: student.name,
                    });
                    handleClick();
                  }}
                />
              </div>
            );
          })
        );
      });
  });

  return (
    <>
      {showProfile && (
        <ProfileCard
          setShowProfile={setShowProfile}
          profileInfo={profileInfo}
        />
      )}
      <Paper style={root}>
        <h1 style={alunosTitle}>Alunos</h1>
        <div style={studentsBoardStyle}>
          <h2>Nome</h2>
          <h2>Casa</h2>
          <div />
        </div>
        {students}
      </Paper>
    </>
  );
};

export default StudentsBoard;
