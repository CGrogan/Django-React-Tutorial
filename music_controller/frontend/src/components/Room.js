import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Room(props) {
  var defaultVotes = 2;
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [isHost, setIsHost] = useState(false);
  const params = useParams();
  const roomCode = params.roomCode;

  getRoomDetails();

  function getRoomDetails() {
    fetch("/api/get-room" + "?code=" + roomCode)
      .then((response) => response.json())
      .then((data) => {
        setVotesToSkip(data.votes_to_skip);
        setGuestCanPause(data.guest_can_pause);
        setIsHost(data.is_host);
      });
  }

  return (
    <div>
      <h3>{roomCode}</h3>
      <p>Votes: {votesToSkip}</p>
      <p>Guest Can Pause: {guestCanPause.toString()}</p>
      <p>Is Host: {isHost.toString()}</p>
    </div>
  );
}
export default Room;
