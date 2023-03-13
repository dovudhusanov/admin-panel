import React from 'react';
import Card from "../card";
import {CardsStyle} from "./cards.styles";

function Cards({cards}) {
    return (
        <CardsStyle>
            {cards?.map((card) => (
                <Card
                    key={card.id}
                    img={card.image}
                    name={card.name}
                    descr={card.descr}
                />
            ))}
        </CardsStyle>
    );
}

export default Cards;