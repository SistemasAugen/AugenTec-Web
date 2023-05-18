"use client";
import { esData } from "./public/texts/es";
import Header from "./components/header/Header";
import Content from "./components/content/content";
import Equipment from "./components/equipment/equipment";
import Contact from "./components/contact/contact";
import Menu from './components/asideMenu/menu';
import YouTube from 'react-youtube';
import localFont from 'next/font/local';
import styles from './page.module.css';
const Raleway = localFont({ src: '../app/public/fonts/Raleway-VariableFont_wght.ttf' });
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { AppContextProvider } from "./page-context";

const videoId = 'pS-J14hPrlI';
const opts = {
  width: '100%',
  height: '400px',
  playerVars: {
    autoplay: 1,
  },
};

// Esto debe coincidir con el id establecido en /public/texts/es.ts
export const MenuOptions = ['AugenTec', 'Sistema', 'Maquinaria', 'Contacto'];

export default function Home() {

  const handleDownloadBrochureClick = () => {
    window.open('/api/download-file', '_blank');
  }

  return (
    <AppContextProvider>
      <div className={styles.stickyMenu}>
        <Header></Header>
      </div>
      <main className={Raleway.className}>
        <Menu MenuOptions={MenuOptions} />
        {esData.main.map((item) => {
          return (
            <Content
              id={item.id}
              key={item.imageData.alt}
              imgData={item.imageData}
              colorTitle={item.colorTitle}
              title={item.title}
              text={item.text}></Content>
          );
        })}
        <YouTube className={styles.videoPlayer} videoId={videoId} opts={opts} />
        {esData.equipos.map((item) => {
          return (
            <Equipment
              id={item.id}
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
    </AppContextProvider>
  );
}
