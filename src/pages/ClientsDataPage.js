import React, { useState } from "react";
// material
import { Box, Button, Container, Grid } from "@mui/material";
import MUIDataTable from "mui-datatables";
import AddIcon from "@mui/icons-material/Add";
// components
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import AddClientPopUp from "src/components/__clientsDataPage/AddClientPopUp";

// ---------------------------------------------------------------------------------

function ClientsDataPage() {
  const [addClient, triggerAddClient] = useState(false);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeaderBreadcrumbs
            heading="Clients Data"
            links={[
              { name: "Home", href: "/dashboard/home" },
              { name: "Clients Data" },
            ]}
            action={
              <Button
                onClick={() => triggerAddClient(true)}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Add Client
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <MUIDataTable
            title="clients data"
            columns={[
              { name: "fullname", label: "full name" },
              { name: "phonenumber", label: "phone number" },
              { name: "govId", label: "gov id" },
              { name: "joinedAt", label: "gjoined At" },
              {
                name: "action",
                lable: "action",
                options: {
                  customBodyRender: (value) => (
                    <Box sx={{ display: "Flex" }}>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </Box>
                  ),
                },
              },
            ]}
            data={[
              {
                fullname: " rahma ",
                phonenumber: "01015755002",
                govId: "290988748840673",
                joinedAt: " 15/2/2023",
                action: 2,
              },
            ]}
          />
          {/*  <MUIDataTable
            title="Clients Data"
            columns={[
              { name: "fullname", label: "Full name" },
              { name: "phoneNumber", label: "Phone number" },
            ]}
            data={[
              { fullname: "Rahma esmail", phoneNumber: "01017003476" },
              { fullname: "Rahma esmail", phoneNumber: "01017003476" },
            ]}
          /> */}
        </Grid>
      </Grid>
      {/* Add client pop up */}
      <AddClientPopUp
        isTriggered={addClient}
        closeHandler={() => triggerAddClient(false)}
      />
    </Container>
  );
}

export default ClientsDataPage;
