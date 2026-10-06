import React, { useState } from "react";
import WelcomeScreen from "./Components/WelcomeScreen";
import Screen2 from "./Components/Screen2";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "bike">("welcome");

  return (
    <>
      {currentScreen === "welcome" ? (
        <WelcomeScreen onGetStarted={() => setCurrentScreen("bike")} />
      ) : (
        <Screen2 />
      )}
    </>
  );
}