function mouseHandler() {
  //let isTextAlignPermittedCheckbox = document.querySelector(`input[name="isLeftAlignPermitted"]`).checked;

  let g = document.getElementById(`leftAlignIsPermittedCheckbox`).checked;
  console.log(g);

    if(g === true) {
      document.cookie = "isTextAlignPermitted=true";
      leftHigh.addEventListener(`mouseover`, function (event) {
          leftHigh.style.textAlign = `left`;
          rightLow.style.textAlign = `left`;
      }, false);
    }
    else {
      document.cookie = "isTextAlignPermitted=false";
    }
}
