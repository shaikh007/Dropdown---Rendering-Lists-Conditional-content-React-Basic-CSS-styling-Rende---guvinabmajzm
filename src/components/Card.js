import React from "react";

const Card = ({title, name, description }) => {
    return (
        <article style={{
            border:"1px solid #c1c1c1",
            padding: "0.5rem",
            margin: "0.5rem"
        }}>
            <h3 id={`${title}-title`}>{name}</h3>
            <p id={`${title}-description`}>{description}</p>
        </article>
    )
}

export default Card;