import { Grid } from '@mui/material'
import React from 'react'
import styles from "./equipment.module.css";
import Image, { StaticImageData } from "next/image";

export const BorderPosition = {
    left: 'left',
    right: 'right'
}

export interface EquipmentModel {
    imgData: {
        src: StaticImageData,
        alt: string,
        height?: string,
        width?: string
    }
    colorBorder:  {
        position: string,
        color: string,
    },
    title: string,
    text: string,
}

export default function equipment({ imgData, colorBorder, title, text }: EquipmentModel) {
  return (
    <Grid container className={styles.container}>
        { colorBorder.position == BorderPosition.left && <Grid item xs={1} style={{ backgroundColor: colorBorder.color }}></Grid>}
        <Grid item xs={11} className={colorBorder.position == BorderPosition.left? styles.containerRight : styles.containerLeft }>
            <Image
                src={imgData.src}
                alt={imgData.alt}
                className={styles.image}
                style={{ height: imgData.height || 'auto', width: imgData.width || 'auto'}}>
            </Image>
            <span className={styles.title}>{title}</span>
            <p className={styles.text}>{text}</p>
        </Grid>
        { colorBorder.position == BorderPosition.right && <Grid item xs={1} style={{ backgroundColor: colorBorder.color }}></Grid>}
    </Grid>
  )
}
