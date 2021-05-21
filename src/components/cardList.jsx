import HouseCard from "../components/houseCard";
import { Grid } from "@material-ui/core";

const CardList = () => {
  return (
    <Grid container spacing={0} justify="center">
      <HouseCard />
    </Grid>
  );
};

export default CardList;
