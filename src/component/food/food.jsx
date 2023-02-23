import React from "react";
import Card from "../card/card";
import "./food.css"

const Foods = () => {
    return (
        <>
            <section className="foods-container">
                <h3>Food Pictures</h3>

                <section className="foods-images">
                    <Card value={"food"} />
                </section>
            </section>

        </>
    )
}

export default Foods;