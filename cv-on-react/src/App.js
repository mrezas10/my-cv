import "./App.css";
import { Container, Box, Typography, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <Container
      maxWidth={"1920px"}
      sx={{
        margin: "0 !important",
        padding: "0 !important",
        display: "flex",
        flexDirextion: "row",
      }}
    >
      <Sidebar />
      <MainContent />
    </Container>
  );
}

export default App;
