let aEllipse = 4,
  bEllipse = 5;

let locStorage = window.localStorage;

//Выводим площадь овала в документе
document.getElementById(`rightMiddleDiv`).innerText = `Oval area: ${(Math.PI * aEllipse* bEllipse).toPrecision(7)}`;

//Спрашиваем, удалять ли куки
let cookiesDeleted = confirm(`Delete cookies? ${document.cookie}`);

//Если выбрали да
//Удаляем куки, выставив время жизни -1
if (cookiesDeleted) {
  let cookies = document.cookie.split(/;/);
  for (let i = 0, len = cookies.length; i < len; i++) {
    let cookie = cookies[i].split(/=/);
    document.cookie = cookie[0] + "=;max-age=-1";
  }
}

let leftHigh = document.getElementById(`leftHigh`);
let rightLow = document.getElementById(`rightLowDiv`);

let textAlignFlag = getCookie(`isTextAlignPermitted`);

if(textAlignFlag === `true`) {
  leftHigh.style.textAlign = `left`;
  rightLow.style.textAlign = `left`;
  document.getElementById(`leftAlignIsPermittedCheckbox`).checked = `checked`;
}
else {
  leftHigh.style.textAlign = `center`;
  rightLow.style.textAlign = `center`;
}

let buf = document.getElementById(`leftHigh`).innerText;
document.getElementById(`leftHigh`).innerHTML = document.getElementById(`rightLowDiv`).innerText;
document.getElementById(`rightLowDiv`).innerText = buf;

let visible = false;
function showList() {
  if(visible) {
    document.getElementById(`leftLowText`).style.display = `none`;
    document.getElementById(`submitText`).style.display = `none`;
    document.getElementById(`deleteList`).style.display = `none`;
    document.getElementById(`showTextButton`).innerHTML = `Show text area`;
    visible = !visible;
  }
  else {
    document.getElementById(`leftLowText`).style.display = `flex`;
    document.getElementById(`submitText`).style.display = `flex`;
    document.getElementById(`deleteList`).style.display = `flex`;
    document.getElementById(`showTextButton`).innerHTML = `Hide text area`;
    visible = !visible;
  }
}

//let list_ = getCookie(`list`).split(`|`);
let resultList = ``;
let len = locStorage.length;
for (let i = 0; i < len; i++){
  let item = locStorage.getItem(i.toString());
  if (item !== ``) resultList += `<li>` + item + `</li>`;
}
document.getElementById(`leftLowList`).innerHTML = resultList;

function submitText() {
  let value = document.getElementById(`leftLowText`).value;
  let list = value.split(`\n`);
  //let result = ``;
  for (let i in list) {
    //result += list[i] + `|`;
    locStorage.setItem(i, list[i]);
  }
  //result = result.substring(0, result.length - 1);
  //document.cookie = `list=${result}`;
  alert(`List created`);
}

function deleteText() {
  locStorage.clear();
  alert(`List deleted`);
}

//Функция извлчения х из формы
function submitForm() {
  let x = factorize(document.getElementById("inputNumber").value);
  if (x !== '')
    alert(x);
    document.cookie = `primeFactors=${x};`;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function factorize(num) {
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  let x = num;
  let result = ``;
  while (x !== 1){
    for (let i in primes){
      if (x % primes[i] === 0) {
        result += primes[i] + `, `;
        x /= primes[i];
      }
    }
  }
  return result.substring(0, result.length - 2);
}



