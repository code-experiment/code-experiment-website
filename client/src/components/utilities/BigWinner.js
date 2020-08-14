import React, { useRef, useState, useContext } from "react";
import ModalContext from "../../contexts/ModalContext";

export default () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);
    const [rolling, setRolling] = useState(false);

    const { setModalContentText, setModalIsOpen } = useContext(
        ModalContext
    );
    const slotRef = useRef();

    // to trigger roolling and maintain state
    const roll = () => {
        setRolling(true);

        setTimeout(() => {
            setRolling(false);
        }, 700);

        // this will trigger rolling effect
        triggerSlotRotation(slotRef.current);
    };

    // this will create a rolling effect and return random selected option
    const triggerSlotRotation = (ref) => {
        function setTop(top) {
            ref.style.top = `${top}px`;
        }
        let options = ref.children;

        let randomOption = Math.floor(Math.random() * names.length);
        let chosenOption = options[randomOption];
        setTop(-chosenOption.offsetTop + 15);
        return names[randomOption];
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
                </div>
            </form>

            <div className="SlotMachine">
                <div className="slot">
                    <section>
                        <div
                            className="fruit-container"
                            ref={slotRef}
                        >
                            {names.map((name, i) => (
                                <div key={i}>
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <button
                    className="roll"
                    onClick={(() => setRolling(!rolling), roll)}
                    disabled={rolling || names.length === 0}
                >
                    Pull
                </button>
            </div>
        </div>
    );
};
