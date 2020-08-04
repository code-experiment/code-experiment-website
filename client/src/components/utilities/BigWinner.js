import React, { useState, useContext } from "react";
import ModalContext from "../../contexts/ModalContext";

export default () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);
    const [results, setResults] = useState([]);
    const { setModalContentText, setModalIsOpen } = useContext(
        ModalContext
    );

    const handleAddClick = (e) => {
        e.preventDefault();

        if (name !== "") {
            const splitNames = name.split(",");
            const state = [...names];

            splitNames.map((name) => state.push(name.trim()));

            setNames(state);
            setName("");
        } else {
            setModalContentText("You need to have a name to add.");
            setModalIsOpen(true);
        }
    };

    const handleRandomizeClick = () => {
        if (names.length > 1) {
            console.log(Math.floor(Math.random() * names.length))
            let winner = names[Math.floor(Math.random() * names.length)];
            setResults(winner)
            
        } else {
            setModalContentText(
                "It's not much of a contest if you don't even have 2 names!"
            );
            setModalIsOpen(true);
        }
    };

    return (
        <div className="randomizer-container">
            <div>
                <h1 className="randomizer-names-heading">Names</h1>

                <div className="randomizer-names-container">
                    {names.map((name, idx) => {
                        return (
                            <div
                                className="randomizer-names-wrapper"
                                key={idx}
                            >
                                <div className="randomizer-names-name">
                                    {name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <form
                className="randomizer-form-container"
                onSubmit={handleAddClick}
            >
                <div className="randomizer-input-wrapper">
                    <input
                        placeholder="Add name/names"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="randomizer-input"
                    />
                </div>

                <div className="randomizer-btns-container">
                    <div className="randomizer-btn-wrapper">
                        <button
                            className="randomizer-btn"
                            type="submit"
                        >
                            Add
                        </button>
                    </div>

                    <div className="randomizer-btn-wrapper">
                        <button
                            type="button"
                            className="randomizer-btn"
                            onClick={handleRandomizeClick}
                        >
                            Get Winner
                        </button>
                    </div>
                </div>
            </form>

            <div className="randomizer-results-container">
                <div>
                    <h1 className="randomizer-results-heading">
                        Results
                    </h1>

                    <div className="randomizer-results-wrapper">
                        {results}
                    </div>
                </div>
            </div>
        </div>
    );
};
