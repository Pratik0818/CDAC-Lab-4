import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackNextBar from "./MajorComponents/BackNextBar";
import * as Instru from "./MajorComponents/Instruction";

const PointOnCircleMidContent = ({instruction}) => {
  const navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [pointA, setpointA] = useState([0, 0]);
  let [pointP, setpointP] = useState([0, 0]);
  let [pointC, setpointC] = useState([0, 0]);

  const canvas = useRef();
  let ctx = null;

  //next component
  const onNext = (e) => {
    navigate("/letusverify/protector");
  };
  // initialize the canvas context
  useEffect(() => {
    const canvasEle = canvas.current;
    // dynamically assign the width and height to canvas

    canvasEle.width = 750;
    canvasEle.height = 345;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    drawCircle({ x: 0, y: 10, x1: 500, y1: 20 });
  }, []);

  // draw a circle
  const drawCircle = (info, style = {}) => {
    // const { x, y, x1, y1 } = info;
    // const { color = props.color, width = 2 } = style;

    //Drawing circle

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

    //Function call of drawing circle
    mainCircle(350, 150, 100, 0, 2 * Math.PI, 3, 5);

    //Drawing centre point O on a circle circle

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
      ctx.beginPath();
      ctx.moveTo(350, 150);
      ctx.lineTo(450, 150);
      // ctx.moveTo(150, 75);
      // ctx.lineTo(160, 85);
      ctx.stroke();
      ctx.closePath();
    }

    //Function call of drawing centre point O on a circle circle
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

    //radius=10 of a circle

    function radius_Circle(
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
      // ctx.arc(X_Cordinate, Y_Cordinate, radius, strt_ang, end_ang);
      // ctx.lineWidth = width;
      // ctx.stroke();
      // ctx.fillStyle = colr;
      // ctx.fill();
      ctx.font = fnt;
      ctx.textAlign = algn;
      ctx.textBaseline = base;
      ctx.fillText(text, text_X_Cordnate, text_Y_Cordnate);
    }

    //Function call of radius=10 of a circle
    radius_Circle(
      100,
      150,
      2,
      0,
      2 * Math.PI,
      1,
      "black",
      "17px serif",
      "center",
      "middle",
      "r",
      400 + 8,
      150 + 8
    );

    //Drawing highlighting points

    function highlightPoints(
      X_Cordinate,
      Y_Cordinate,
      radius,
      strt_ang,
      end_ang,
      width,
      colr
    ) {
      ctx.beginPath();
      ctx.arc(X_Cordinate, Y_Cordinate, radius, strt_ang, end_ang);
      ctx.lineWidth = width;
      ctx.fillStyle = colr;
      ctx.fill();
    }

    //Function call of drawing highlighting points
    highlightPoints(250, 150, 3, 0, Math.PI * 2, 5, " red ");
    highlightPoints(350, 50, 3, 0, Math.PI * 2, 5, " red ");
    highlightPoints(427, 85, 3, 0, Math.PI * 2, 5, " red ");
    // highlightPoints(278, 220, 3, 0, Math.PI * 2, 5, " red ");
  };

  //Mark three points on circle(A,P,C)

  useEffect(() => {
    ctx.canvas.addEventListener("click", function (event) {
      var mouseX = event.clientX - ctx.canvas.offsetLeft;
      var mouseY = event.clientY - ctx.canvas.offsetTop;
      // for printing the co-ordinate
      // ctx.clearRect(0, 0, 172, 113);
      // ctx.fillText(`${mouseX}`, 100, 100);
      // ctx.fillText(`${mouseY}`, 150, 100);

      if (
        Math.pow(Math.pow(mouseX - 350, 2) + Math.pow(mouseY - 150, 2), 0.5) >=
          98.5 &&
        Math.pow(Math.pow(mouseX - 350, 2) + Math.pow(mouseY - 150, 2), 0.5) <=
          101.5
      ) {
        // count = count + 1;
        // setCount(count);

        if (
          count === 0 &&
          ((mouseX <= 251 && mouseX >= 249) || (mouseY <= 151 && mouseY >= 149))
        ) {
          ctx.beginPath();
          ctx.arc(250, 150, 3, 0, Math.PI * 2);
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.font = "18px serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "black";
          ctx.fillText("A", mouseX + -15, mouseY + -10);
          setpointA((pointA[0] = mouseX), (pointA[1] = mouseY));
          count = count + 1;
          setCount(count);
          toast.success("Point A is created on a circle",{
            position:"top-center",
            autoClose:1000,
        });
        }

        if (
          count === 1 &&
          ((mouseX <= 351 && mouseX >= 349) || (mouseY <= 51 && mouseY >= 49))
        ) {
          ctx.beginPath();
          ctx.arc(350, 50, 3, 0, Math.PI * 2);
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.font = "18px serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "black";
          ctx.fillText("P", mouseX, mouseY + -15);
          setpointP((pointP[0] = mouseX), (pointP[1] = mouseY));
          count = count + 1;
          setCount(count);
          toast.success("Point P is created on a circle",{
            position:"top-center",
            autoClose:1000,
        });
        }

        if (
          count === 2 &&
          ((mouseX <= 428 && mouseX >= 426) || (mouseY <= 86 && mouseY >= 84))
        ) {
          ctx.beginPath();
          ctx.arc(427, 85, 3, 0, Math.PI * 2);
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.font = "18px serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "black";
          ctx.fillText("C", mouseX + 15, mouseY + -15);
          setpointC((pointC[0] = mouseX), (pointC[1] = mouseY));
          count = count + 1;
          setCount(count);
          instruction(Instru.Instruction_5());
          toast.success("Point C is created on a circle",{
            position:"top-center",
            autoClose:1000,
        });
        }
      }
    });
  }, []);

  // Draw the line(AP,AC,OP,OC,OA,BP,BC) 

  useEffect(() => {
    ctx.canvas.addEventListener("click", function (event) {
      var mouseX = event.clientX - ctx.canvas.offsetLeft;
      var mouseY = event.clientY - ctx.canvas.offsetTop;

      //Condition of point A
      if (
        (count === 3) &&
        ((mouseX <= 251 && mouseX >= 249) && (mouseY <= 151 && mouseY >= 149))
      ) {
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
        count = count+1;
        setCount(count);
        instruction(Instru.Instruction_6());
      }

      //Condition of point O
      if (
        (count === 4) &&
        ((mouseX <= 351 && mouseX >= 349) && (mouseY <= 151 && mouseY >= 149))
      ) {
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

        ctx.strokeStyle = "green";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
        count = count+1;
        setCount(count);
        instruction(Instru.Instruction_7());
      }

      //Condition of point B
      if (
        (count === 5) &&
        ((mouseX <= 451 && mouseX >= 449) && (mouseY <= 151 && mouseY >= 149))
      ) {
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
        count = count+1;
        setCount(count);
        instruction(Instru.Instruction_4());
      }

      // else if (mouseX <= pointP[0] + 3 && mouseX >= pointP[0] - 3) {
      //   ctx.beginPath();
      //   ctx.moveTo(pointP[0], pointP[1]);
      //   ctx.lineTo(pointC[0], pointC[1]);
      //   ctx.strokeStyle = "black";
      //   ctx.lineWidth = 2;
      //   ctx.stroke();
      // } else if (mouseX <= pointC[0] + 3 && mouseX >= pointC[0] - 3) {
      //   ctx.beginPath();
      //   ctx.moveTo(pointC[0], pointC[1]);
      //  // ctx.lineTo(pointD[0], pointD[1]);
      //   ctx.strokeStyle = "black";
      //   ctx.lineWidth = 2;
      //   ctx.stroke();
      // }
      // else if (
      //   mouseX <= pointD[0] + 3 &&
      //   mouseX >= pointD[0] - 3 &&
      //   flag == false
      // )
      // {
      //   ctx.beginPath();
      //   ctx.moveTo(pointD[0], pointD[1]);
      //   ctx.lineTo(pointA[0], pointA[1]);
      //   ctx.strokeStyle = "black";
      //   ctx.lineWidth = 2;
      //   ctx.stroke();

      //   //readytodrawangle_flag = true;

      //   //angleD_flag = true;

      // }

      // mouseX = 0;

      // mouseY = 0;
    });
  }, []);

  return (
    <div className="" style={{ height: "100%" }}>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "90%" }}
      >
        <div className="">
          <canvas ref={canvas} style={{ border: "0px solid" }}></canvas>
        </div>
      </div>
      <BackNextBar
        setForward={onNext}
        backvisible="visible"
        nextvisible={(count===6) ? "visible" : "hidden"}
        submitvisible="hidden"
      />
    </div>
  );
};

export default PointOnCircleMidContent;
