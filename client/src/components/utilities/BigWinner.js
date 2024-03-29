// refactor the dice simulator?

import React, { useState, useContext } from "react";
import ModalContext from "../../contexts/ModalContext";

const BigWinner = () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);
    const [rolling, setRolling] = useState(false);
    const [winner, setWinner] = useState("");

    const { setModalContentText, setModalIsOpen } = useContext(ModalContext);

    // to trigger roolling and maintain state
    const rollClick = () => {
        setRolling(true);

        setTimeout(() => {
            setRolling(false);
        }, 700);

        let counter = 0;
        let rollInterval = setInterval(function () {
            if (counter < names.length) {
                setWinner(names[counter]);
                counter++;
            } else {
                clearInterval(rollInterval);
                counter = 0;
            }
            chooseWinner();
        }, 100);
    };

    const chooseWinner = () => {
        const randomNumber = Math.floor(Math.random() * names.length);
        setWinner(names[randomNumber]);
    };

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

    return (
        <div className="randomizer-container">
            <div>
                <h1 className="randomizer-names-heading">Names</h1>

                <div className="randomizer-names-container">
                    {names.map((name, idx) => {
                        return (
                            <div className="randomizer-names-wrapper" key={idx}>
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
                        <button className="randomizer-btn" type="submit">
                            Add
                        </button>
                    </div>
                </div>
            </form>

            <div className="SlotMachine">
                <div className="slot">
                    <section>
                        <div className="fruit-container">{winner}</div>
                    </section>
                </div>

                <button
                    className="roll"
                    onClick={(() => setRolling(!rolling), rollClick)}
                    disabled={rolling || names.length === 0}
                >
                    Pull
                </button>
            </div>
        </div>
    );
};

export default BigWinner;
