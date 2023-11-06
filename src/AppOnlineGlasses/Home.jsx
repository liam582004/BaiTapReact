import React from "react";
import Title from "./Title";
import HandleWearGlasses from "./HandleWearGlasses";
import data from "./dataGlasses.json";

export default function Home() {
  return (
    <div>
      <Title />
      <HandleWearGlasses />
    </div>
  );
}
