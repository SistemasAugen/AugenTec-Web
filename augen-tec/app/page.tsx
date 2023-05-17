"use client";
import { esData } from "./public/texts/es";
import Header from "./components/header/Header";
import Content from "./components/content/content";
import Equipment from "./components/equipment/equipment";
import Contact from "./components/contact/contact";
import localFont from 'next/font/local';
import styles from './page.module.css';
const Raleway = localFont({ src: '../app/public/fonts/Raleway-VariableFont_wght.ttf'});
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Grid } from "@mui/material";


export default function Home() {
  const handleDownloadBrochureClick = () => {
    window.open('/api/download-file', '_blank');
  }

  return (
    <main className={Raleway.className}>
      <Header></Header>
      {esData.main.map((item) => {
        return (
          <Content
            key={item.imageData.alt}
            imgData={item.imageData}
            colorTitle={item.colorTitle}
            title={item.title}
            text={item.text}></Content>
        );
      })}
      {esData.equipos.map((item) => {
        return (
          <Equipment
            key={item.imageData.alt}
            imgData={item.imageData}
            colorBorder={item.colorBorder}
            title={item.title}
            text={item.text}></Equipment>
        );
      })}
      <Grid container justifyContent={"center"}>
        <span onClick={handleDownloadBrochureClick} className={styles.downloadButton}>
          <DownloadForOfflineIcon sx={{ color: "#007960", fontSize: "50px", marginRight: "20px" }} /> Descargar Brochure
        </span>
      </Grid>
      <Contact {...esData.contact}></Contact>
    </main>
  );
}
