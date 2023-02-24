import React from "react";
// material
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// ------------------------------------------------------------------------------------

function AddClientPopUp({ isTriggered, closeHandler }) {
  return (
    <Dialog open={isTriggered} onClose={closeHandler} fullWidth>
      <DialogTitle>Add new client</DialogTitle>
      <DialogContent>
        <Box sx={{ paddingTop: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Client Name" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="" fullWidth />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} variant="outlined" color="error">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={closeHandler}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddClientPopUp;
