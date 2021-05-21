import { Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { houseCardStyle } from "../styles/houseCardStyle";
import slytherinLogo from "../assets/slytherinLogo.svg";
import ravenclawLogo from "../assets/ravenclawLogo.svg";
import gryffindorLogo from "../assets/gryffindorLogo.svg";
import hufflepuffLogo from "../assets/hufflepuffLogo.svg";
import { useSelector } from "react-redux";

const useStyles = makeStyles(houseCardStyle);

const HouseCard = () => {
  const { root, houseLogo } = useStyles();
  const allHouses = useSelector((state) => state.list);

  let position = 0;
  const logos = {
    Slytherin: slytherinLogo,
    Ravenclaw: ravenclawLogo,
    Gryffindor: gryffindorLogo,
    Hufflepuff: hufflepuffLogo,
  };

  const sortedByScore = [
    allHouses.Slytherin,
    allHouses.Ravenclaw,
    allHouses.Gryffindor,
    allHouses.Hufflepuff,
  ]
    .sort((a, b) => b.score - a.score)
    .map((item) => {
      item.logo = logos[item.name];
      position++;
      return (
        <Grid item key={position}>
          <Card className={root}>
            <h1>
              #{position} {item.name}
            </h1>
            <img
              className={houseLogo}
              alt={`${item.name} Logo`}
              src={item.logo}
            />
            <h1>{item.score}</h1>
          </Card>
        </Grid>
      );
    });
  position = 0;

  return sortedByScore;
};

export default HouseCard;
