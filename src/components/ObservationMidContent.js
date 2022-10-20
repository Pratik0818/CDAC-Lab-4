import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackNextBar from "./MajorComponents/BackNextBar";
import * as Instru from "./MajorComponents/Instruction"

const ObservationMidContent = ({instruction}) => {
  const canvas = useRef();
  let ctx = null;
  const navigate = useNavigate();
  let [disabled, setDisabled] = useState(true);
  let [disabled1, setDisabled1] = useState(true);
  let [disabled2, setDisabled2] = useState(true);
  let [disabled3, setDisabled3] = useState(true);
  let [disabled4, setDisabled4] = useState(true);

  const submitoperation = () => {
    navigate("/");
  };

   // regex
   const exp = /^p$/;
    // first input 
    const inputValues = (event) =>
    {
      let value = event.target.value;
      if (value.length == 1) {
      if (exp.test(value)) {
        setDisabled(!disabled);
          
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

    }

     // regex
   const exp1 = /^-a$/;
   // second input 
   const inputValuesTwo = (event) =>
   {
     let value = event.target.value;
     if (value.length == 2) {
     if (exp1.test(value)) {
       setDisabled1(!disabled1);   
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

   }

    // regex
    const exp2 = /^a$/;
    // third input 
    const inputValuesThree = (event) =>
    {
      let value = event.target.value;
      if (value.length == 1) {
      if (exp2.test(value)) {
        setDisabled2(!disabled2);   
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
 
    }

      // regex
      const exp3 = /^0$/;
      // fourth input 
      const inputValuesFour = (event) =>
      {
        let value = event.target.value;
        if (value.length == 1) {
        if (exp3.test(value)) {
          setDisabled3(!disabled3);   
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
   
      }

      // regex
   const exp4 = /^p$/;
   // fifth input 
   const inputValuesFifth = (event) =>
   {
     let value = event.target.value;
     if (value.length == 1) {
     if (exp4.test(value)) {
      
       setDisabled4(!disabled4);     
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

   }

   //change instruction
   useEffect(() => {
   if( (!disabled && !disabled1 && !disabled2 && !disabled3 && !disabled4))
   {
      instruction(Instru.Instruction_9())
   }
  });

  
  // initialize the canvas context
  useEffect(() => {
    const canvasEle = canvas.current;
    // dynamically assign the width and height to canvas

    canvasEle.width = 465;
    canvasEle.height = 265;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  // Draw circle
  useEffect(() => {
    drawCircle({ x: 0, y: 10, x1: 300, y1: 20 });
  }, []);

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

    /**************** Vector text and arrow ***************/
    //Text -a
    ctx.fillText("-a", 306, 170);
    //Text a
    ctx.fillText("a", 403, 170);
    //Text p
    ctx.fillText("p", 343, 97);
    ctx.beginPath();
    //Text -a line
    ctx.moveTo(305, 163);
    ctx.lineTo(313, 163);
    // up arrow
    ctx.moveTo(313, 163);
    ctx.lineTo(310, 160);
    //down arrow
    ctx.moveTo(313, 163);
    ctx.lineTo(310, 166);

    //Text a line
    ctx.moveTo(401, 163);
    ctx.lineTo(409, 163);
    // up arrow
    ctx.moveTo(409, 163);
    ctx.lineTo(406, 160);
    //down arrow
    ctx.moveTo(409, 163);
    ctx.lineTo(406, 166);

    //Text p line
    ctx.moveTo(338, 90);
    ctx.lineTo(347, 90);
    // up arrow
    ctx.moveTo(347, 90);
    ctx.lineTo(344, 87);
    //down arrow
    ctx.moveTo(347, 90);
    ctx.lineTo(344, 93);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();

    /********************* End *****************/
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

  // useEffect(() => {
  //   // ctx.canvas.addEventListener("click", function (event) {
  //   //   var mouseX = event.clientX - ctx.canvas.offsetLeft;
  //   //   var mouseY = event.clientY - ctx.canvas.offsetTop;
  //     // for printing the co-ordinate
  //     // ctx.clearRect(0, 0, 172, 113);
  //     // ctx.fillText(`${mouseX}`, 100, 100);
  //     // ctx.fillText(`${mouseY}`, 150, 100);

  //     // count = count + 1;
  //     // setCount(count);

  //     //   ctx.beginPath();
  //     //   ctx.arc(250, 150, 3, 0, Math.PI * 2);
  //     //   ctx.fillStyle = "black";
  //     //   ctx.fill();
  //     //   ctx.font = "18px serif";
  //     //   ctx.textAlign = "center";
  //     //   ctx.textBaseline = "middle";
  //     //   ctx.fillStyle = "black";
  //     //   ctx.fillText("A", mouseX + -15, mouseY + -10);
  //     //   setpointA((pointA[0] = mouseX), (pointA[1] = mouseY));
  //     //   count = count + 1;
  //     //   setCount(count);

  //     // if (
  //     //   count === 1 &&
  //     //   ((mouseX <= 351 && mouseX >= 349) || (mouseY <= 51 && mouseY >= 49))
  //     // ) {
  //     //   ctx.beginPath();
  //     //   ctx.arc(350, 50, 3, 0, Math.PI * 2);
  //     //   ctx.fillStyle = "black";
  //     //   ctx.fill();
  //     //   ctx.font = "18px serif";
  //     //   ctx.textAlign = "center";
  //     //   ctx.textBaseline = "middle";
  //     //   ctx.fillStyle = "black";
  //     //   ctx.fillText("P", mouseX, mouseY + -15);
  //     //   setpointP((pointP[0] = mouseX), (pointP[1] = mouseY));
  //     //   count = count + 1;
  //     //   setCount(count);
  //     // }

  //     // if (
  //     //   count === 2 &&
  //     //   ((mouseX <= 428 && mouseX >= 426) || (mouseY <= 86 && mouseY >= 84))
  //     // ) {
  //     //   ctx.beginPath();
  //     //   ctx.arc(427, 85, 3, 0, Math.PI * 2);
  //     //   ctx.fillStyle = "black";
  //     //   ctx.fill();
  //     //   ctx.font = "18px serif";
  //     //   ctx.textAlign = "center";
  //     //   ctx.textBaseline = "middle";
  //     //   ctx.fillStyle = "black";
  //     //   ctx.fillText("C", mouseX + 15, mouseY + -15);
  //     //   setpointC((pointC[0] = mouseX), (pointC[1] = mouseY));
  //     //   count = count + 1;
  //     //   setCount(count);
  //     // }
  //   //});
  // }, []);


 
  return (
    <div className="" style={{ height: "100%" }}>
      <div className="d-flex" style={{ height: "90%" }}>
        <div className="col-6  ">
          <canvas ref={canvas} style={{ border: "0px solid" }}></canvas>
        </div>
        <div className="col-6 text-center rounded-5 shadow-lg">
          <div
            className=" text-success fw-bold d-flex justify-content-center align-items-center"
            style={{ height: "15%", fontSize: "1.3vw" }}
          >
            Observation
          </div>
          <div
            className="fw-bold text-center"
            style={{ height: "10%", fontSize: "1.2vw" }}
          >
            From figure,
          </div>
          <div
            className="text-center"
            style={{ height: "10%", fontSize: "1.2vw" }}
          >
            | OA&#8407; | = -a, | OP&#8407; | = p, | OB&#8407; | = a
          </div>
          <div
            className="text-center"
            style={{ height: "10%", fontSize: "1.2vw" }}
          >
            <label>
              AP&#8407; = OP&#8407; - OA&#8407; =
              <input
               disabled={disabled ? false : true}
                type="email"
                onChange={inputValues}
                style={{ height: "7%", width: "7%" }}
                maxLength={1}
                required
              ></input>{" "}
              -
              <input
                className="ms-2"
                disabled={disabled1 ? false : true}
                type="email"
                onChange={inputValuesTwo}
                style={{ height: "7%", width: "7%" }}
                maxLength={2}
                required
              ></input>
            </label>
          </div>
          <div
            className="text-center"
            style={{ height: "10%", fontSize: "1.2vw" }}
          >
            <label>
              BP&#8407; = OP&#8407; - OB&#8407; =
              <input
                 disabled={disabled4 ? false : true}
                type="email"
                 onChange={inputValuesFifth}
                style={{ height: "7%", width: "7%" }}
                maxLength={1}
                required
              ></input>{" "}
              -
              <input
                className="ms-2"
                disabled={disabled2 ? false : true}
                type="email"
                onChange={inputValuesThree}
                style={{ height: "7%", width: "7%" }}
                maxLength={1}
                required
              ></input>
            </label>
          </div>
          <div
            className="text-center"
            style={{ height: "10%", fontSize: "1.2vw" }}
          >
            <label>
              AP&#x20d7; . BP&#x20d7; = ( p&#x20d7; + a&#x20d7; ) . ( p&#x20d7;
              - a&#x20d7; ) 
             
            </label>
          </div>
          <div
            className="text-center"
            style={{ height: "10%", fontSize: "1.2vw" }}
          >
            <label>
              AP&#x20d7; . BP&#x20d7; = | p&#x20d7; |² - | a&#x20d7; |² =
              <input
                disabled={disabled3 ? false : true}
                type="email"
                onChange={inputValuesFour}
                style={{ height: "10%", width: "10%" }}
                maxLength={1}
                required
              ></input>
            </label>
          </div>
          <br />
            {(!disabled && !disabled1 && !disabled2 && !disabled3 && !disabled4) && (
              <div
                className=" text-center"
                style={{ height: "10%", fontSize: "1.2vw" }}
              >
                Conclusion: So, the angle APB between the vectors AP&#x20d7; and BP&#x20d7; is a right angle.
              </div>
            )}
        </div>
      </div>
      <BackNextBar
        clickSubmit={submitoperation}
        backvisible="visible"
        nextvisible="hidden"
        submitvisible={(!disabled && !disabled1 && !disabled2 && !disabled3 && !disabled4) ? "visible" : "hidden"}
        buttonname="RESTART"
      />
    </div>
  );
};

export default ObservationMidContent;
