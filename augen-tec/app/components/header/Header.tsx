import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import logoImg from "@/images/Logo.png";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import styles from "./header.module.css";
import { AppContext } from "@/app/page-context";

export default function Header() {
  const { handleToggleDrawer } = useContext(AppContext);
  
  return (
    <Grid container className={styles.headerContainer}>
      <Grid item xs={6} className={styles.logoContainer}>
        <Image src={logoImg} alt="Augen-tec" className={styles.logo}></Image>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={2} className={styles.menuIcon}>
        <MenuTwoToneIcon onClick={() => handleToggleDrawer()}></MenuTwoToneIcon>
      </Grid>
    </Grid>
  );
}
