import * as React from "react";
import { Helmet } from "react-helmet";

export default function Head() {
    return (
        <Helmet htmlAttributes={{lang: "en"}}>
            <meta name="description" content="Pustalorc's site"/>
            <title>Pustalorc&apos;s site</title>
        </Helmet>
    );
}