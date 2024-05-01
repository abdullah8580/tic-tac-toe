"use client";
import React from "react";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="border border-green-500 m-0 w-10 h-10"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
