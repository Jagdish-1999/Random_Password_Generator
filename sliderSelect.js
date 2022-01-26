// creating component  for slider check

function slider(letterId) {
  const div = document.querySelector(".main");
  const input = document.createElement("input");
  const label = document.createElement("label");
  div.append(input);
  div.append(label);
  input.type = "checkbox";
  label.setAttribute("for", letterId);
  div.className = "slider-container";
  input.id = letterId;
  return div;
}
slider("numbers");
slider("upper_L");
slider("lower_L");
slider("symbols");
