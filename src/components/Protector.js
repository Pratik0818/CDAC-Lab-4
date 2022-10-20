import React from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import ProtectorMidContent from './ProtectorMidContent';
import protector from "../Img/Shapes/protractor.png"



const Protector = () => {
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
      midcontent={<ProtectorMidContent />}
      toolvisible="visible"
      toolimgsrc={protector}
      toolname="Protractor"
      toolnavigate="/letusverify/measurement"
      
    />

    <Footercomp footheight="20%" instruction={Instru.Instruction_3()} />
  </div>
  )
}

export default Protector