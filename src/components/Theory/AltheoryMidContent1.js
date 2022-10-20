import React from "react";

import "../MajorComponents/Mid.css";
import semi from "../../Img/Shapes/semicircle.jpg";
import angle from "../../Img/OptionImg/angle2.jpg";

const AltheoryMidContent1 = () => {
  return (
    <div className="overflow-auto scrollbar-primary" style={{ height: "100%" }}>
      <div className="my-5" style={{ width: "93%" }}>
        <h6 className="">Objective</h6>
        <ul>
          To verify that angle in a semi-circle is a right angle, using vector
          method.
        </ul>

        <h6>Semicircle</h6>
        <ul>
          A semicircle is half a circle. The curved edge is half a
          circumference, and the straight edge is the diameter.
        </ul>
        <img
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "50%",
            maxWidth: "50%",
          }}
          src={semi}
          alt="img"
        />
        <h6>What are angles in a semicircle?</h6>
        <img
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "50%",
            maxWidth: "50%",
          }}
          src={angle}
          alt="img"
        />
        <ul>
          <li>
            Angles in a semicircle are created when you join the two ends of the
            diameter to one point on the arc using chords.
          </li>
          <li>
            In the diagram above,AC is the diameter of a circle that divides the
            circle into two.
          </li>
          <li>
            The two points A and C are joined to another point B on the
            circumference using two chords.
          </li>
          <li>
            This triangle is a right-angle triangle with the 90° angle touching
            the arc. This is the same for any point that is placed on thye arc.
          </li>
          <li>
            If the point is placed on another point in a semicircle, the result
            would be the same(the two chords would meet at the circumference at
            90°). 
          </li>
          <li>
            <b>The angle in a semicircle is 90°</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AltheoryMidContent1;
