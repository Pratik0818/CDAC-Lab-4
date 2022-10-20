import React from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import MeasurementMidContent from './MeasurementMidContent';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

const Measurement = () => {
  let [changeIns, setChangeIns] = useState(Instru.Instruction_8());
  return (
    <div
    style={{
      height: "100vh",
      backgroundImage: "url(" + backgroundImg + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <Headcomp />

    <Middlecomp
      midheight="70%"
      midcontent={<MeasurementMidContent instruction={setChangeIns}/>}
      toolvisible="hidden"
            
    />

    <Footercomp footheight="20%" instruction={changeIns} />
    <ToastContainer/>
  </div>
  )
}

export default Measurement