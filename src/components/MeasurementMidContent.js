import React, { useRef, useEffect, useState, useContext } from "react";
import Draggable from "react-draggable";
import { toast } from "react-toastify";

import protractor from "../Img/Shapes/protractor.png";
import clock from "../Img/Shapes/clock.png";
import anticlock from "../Img/Shapes/anticlock.png";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";

import * as Instru from "./MajorComponents/Instruction";

function MeasurementMidContent({ instruction }) {
  const canvas = useRef();
  let ctx = null;
  let [count, setCount] = useState(0);
  let [disabled, setDisabled] = useState(true);
  let [disabled1, setDisabled1] = useState(true);

  const navigate = useNavigate();

  //code for rotating protractor
  const [deg, setDeg] = useState(0);
  //next component
  const onNext = (e) => {
    navigate("/letusverify/observation");
  };

  const submitoperation = () => {
    navigate("/");
  };

  // regex
  const exp = /^90$/;

  // first input
  const inputValues = (event) => {
    let value = event.target.value;
    if (value.length == 2) {
      if (exp.test(value)) {
        setDisabled(!disabled);
        count = count + 1;
        setCount(count);
        toast.success("Good! You are right", {
          position: "top-center",
          autoClose: 900,
        });
      } else {
        toast.error("Wrong value please enter again", {
          position: "top-center",
          autoClose: 900,
        });
      }
    }
  };

  // second input
  const inputValuesTwo = (event) => {
    let value = event.target.value;
    if (value.length == 2) {
      if (exp.test(value)) {
        setDisabled1(!disabled1);
        count = count + 1;
        setCount(count);
        toast.success("Good! You are right", {
          position: "top-center",
          autoClose: 900,
        });
      } else {
        toast.error("Wrong value please enter again", {
          position: "top-center",
          autoClose: 900,
        });
      }
    }
  };

  const changeAngleRight = () => {
    setDeg((pre) => pre + 1);
  };

  const changeAngleLeft = () => {
    setDeg((pre) => pre - 1);
  };
  const changeAngle = () => {
    setDeg((pre) => pre - 45);
  };
  const changeAngles = () => {
    setDeg((pre) => pre + 45);
  };

  //change instruction
  useEffect(() => {
    if(!disabled && !disabled1)
    {
      instruction(Instru.Instruction_4);
    }
  });

  // initialize the canvas context
  useEffect(() => {
    const canvasEle = canvas.current;
    // dynamically assign the width and height to canvas

    canvasEle.width = 485;
    canvasEle.height = 385;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    // for printing the co-ordinate
    //     ctx.clearRect(0, 0, 172, 113);
    //     ctx.fillText(`${mouseX}`, 100, 100);
    //     ctx.fillText(`${mouseY}`, 150, 100);
    drawCircle({ x: 0, y: 10, x1: 300, y1: 20 });
  }, []);

  // draw a circle
  const drawCircle = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    // const { color = props.color, width = 2 } = style;

    //drawing outer circle

    function mainCircle(
      X_Cordinate,
      Y_Cordinate,
      radius,
      strt_ang,
      end_ang,
      width,
      inst
    ) {
      ctx.beginPath();
      ctx.arc(X_Cordinate, Y_Cordinate, radius, strt_ang, end_ang);
      ctx.lineWidth = width;
      ctx.stroke();
    }

    mainCircle(350, 150, 100, 0, 2 * Math.PI, 3, 5);

    //drawing centre point circle

    function centrePoint_Circle(
      X_Cordinate,
      Y_Cordinate,
      radius,
      strt_ang,
      end_ang,
      width,
      colr,
      fnt,
      algn,
      base,
      text,
      text_X_Cordnate,
      text_Y_Cordnate
    ) {
      ctx.beginPath();
      ctx.arc(X_Cordinate, Y_Cordinate, radius, strt_ang, end_ang);
      ctx.lineWidth = width;
      ctx.stroke();
      ctx.fillStyle = colr;
      ctx.fill();
      ctx.font = fnt;
      ctx.textAlign = algn;
      ctx.textBaseline = base;
      ctx.fillText(text, text_X_Cordnate, text_Y_Cordnate);
    }

    centrePoint_Circle(
      350,
      150,
      2,
      0,
      2 * Math.PI,
      1,
      "black",
      "18px serif",
      "center",
      "middle",
      "O",
      350 + 8,
      150 + 8
    );

    //Point B of a circle

    function pointB_Circle(
      X_Cordinate,
      Y_Cordinate,
      radius,
      strt_ang,
      end_ang,
      width,
      colr,
      fnt,
      algn,
      base,
      text,
      text_X_Cordnate,
      text_Y_Cordnate
    ) {
      ctx.beginPath();
      ctx.arc(X_Cordinate, Y_Cordinate, radius, strt_ang, end_ang);
      ctx.lineWidth = width;
      ctx.stroke();
      ctx.fillStyle = colr;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.font = fnt;
      ctx.textAlign = algn;
      ctx.textBaseline = base;
      ctx.fillText(text, text_X_Cordnate, text_Y_Cordnate);
      ctx.beginPath();
      // ctx.moveTo(350, 150);
      // ctx.lineTo(450, 150);
      // ctx.moveTo(150, 75);
      // ctx.lineTo(160, 85);
      ctx.stroke();
      ctx.closePath();
    }

    //Function call of Point B of a circle
    pointB_Circle(
      450,
      150,
      2,
      0,
      2 * Math.PI,
      1,
      "black",
      "18px serif",
      "center",
      "middle",
      "B",
      450 + 8,
      150 + 8
    );

    /*************************** Point A functionality ***********************/
    ctx.beginPath();
    ctx.arc(250, 150, 3, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.font = "18px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText("A", 238, 151);
    ctx.beginPath();
    //Point A to Point P line
    ctx.moveTo(250, 150);
    ctx.lineTo(350, 50);

    //Right arrow line
    ctx.moveTo(305, 95);
    ctx.lineTo(303, 106);

    //Left arrow line
    ctx.moveTo(305, 95);
    ctx.lineTo(293, 96);

    //Point A to Point C line
    ctx.moveTo(250, 150);
    ctx.lineTo(427, 85);

    //Left arrow line
    ctx.moveTo(316, 125);
    ctx.lineTo(306, 122);

    //Right arrow line
    ctx.moveTo(316, 125);
    ctx.lineTo(310, 134);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();

    /*************************** Point P functionality ***********************/
    ctx.beginPath();
    ctx.arc(350, 50, 3, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.font = "18px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText("P", 350, 39);

    /*************************** Point C functionality ***********************/
    ctx.beginPath();
    ctx.arc(427, 85, 3, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.font = "18px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText("C", 439, 81);

    /*************************** Point O functionality ***********************/

    ctx.beginPath();
    //Point O to Point P line
    ctx.moveTo(350, 150);
    ctx.lineTo(350, 50);

    //Left arrow line
    ctx.moveTo(350, 75);
    ctx.lineTo(341, 83);

    //Right arrow line
    ctx.moveTo(350, 75);
    ctx.lineTo(359, 83);

    //Point O to Point C line
    ctx.moveTo(350, 150);
    ctx.lineTo(427, 85);

    //Down arrow line
    ctx.moveTo(391, 115);
    ctx.lineTo(389, 128);

    //Up arrow line
    ctx.moveTo(391, 115);
    ctx.lineTo(378, 116);

    //Point O to Point A line
    ctx.moveTo(350, 150);
    ctx.lineTo(250, 150);

    //down arrow line
    ctx.moveTo(306, 150);
    ctx.lineTo(312, 159);

    //up arrow line
    ctx.moveTo(306, 150);
    ctx.lineTo(314, 142);

    //Point O to Point B line
    ctx.moveTo(350, 150);
    ctx.lineTo(450, 150);

    //Left arrow line
    ctx.moveTo(404, 150);
    ctx.lineTo(395, 158);

    //Right arrow line
    ctx.moveTo(404, 150);
    ctx.lineTo(394, 142);

    ctx.strokeStyle = "green";
    ctx.lineWidth = 1;
    ctx.stroke();

    /*************************** Point B functionality ***********************/

    ctx.beginPath();
    //Point B to Point P line
    ctx.moveTo(450, 150);
    ctx.lineTo(350, 50);

    //Right arrow line
    ctx.moveTo(376, 75);
    ctx.lineTo(388, 77);

    //Left arrow line
    ctx.moveTo(376, 75);
    ctx.lineTo(374, 87);

    //Point B to Point C line
    ctx.moveTo(450, 150);
    ctx.lineTo(427, 85);

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
  };


  

  return (
    <div className="" style={{ height: "100%" }}>
      <div className="d-flex" style={{ height: "90%" }}>
        <div className=" col-2 ">
          <Draggable>
            <div className=" container flex-direction:row  animation:rotatelogo  5s">
              <div
                id="pro"
                className=""
                style={{
                  visibility: "visible",
                  transform: `rotate(${deg}deg)`,
                }}
              >
                <img
                  id="pro1"
                  className="image"
                  src={protractor}
                  style={{ height: "300px" }}
                ></img>
              </div>
            </div>
          </Draggable>
        </div>

        <div className="mt-4 col-6 ">
          <canvas ref={canvas} style={{ border: "0px solid" }}></canvas>
        </div>

        <div className="col-4 ">
          <div
            id="rotator"
            className="d-flex justify-content-center "
            style={{ visibility: "visible", height: "20%" }}
          >
            <button
              id="right"
              type="button"
              className="btn "
              onClick={changeAngleRight}
            >
              <img src={clock} style={{ height: "90%", width: "90%" }}></img>
            </button>
            &nbsp;&nbsp;
            <button
              id="left"
              type="button"
              className="btn "
              onClick={changeAngleLeft}
            >
              <img
                src={anticlock}
                style={{ height: "90%", width: "90%" }}
              ></img>
            </button>
            &nbsp;&nbsp;
            <button
              id="left"
              type="button"
              className="btn "
              onClick={changeAngle}
            >
              <img
                src={anticlock}
                style={{ height: "90%", width: "90%" }}
              ></img>
            </button>
            &nbsp;&nbsp;
            <button
              id="right"
              type="button"
              className="btn "
              onClick={changeAngles}
            >
              <img src={clock} style={{ height: "90%", width: "90%" }}></img>
            </button>
          </div>
          {/* <div className="d-flex" style={{height:"10%"}}>
            <div className="col-2 fw-bold d-flex justify-content-center align-items-center">1° clockwise</div>
            <div className="col-4 fw-bold">1° anticlockwise</div>
            <div className="col-3 fw-bold">3</div>
            <div className="col-3 fw-bold">4</div>
          </div> */}
          <div
            className="rounded-5 shadow-lg "
            style={{ height: "80%", fontFamily: "Arial" }}
          >
            <div
              className=" text-success fw-bold d-flex justify-content-center align-items-center"
              style={{ height: "15%", fontSize: "1.3vw" }}
            >
              Demonstration
            </div>
            <div
              className="fw-bold text-center"
              style={{ height: "10%", fontSize: "1.2vw" }}
            >
              Using a protractor, measure
            </div>
            <div style={{ height: "10%", fontSize: "1.2vw" }}>
              <label>1. The angle between the vectors AP and BP </label>
            </div>
            <div
              className="text-center"
              style={{ height: "10%", fontSize: "1.2vw" }}
            >
              <label>
                i.e. ∠APB =
                <input
                  disabled={disabled ? false : true}
                  type="email"
                  onChange={inputValues}
                  style={{ height: "15%", width: "15%" }}
                  maxLength={2}
                  required
                ></input>
                °
              </label>
            </div>
            <div style={{ height: "10%", fontSize: "1.2vw" }}>
              <label>2. The angle between the vectors AC and BC </label>
            </div>
            <div
              className="text-center"
              style={{ height: "10%", fontSize: "1.2vw" }}
            >
              <label>
                i.e. ∠ACB =
                <input
                  disabled={disabled1 ? false : true}
                  type="email"
                  onChange={inputValuesTwo}
                  style={{ height: "15%", width: "15%" }}
                  maxLength={2}
                  required
                ></input>
                °
              </label>
            </div>
           
          </div>
        </div>
      </div>
      <BackNextBar
        setForward={onNext}
        clickSubmit={submitoperation}
        backvisible="visible"
        nextvisible={!disabled && !disabled1 ? "visible" : "hidden"}
        submitvisible="hidden"
        buttonname="RESTART"
      />
    </div>
  );
}

export default MeasurementMidContent;
