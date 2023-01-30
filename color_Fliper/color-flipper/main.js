import "./style.css";

const COLOR_PALETTE = {
  "#987284": "Mountbatten Pink",
  "#75B9BE": "Maximun Blue Green",
  "#D0D6B5": "Pale Spring Blue",
  "#F9B5AC": "Melon",
  "#EE7674": "Light Coral",
  "#67568c": "Pastel read",
};

const addColorPickerOption = () => {
  const colorPicker = document.querySelector(`#color-picker`);
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPicker.append(option);
  });
};

const addEventListenerColorPicker = () => {
  const colorPicker = document.querySelector(`#color-picker`);
  const h2 = document.querySelector(`#color-name`);
  colorPicker.addEventListener("change", (event) => {
    const newcolor = event.target.value;
    document.body.style.backgroundColor = newcolor;
    h2.innerText = COLOR_PALETTE[newcolor]
      ? `${COLOR_PALETTE[newcolor]} | ${newcolor}`
      : "Undefined";
  });
};

addColorPickerOption();
addEventListenerColorPicker();
