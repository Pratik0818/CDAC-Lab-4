import React, { useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";

function CircleMidContent() {
    const navigate = useNavigate();
    const canvas = useRef();
    let ctx = null;
   
    //next component
    const onNext = (e) => {
        navigate("/letusverify/pointoncircle");
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

    useEffect(() => {  drawCircle({ x: 0, y: 10, x1: 500, y1: 20 } );
    }, []);

    // draw a circle
    const drawCircle = (info, style = {}) => {
        // const { x, y, x1, y1 } = info;
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
            ctx.beginPath();
            ctx.moveTo(350, 150);
            ctx.lineTo(450, 150);
            // ctx.moveTo(150, 75);
            // ctx.lineTo(160, 85);
            ctx.stroke();
            ctx.closePath();
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
            150 + 8,
            

        );

        //Point A of a circle

        function pointA_Circle(
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

        pointA_Circle(
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
            150 + 8,
            
   
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
            150 + 8,
            
   
        );
    };


    return (
        <div className="" style={{ height: "100%" }}>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "90%" }}>

                <div className="" style={{ height: "80%" }}>
                    <div className="">
                        <canvas ref={canvas} style={{ border: "0px solid" }}></canvas>

                    </div>
                </div>
                <div className="border rounded-pill shadow text-success fw-bold d-flex justify-content-center align-items-center" style={{ height: "20%",width:"40%",fontSize:"1.2vw" }}>
                    Circle is drawn with centre 'O' and radius r.
                </div>

            </div>
            <BackNextBar
                setForward={onNext}
                backvisible="visible"
                nextvisible="visible"
                submitvisible="hidden"
            />
        </div>
    );
}

export default CircleMidContent;
