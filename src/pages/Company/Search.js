import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/HeaderCompany";
import Card from "../../components/Card";
import DistanceSlider from "../../components/DistanceSlider";
import RateSlider from "../../components/RateSlider";
import VolumeSlider from "../../components/VolumeSlider";
import VehicleSelector from "../../components/VehicleSelector";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F5F7FB",
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: "100vh",
  },
  content: {
    padding: 30,
    paddingBottom: 100,
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [KM, setKM] = useState(60);
  const [rate, setRate] = useState(18);
  const [volume, setVolume] = useState(2);
  const [vehicles, setVehicles] = useState(new Set());

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Card>
          <DistanceSlider
            value={KM}
            onChange={(e, value) => value >= 2 && setKM(value)}
          />
        </Card>
        <Card>
          <RateSlider
            minimum="10"
            average="21"
            maximum="51"
            value={rate}
            checkbox={false}
            onChange={(e, value) => setRate(value)}
          />
        </Card>
        <Card>
          <VolumeSlider
            value={volume}
            onChange={(e, value) => setVolume(value)}
          />
        </Card>
        <Card>
          <VehicleSelector
            checkbox={false}
            values={vehicles}
            onChange={(value) => {
              let newVehicles = new Set(vehicles);
              let isPresent = newVehicles.has(value);
              if (isPresent) {
                newVehicles.delete(value);
              } else {
                newVehicles.add(value);
              }
              setVehicles(newVehicles);
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default Search;
