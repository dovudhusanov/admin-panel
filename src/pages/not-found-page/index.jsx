import React, {useEffect} from 'react';
import {Typography} from "../../components/typography";
import {NotFoundPageStyle} from "./not-found-page.styles";
import {useNavigate} from "react-router-dom";

function NotFoundPage() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/404")
    }, [window.location.pathname])

    return (
        <NotFoundPageStyle>
            <Typography size={"h1"} tag={"h1"} color={"brightViolet"}>404</Typography>
            <Typography size={"medium"} tag={"span"} color={"black"}>Page not found</Typography>
        </NotFoundPageStyle>
    );
}

export default NotFoundPage;