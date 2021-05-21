import { topMenu } from "../styles/topMenuStyle";
import { backgroundBanner } from "../styles/backgroundBanner";
import CardList from "../components/cardList";
import hogwartsLogo from "../assets/hogwartsLogo.svg";
import StudentsBoard from "../components/studentsBoard";

const HomePage = () => {
  return (
    <>
      {/* <ProfileCard /> */}
      <div style={backgroundBanner}></div>
      <div style={topMenu}>
        <img
          src={hogwartsLogo}
          alt="Hogwarts Logo"
          style={{ height: "56px", margin: "15px" }}
        />
        Hogwarts Score Manager
      </div>
      <CardList />
      <StudentsBoard />
    </>
  );
};

export default HomePage;
