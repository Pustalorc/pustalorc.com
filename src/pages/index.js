import * as React from "react";
import PageFormat from "../components/format";
import { Grid, Button, Typography } from "@mui/material";
import { CleanLink } from "../utils";

export default function IndexPage() {
    return (
        <PageFormat>
            <Typography align="center" variant="h3">
                Welcome to my site landing!
            </Typography>
            <br />
            <Typography align="center" variant="h4">
                There isn&apos;t much to do here, but here are some links that will take you to things hosted in this domain:
            </Typography>
            <br />
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Grid item>
                    <CleanLink to="https://dev.pustalorc.com">
                        <Button fullWidth={true} sx={{ color: "white" }}>
                            <Typography align="center" variant="h5">
                                Portfolio
                            </Typography>
                        </Button>
                    </CleanLink>
                </Grid>
                <Grid item>
                    <CleanLink to="https://track.pustalorc.com">
                        <Button fullWidth={true} sx={{ color: "white" }}>
                            <Typography align="center" variant="h5">
                                YouTrack Instance
                            </Typography>
                        </Button>
                    </CleanLink>
                </Grid>
            </Grid>
        </PageFormat>
    );
}