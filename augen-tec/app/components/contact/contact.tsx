import { Grid } from '@mui/material'
import React from 'react'
import styles from './contact.module.css';

export interface ContactProps {
    title: string,
    text: string,
    socials: {
        icon: any,
        url: string,
        text: string,
    }[]
}

export default function contact({ title, text, socials }: ContactProps) {

  const handleSocialNetworkLink = (url: string) => {
    window.open(url,"_blank");
  }

  return (
    <Grid container className={styles.container}>
        <Grid item className={styles.titleContainer}>
            <span> { title } </span>
        </Grid>
        <Grid item className={styles.textContainer}>
            <span>{ text }</span>
        </Grid>
        {socials.map(item => (
            <Grid item xs={12} className={styles.socialsIcons} onClick={() => handleSocialNetworkLink(item.url)}>
                <item.icon className={styles.icon}></item.icon><span> { item.text }</span>
            </Grid>
        ))}
    </Grid>
  )
}
