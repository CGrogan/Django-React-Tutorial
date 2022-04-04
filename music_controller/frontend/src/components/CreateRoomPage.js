import React, { useState } from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CreateRoomPage() {
  var defaultVotes = 2;
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotesToSkip] = useState(defaultVotes);

  function handleGuestCanPauseChange(e) {
    if (e.target.value === "true") {
      setGuestCanPause(true);
    } else {
      setGuestCanPause(false);
    }
  }

  function handleVotesToSkipChange(e) {
    setVotesToSkip(e.target.value);
  }

  function handleRoomButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
      }),
    };
    fetch("api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            <div align="center">Guest Control of Playback state</div>
          </FormHelperText>
          <RadioGroup
            row
            defaultValue="true"
            onChange={handleGuestCanPauseChange}
          >
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="false"
              control={<Radio color="secondary" />}
              label="No Control"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          required={true}
          type="number"
          defaultValue={defaultVotes}
          inputProps={{ min: 1, style: { textAlign: "center" } }}
          onChange={handleVotesToSkipChange}
        />
        <FormHelperText>
          <div align="center">Votes Required to Skip Song</div>
        </FormHelperText>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={handleRoomButtonPressed}
        >
          Create a Room
        </Button>
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Go Back
        </Button>
      </Grid>
    </Grid>
  );
}
export default CreateRoomPage;
