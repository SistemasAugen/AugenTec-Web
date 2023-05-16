"use client";
import Content from "./components/content/content";
import Header from "./components/header/Header";
import { esData } from "./public/texts/es";
import localFont from 'next/font/local';
const Raleway = localFont({ src: '../app/public/fonts/Raleway-VariableFont_wght.ttf'})


export default function Home() {
  return (
    <main className={Raleway.className}>
      <Header></Header>
      {esData.main.map((item) => {
        return (
          <Content
            key={item.imageData.alt}
            imgData={item.imageData}
            colorTitle={item.colorTitle}
            title={item.title}
            text={item.text}></Content>
        );
      })}
    </main>
  );
}
