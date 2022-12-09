import * as React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
