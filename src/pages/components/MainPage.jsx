import React from "react";

import { YourComponent } from "./MainPageSource";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { Pattern } from "../pattern/Pattern";

export function MainPageRoute() {
  return (
    <>
      {/* <Header /> */}
      <Pattern>
        <YourComponent />
      </Pattern>
      {/* <Footer /> */}
    </>
  );
}
