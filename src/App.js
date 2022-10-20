import React from "react";

import { Route, Routes } from "react-router-dom";
import Help from "./components/HelpVideo/Help";
import Errorpage from "./components/MajorComponents/Errorpage";
import Launchpage from "./components/MajorComponents/Launchpage";
import Letusverify from "./components/MajorComponents/Letusverify";

import Play from "./components/quiz/Play";
import QuizInstructions from "./components/quiz/QuizInstructions";
import AItheory1 from "./components/Theory/AItheory1";
import UnderConstruction from "./components/MajorComponents/UnderConstruction";
import SelectCircle from "./components/SelectCircle";
import Circle from "./components/Circle";
import PointOnCircle from "./components/PointOnCircle";
import Protector from "./components/Protector";
import Measurement from "./components/Measurement";
import Observation from "./components/Observation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Launchpage />} />
      <Route path="/letusverify" element={<Letusverify />} />
      <Route
        path="/letusverify/selectcircle"
        element={<SelectCircle />}
      />
      <Route
        path="/letusverify/circle"
        element={<Circle />}
      />
      <Route
        path="/letusverify/pointoncircle"
        element={<PointOnCircle />}
      />
      <Route
        path="/letusverify/protector"
        element={<Protector />}
      />
      <Route
        path="/letusverify/measurement"
        element={<Measurement />}
      />
      <Route
        path="/letusverify/observation"
        element={<Observation />}
      />


      <Route path="/letusverify/sqtheory" element={<AItheory1 />} />



      <Route path="/letusverify/instructions" element={<QuizInstructions />} />
      <Route path="/letusverify/quiz" element={<Play />} />


      <Route path="/letusverify/help" element={<Help />} />
      <Route path="/underconstruction" element={<UnderConstruction />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
};

export default App;
