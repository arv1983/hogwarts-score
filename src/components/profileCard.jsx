import { Card, Button } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  removeScoreThunk,
  addScoreThunk,
} from "../store/modules/housesScore/thunk";
import { useDispatch } from "react-redux";
import {
  profileCardStyle,
  profileWrapStyle,
  doneButtonStyle,
  avatarStyle,
  outerProfileBlock,
  topProfileBlock,
  botProfileBlock,
  formStyle,
  gainButtonStyle,
  loseButtonStyle,
  formWrap,
} from "../styles/profileCardStyle";
import { useState } from "react";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  score: yup.number().positive().integer(),
});

const ProfileCard = ({ setShowProfile, profileInfo }) => {
  const allHouses = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const { register, handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [shouldRemove, setShouldRemove] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [scoreValue, setScoreValue] = useState("0");
  const doneClickHandler = () => {
    setShowProfile(false);
  };

  const handleData = (data) => {
    if (shouldRemove) {
      setScoreValue(`-${data.score}`);
      dispatch(removeScoreThunk(allHouses, profileInfo.house, data.score));
    } else {
      setScoreValue(`+${data.score}`);
      dispatch(addScoreThunk(allHouses, profileInfo.house, data.score));
    }
    reset();
    setIsDone(true);
  };

  return (
    <div style={profileWrapStyle}>
      <Card style={profileCardStyle}>
        <img
          style={avatarStyle}
          alt={profileInfo.name}
          src={profileInfo.image}
        />
        <div style={outerProfileBlock}>
          <div style={topProfileBlock}>
            <img
              style={{ width: "50px", marginRight: "10px" }}
              alt={`${profileInfo.house} Logo`}
              src={profileInfo.houseLogo}
            />
            <p>{profileInfo.house}</p>
          </div>
          <div style={botProfileBlock}>
            <h3>{profileInfo.name}</h3>
            <div style={formStyle}>
              {isDone ? (
                <>
                  <h2
                    style={
                      shouldRemove
                        ? { margin: "5px", color: "#F8A388" }
                        : { margin: "5px", color: "#65E1CB" }
                    }
                  >
                    {scoreValue}
                  </h2>
                  <Button
                    variant="contained"
                    style={doneButtonStyle}
                    onClick={doneClickHandler}
                  >
                    Done
                  </Button>
                </>
              ) : (
                <>
                  <form style={formWrap} onSubmit={handleSubmit(handleData)}>
                    <input
                      ref={register}
                      type="number"
                      min="1"
                      max="999"
                      style={{
                        width: "125px",
                        borderRadius: "0",
                        border: "1px solid #3461A4",
                      }}
                      label="Score"
                      required={true}
                      name="score"
                      control={control}
                    />
                    <div>
                      <Button
                        onClick={() => {
                          setShouldRemove(false);
                        }}
                        style={gainButtonStyle}
                        variant="contained"
                        disableElevation
                        type="submit"
                      >
                        Gain
                      </Button>
                      <Button
                        onClick={() => {
                          setShouldRemove(true);
                        }}
                        style={loseButtonStyle}
                        variant="contained"
                        disableElevation
                        type="submit"
                      >
                        Lose
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
