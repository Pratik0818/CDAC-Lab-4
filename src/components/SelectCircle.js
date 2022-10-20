import React from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import circle from "../Img/Shapes/circle.png";
import SelectCircleMidContent from './SelectCircleMidContent';

const SelectCircle = () => {
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
      midcontent={<SelectCircleMidContent />}
      toolvisible="visible"
      toolimgsrc={circle}
      toolname="Circle"
      toolnavigate="/letusverify/circle"
    />

    <Footercomp footheight="20%" instruction={Instru.Instruction_1()} />
  </div>
  )
}

export default SelectCircle
