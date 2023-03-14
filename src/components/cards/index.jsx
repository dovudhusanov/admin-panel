import React from 'react';
import Card from "../card";
import {CardsStyle} from "./cards.styles";
import {ChangeTitle, ScrollTop} from "../../middleware";

function Cards({cards}) {

    ScrollTop()
    ChangeTitle("category")

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