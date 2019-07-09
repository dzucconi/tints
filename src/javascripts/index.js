"use strict";

const chroma = require("chroma-js");
const shuffle = require("lodash.shuffle");

const tint = color => {
  const el = document.createElement("div");
  el.classList.add("tint");
  el.style.backgroundColor = color;
  return el;
};

const label = color => {
  const el = document.createElement("span");
  el.innerText = color;
  return el;
};

const root = document.getElementById("root");

const colors = chroma
  .scale(["red", "orange", "yellow", "green", "blue", "indigo", "violet"])
  .colors(60);

shuffle(colors).map(color => {
  color = chroma(color).brighten(4.2);
  const el = tint(color);
  el.appendChild(label(color));
  root.appendChild(el);
});
