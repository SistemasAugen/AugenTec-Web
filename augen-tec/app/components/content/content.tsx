import { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./content.module.css";
import { Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export interface ContentProps {
  id?: string;
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
  id,
}: ContentProps) {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease",
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("aos-init", "aos-animate");
          }, 350);
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Clean up the observer
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <Grid container xs={12} md={6} id={id || title}>
      <Grid item xs={12} md={5} ref={imageRef} data-aos="fade-up">
        <Image
          src={imgData.src}
          alt={imgData.alt}
          className={styles.image}></Image>
      </Grid>
      <Grid
        xs={12}
        md={7}
        item
        className={styles.textContainer}
        ref={textRef}
        data-aos="fade-right">
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
