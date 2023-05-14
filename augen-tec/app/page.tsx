"use client";
import Content from "./components/content/content";
import Header from "./components/header/Header";
import { esData } from "./public/texts/es";
import { ContentProps } from "./components/content/content";

export default function Home() {
  return (
    <main>
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
