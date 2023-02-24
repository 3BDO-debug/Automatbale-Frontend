// components
import Iconify from "../../../components/Iconify";
import HomeIcon from "@mui/icons-material/Home";

// ----------------------------------------------------------------------

const navConfig = [
  {
    subheader: "General",
    items: [{ title: "Home", path: "/dashboard/home", icon: <HomeIcon /> }],
  },
  {
    subheader: "CRM",
    items: [
      {
        title: "Clients data",
        path: "/dashboard/clients-data",
        icon: <Iconify icon="fluent:people-team-28-regular" />,
      },
      { title: "Clients projects", path: "/client-projects" },
    ],
  },
  {
    subheader: "ERP",
    items: [],
  },
];

export default navConfig;
