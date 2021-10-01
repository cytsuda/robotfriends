import React from "react";

const Scroll = (props) => {
  return (
    <div className="flex-auto overflow-y-auto h-full">{props.children}</div>
  );
};

export default Scroll;
