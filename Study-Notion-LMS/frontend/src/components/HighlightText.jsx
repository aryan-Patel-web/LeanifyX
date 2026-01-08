import React from "react";

function HighlightText({ text }) {
  return (
    <span className="font-bold text-yellow-400">
      {text}
    </span>
  );
}

export default HighlightText;
