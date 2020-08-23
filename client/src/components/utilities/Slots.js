import React, { useRef, useState } from "react";

export default () => {
    const [fruit, setFruit] = useState("");
    const [rolling, setRolling] = useState(false);
    const defaultProps = {
        fruits: [
            "jango boy",
            "bingo dingo",
            "Shawn Jones",
            "Water boy",
            "Terrance Brown",
            "Shawty Jean",
            "Wote Stan",
            "bango zinga",
            "jango jingo",
            "Walker January",
            "Beto ORoark",
            "Walter Janice",
            "Wicked Sister",
            "Black Sabbath",
            "Jupiter Planit",
            "bango wango",
            "jango tango",
            "Cherry Jince",
            "Ware Tiger",
            "Oranger Bango",
            "Strawn Neart",
            "Grant Enterprise",
            "Kiwi Palmer",
            "bango zangus",
        ],
    };
    const slotRef = useRef();

    // to trigger roolling and maintain state
    const roll = () => {
        setRolling(true);

        setTimeout(() => {
            setRolling(false);
        }, 700);

        // this will trigger rolling effect
        setFruit(triggerSlotRotation(slotRef.current));
    };

    // this will create a rolling effect and return random selected option
    const triggerSlotRotation = (ref) => {
        function setTop(top) {
            ref.style.top = `${top}px`;
        }
        let options = ref.children;
        let randomOption = Math.floor(
            Math.random() * defaultProps.fruits.length
        );
        let chosenOption = options[randomOption];
        setTop(-chosenOption.offsetTop + 2);
        return defaultProps.fruits[randomOption];
    };

    return (
        <div className="SlotMachine">
            <div className="slot">
                <section>
                    <div className="fruit-container" ref={slotRef}>
                        {defaultProps.fruits.map((fruit, i) => (
                            <div key={i}>
                                <span>{fruit}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <button
                className="roll"
                onClick={(() => setRolling(!rolling), roll)}
                disabled={rolling}
            >
                Pull
            </button>
        </div>
    );
};
