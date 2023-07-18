import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";

function Player({name, handleDelete}) {
    const [score, setScore] = useState(0);

    return (
        <div className="container-fluid border border-dark p-3 m-3">
            <div className="row justify-content-center">
                {/* Render Name here */}
                <h2 className="text-center">{name}</h2>
            </div>

            <div className="row justify-content-center">
                <p className="text-center fs-3">{score}</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Add increment event handler COMPLETE*/}
                    <button onClick={() => setScore(score + 1)} className="btn btn-outline-primary w-100">Add Point +
                    </button>
                </div>
                <div className="col-md-6">
                    {/* Add decrement event handler COMPLETE */}
                    <button onClick={() => setScore(score - 1)} className="btn btn-outline-danger w-100">
                        Remove Point -
                    </button>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6  gy-4">
                        {/* Player DELETE button*/}
                        <button onClick={handleDelete} className="btn btn-danger  btn-sm btn-block">Delete This Player
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Player.defaultProps = {
    name: "Untitled Player",
    handleDelete: {}
};

Player.propTypes = {
    name: PropTypes.string.isRequired,
    handleDelete: PropTypes.object.isRequired

};
export default Player;
