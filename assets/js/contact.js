const body = document.querySelector("body");
const contactBtn = document.querySelector(".contact-btn");

// Element creation
const mainDiv = document.createElement("DIV");
const form = document.createElement("form");
const fieldset = document.createElement("fieldset");
const legend = document.createElement("legend");
const inputName = document.createElement("input");
const inputEmail = document.createElement("input");
const inputSubmit = document.createElement("input");

body.appendChild(mainDiv);
mainDiv.appendChild(form);
form.appendChild(fieldset);
fieldset.append(legend, inputName, inputEmail, inputSubmit);

legend.innerText = "Contact Form";

// Container styles
let mainDivStyles = {
  "align-items": "center",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  cursor: "pointer",
  display: "none",
  height: "100%",
  "justify-content": "center",
  left: "0px",
  position: "fixed",
  top: "0px",
  width: "100%",
  "z-index": "9999",
};
addStyle(mainDiv, mainDivStyles);
mainDiv.classList.add("contact-modal");

// Form styles
let formStyles = {
  "background-color": "rgb(255, 255, 255)",
  cursor: "initial",
  padding: "20px",
  "max-width": "600px",
  width: "calc(100% - 40px)",
};
addStyle(form, formStyles);

// Fieldset styles
let fieldsetStyles = {
  display: "flex",
  "flex-direction": "column",
};

addStyle(fieldset, fieldsetStyles);

// Legend styles
let legendStyles = {
  "font-size": "3em",
  "font-weight": "100",
  "text-align": "center",
  "text-transform": "uppercase",
};
addStyle(legend, legendStyles);

// Input field styles
let inputStyles = {
  "font-size": "1.2em",
  "margin-bottom": "10px",
  padding: "10px",
};
addStyle(inputName, inputStyles);
addStyle(inputEmail, inputStyles);

// Submit button styles
let inputSubmitStyles = {
  "font-size": "1.2em",
  "background-color": "rgb(0, 0, 0)",
  border: "1px solid rgb(0, 0, 0)",
  color: "rgb(255, 255, 255)",
  cursor: "pointer",
  "letter-spacing": "0.5em",
  padding: "10px",
  "text-transform": "uppercase",
  transition: "background-color 0.4s ease 0s, color 0.4s ease 0s",
};
addStyle(inputSubmit, inputSubmitStyles);

// Set element attrbiutes
form.setAttribute("autocomplete", "on");

inputName.setAttribute("id", "name");
inputName.setAttribute("name", "name");
inputName.setAttribute("placeholder", "Enter Name");
inputName.setAttribute("type", "text");

inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("placeholder", "Enter Email");
inputEmail.setAttribute("type", "email");

inputSubmit.setAttribute("value", "Submit");
inputSubmit.setAttribute("type", "Submit");

contactBtn.addEventListener("click", () => {
  mainDiv.classList.toggle("show-modal");
  mainDiv.style.display = "flex";
});

//Adds style to element function
function addStyle(ele, styleObj) {
  for (let value in styleObj) {
    ele.style[value] = styleObj[value];
  }
}
