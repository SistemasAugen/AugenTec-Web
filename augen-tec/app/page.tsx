"use client";
import { esData } from "./public/texts/es";
import Header from "./components/header/Header";
import Content from "./components/content/content";
import Equipment from "./components/equipment/equipment";
import Contact from "./components/contact/contact";
import Menu from './components/menu/menu';
import YouTube from 'react-youtube';
import localFont from 'next/font/local';
import styles from './page.module.css';
const Raleway = localFont({ src: '../app/public/fonts/Raleway-VariableFont_wght.ttf' });
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Grid } from "@mui/material";
import { AppContextProvider } from "./page-context";
import Footer from "./components/footer/footer";

const videoId = 'pS-J14hPrlI';
const opts = {
  width: '100%',
  height: '500px',
  playerVars: {
    autoplay: false,
  },
};

// Esto debe coincidir con el id establecido en /public/texts/es.ts
export const MenuOptions = [
  {value:'AUGEN TEC', key: 'AugenTec'},
  {value:'SISTEMA LAB ONE', key: 'Sistema'},
  {value:'MAQUINARIA', key: 'Maquinaria'},
  {value:'CONTÁCTANOS', key: 'Contacto'}
];

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
        <Grid container className={styles.equipmentContainer}>
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
        </Grid>
        <YouTube className={styles.videoPlayer} videoId={videoId} opts={opts} />
        <Grid container className={styles.equipmentContainer}>
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
        </Grid>
        <Grid container justifyContent={"center"}>
          <span onClick={handleDownloadBrochureClick} className={styles.downloadButton}>
            <DownloadForOfflineIcon sx={{ color: "#007960", fontSize: "50px", marginRight: "20px" }} /> Descargar Brochure
          </span>
        </Grid>
        <Contact {...esData.contact}></Contact>
        <Footer MenuOptions={MenuOptions}></Footer>
      </main>
    </AppContextProvider>
  );
}
