import { useState } from "react";

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div>
                <button onClick={() => toggleAccordion(0)}>
                    {activeIndex === 0 ? "Hide" : "Show"} Item 1
                </button>
                {activeIndex === 0 && <p>This is the content of Item 1</p>}
            </div>

            <div>
                <button onClick={() => toggleAccordion(1)}>
                    {activeIndex === 1 ? "Hide" : "Show"} Item 2
                </button>
                {activeIndex === 1 && <p>This is the content of Item 2</p>}
            </div>

            <div>
                <button onClick={() => toggleAccordion(2)}>
                    {activeIndex === 2 ? "Hide" : "Show"} Item 3
                </button>
                {activeIndex === 2 && <p>This is the content of Item 3</p>}
            </div>
        </div>
    );
}

export default Accordion;
