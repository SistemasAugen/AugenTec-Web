import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import styles from "./content.module.css";
export interface ContentProps {
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
}: ContentProps) {
  return (
    <>
      <Image
        src={imgData.src}
        alt={imgData.alt}
        className={styles.image}></Image>
      <div className={styles.textContainer}>
        {colorTitle && (
          <span
            className={styles.colorTitle}
            style={{ color: colorTitle.color }}>
            {colorTitle.text}
          </span>
        )}
        <span className={styles.title}>{title}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
}
