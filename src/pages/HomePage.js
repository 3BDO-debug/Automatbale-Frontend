import React from "react";
// material
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import InfoCard from "src/components/__homePage/InfoCard";
import ReactApexChart from "react-apexcharts";

// ---------------------------------------------------------------------------------------------------

function HomePage() {
  const theme = useTheme();

  const chartOptions = {
    colors: [theme.palette.primary.main],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {/* Welcome */}
        <Grid item xs={12}>
          <Typography color="text.secondary" variant="subtitle1">
            Progress is impossible without change, and those who cannot change
            their minds cannot change anything.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <WbSunnyIcon
              sx={{ color: "#FCE570", width: "50px", height: "50px", mr: 2 }}
            />
            <Typography variant="h3">Good morning Rahma</Typography>
          </Box>
        </Grid>
        {/* Info cards */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <InfoCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <InfoCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <InfoCard />
            </Grid>
          </Grid>
        </Grid>
        {/* Graphs */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Earnings" />
            <CardContent>
              <ReactApexChart
                type="line"
                series={[
                  {
                    name: "Desktops",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                  },
                ]}
                options={chartOptions}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
