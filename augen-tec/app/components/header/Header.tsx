import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import logoImg from "@/images/Logo.png";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import styles from "./header.module.css";

export default function Header() {
  return (
    <Grid container className={styles.headerContainer}>
      <Grid item xs={6} className={styles.logoContainer}>
        <Image src={logoImg} alt="Augen-tec" className={styles.logo}></Image>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={2} className={styles.menuIcon}>
        <MenuTwoToneIcon></MenuTwoToneIcon>
      </Grid>
    </Grid>
  );
}
