import { useRef, useState } from "react";
//Bootstrap has already been downloaded for you
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
function ScoreBoard() {
    const [players, setPlayers] = useState([]);
    const inputRef = useRef();

    function addPlayer() {
        let currentInputText = inputRef.current.value || undefined;
        setPlayers([...players, { name: currentInputText, id: Date.now() }]);
    }

    function handleDelete(id) {
        setPlayers(
            players.filter((item) => {
                return item.id !== id;
            })
        );
    }

  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div className="input-group mb-3">
            {/* Modify input so that it is either connected to a ref or some kind of input state COMPLETE*/}
            <input
              type="text"
              ref={inputRef}
              className="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              required
            />
            {/* add Add Player event handling to this button COMPLETE */}
            <button
              onClick={addPlayer}
              className="btn btn-outline-primary"
              type="button"
              id="addPlayer"
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div className="col-md-4">
              {/* Make sure to pass the unique id as a key COMPLETE */}
              <Player
                key={player.id}
                name={player.name}
                handleDelete={() => handleDelete(player.id)}
                // Anonymous arrow function that we can hold off activating
                // until the user clicks a button inside of the Player component COMPLETE
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;
