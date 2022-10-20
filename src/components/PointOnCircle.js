import React from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import PointOnCircleMidContent from './PointOnCircleMidContent';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';


const PointOnCircle = () => {

  let [changeIns, setChangeIns] = useState(Instru.Instruction_2());
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
      midcontent={<PointOnCircleMidContent instruction={setChangeIns}/>}
      toolvisible="hidden"
      
    />

    <Footercomp footheight="20%" instruction={changeIns} />
    <ToastContainer/>
  </div>
  )
}

export default PointOnCircle
