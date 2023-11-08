import { useState } from "react";
import "./home.css";
import data from "./dataGlasses.json";
import Face from "./Face";
import ListGlasses from "./ListGlasses";

export default function Home() {
  const [selectedGlass, setSelectedGlass] = useState(null);

  const handleSelectGlass = (glass) => {
    setSelectedGlass(glass);
  };
  return (
    <div className="backGround ">
      <h5 className="text-center styleHeader">TRY GLASSES APP ONLINE</h5>

      <Face glassReview={selectedGlass} />
      <ListGlasses
        glasses={data}
        onSelect={handleSelectGlass}
        selectedGlass={selectedGlass}
      />
    </div>
  );
}
