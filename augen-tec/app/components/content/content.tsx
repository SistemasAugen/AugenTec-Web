import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import styles from "./content.module.css";
import { Grid } from "@mui/material";
export interface ContentProps {
  id?: string,
  imgData: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  text: string;
  colorTitle?: { color: string; text: string };
}

export default function content({
  imgData,
  title,
  text,
  colorTitle,
  id
}: ContentProps) {
  return (
    <Grid container xs={12} md={6} id={id || title}>
      <Grid item xs={12} md={5}>
        <Image
          src={imgData.src}
          alt={imgData.alt}
          className={styles.image}>
        </Image>
      </Grid>
      <Grid xs={12} md={7} item className={styles.textContainer}>
        {colorTitle && (
          <span
            className={styles.colorTitle}
            style={{ color: colorTitle.color }}>
            {colorTitle.text}
          </span>
        )}
        <span className={styles.title}>{title}</span>
        <p className={styles.text}>{text}</p>
      </Grid>
    </Grid>
  );
}
