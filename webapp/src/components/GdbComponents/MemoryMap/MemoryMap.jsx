import React from "react";
import "./MemoryMap.css";

const data = [
  "0x7fffffffe270: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00",
  "0x7fffffffe270: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00",
  "0x7fffffffe270: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00",
  "0x7fffffffe270: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00",
  "0x7fffffffe270: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00",
  "0x7fffffffe270: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00",
  "0x7fffffffe270: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00",
  "0x7fffffffe270: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00",
];
const MemoryMap = () => {
  return (
    <div>
      {/* MemoryMap */}
      <div className="memoryMap">
        {data?.length > 0
          ? data.map((obj) => {
              return <a>{obj}</a>;
            })
          : ""}
      </div>
    </div>
  );
};

export default MemoryMap;
