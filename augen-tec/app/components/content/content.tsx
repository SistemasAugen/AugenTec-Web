import { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./content.module.css";
import { Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { detectContentType } from "next/dist/server/image-optimizer";

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

const Content = ({ imgData, title, text, colorTitle, id }: ContentProps) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const currentImageRef = imageRef.current;
    const currentTextRef = textRef.current;

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

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    if (currentTextRef) {
      observer.observe(currentTextRef);
    }

    // Clean up the observer
    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
      if (currentTextRef) {
        observer.unobserve(currentTextRef);
      }
    };
  }, []);

  return (
    <Grid container id={id || title}>
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
};

export default Content;
