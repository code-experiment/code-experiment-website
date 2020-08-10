import React, { useRef, useState } from "react";

export default () => {
    const [fruit1, setFruit1] = useState("");
    const [rolling, setRolling] = useState(false);
    const defaultProps = {
        fruits: ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"],
    };
    const slotRef = useRef();

    // to trigger roolling and maintain state
    const roll = () => {
        setRolling(true);

        setTimeout(() => {
            setRolling(false);
        }, 700);

        // this will trigger rolling effect
        const selected = triggerSlotRotation(slotRef.current);
        setFruit1(selected);
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
        let choosenOption = options[randomOption];
        setTop(-choosenOption.offsetTop + 2);
        return defaultProps.fruits[randomOption];
    };

    return (
        <div className="SlotMachine">
            <div className="slot">
                <section>
                    <div className="container" ref={slotRef}>
                        {defaultProps.fruits.map((fruit, i) => (
                            <div key={i}>
                                <span>{fruit}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div
                className={!rolling ? "roll rolling" : "roll"}
                onClick={() => setRolling(!rolling), roll}
                disabled={rolling}
            >
                {rolling ? "Rolling..." : "ROLL"}
            </div>
        </div>
    );
};
