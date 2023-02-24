import React from "react";
// material
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// -----------------------------------------------------------

function SignIn() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "500px",
          marginTop: "20vh",
          borderRadius: "8px",
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 6,
          paddingRight: 6,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h3">Welcome back</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">Poweredf by JWT</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField label="Username" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" type="password" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ width: "100%", mt: 2 }}
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default SignIn;
