import React, {useState} from 'react';
import {CardStyle, Img, CardItem, CardInfo, Counter} from "./card.styles";
import {Typography} from "../typography";

function Card({img, name, descr}) {

    const [count, setCount] = useState(0)

    function decrement() {
        if(count === 0) return
        else setCount(prevState => prevState - 1)
    }

    return (
        <CardStyle>
            <CardItem>
                <Img src={img} alt="img"/>
                <CardInfo>
                    <Typography size={"h3"} tag={"h3"} color={"black"}>{name}</Typography>
                    <Typography size={"medium"} tag={"span"} color={"black"}>{descr}</Typography>
                    <Counter>
                        <button onClick={decrement}>-</button>
                        <span>{count}</span>
                        <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
                    </Counter>
                </CardInfo>
            </CardItem>
        </CardStyle>
    );
}

export default Card;