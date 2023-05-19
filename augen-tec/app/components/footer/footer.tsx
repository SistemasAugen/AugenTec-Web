import { Grid } from '@mui/material'
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import React from 'react'
import logoImg from "@/images/Logo.png";
import footerImage from "@/images/Boton_Foter.png";
import styles from "./footer.module.css";
import Image from "next/image";
import { MenuOption } from '../menu/menu';

export default function footer({ MenuOptions }: { MenuOptions: MenuOption[] }) {
    return (
        <Grid container className={styles.footerContainer}>
            <Grid item xs={7} className={styles.footerImageContainer}>
                <div className={styles.imagesContainer}>
                    <Image src={logoImg} alt="Augen-tec" className={styles.logo}></Image>
                    <Image src={footerImage} alt="Augen-tec" className={styles.footerLogo}></Image>
                </div>
            </Grid>
            <Grid item xs={5} className={styles.footerMenuContainer}>
                <List>
                    {MenuOptions.map(option => (
                        <a href={`#${option.key}`} key={option.key}>
                            <ListItem button>
                                <span className={styles.menuItem}>
                                    {option.value}
                                </span>
                            </ListItem>
                        </a>
                    ))}
                </List>
            </Grid>
            <Grid item xs={12} className={styles.footerTextContainer}>
                <div className={styles.textContainer}>
                    © 2023 AUGEN TEC
                </div>
            </Grid>
        </Grid>
    )
}
