var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

function validateAge() {
  const ageValue = age.value;
  if (ageValue === '' || isNaN(parseFloat(ageValue)) || parseFloat(ageValue) <= 0) {
      alert("Harap masukkan usia yang valid (harus berupa angka lebih besar dari 0).");
      return false;
  }
  return true;
}

function validateHeight() {
  const heightValue = height.value;
  if (heightValue === '' || isNaN(parseFloat(heightValue)) || parseFloat(heightValue) <= 0) {
      alert("Harap masukkan tinggi badan yang valid (harus berupa angka lebih besar dari 0).");
      return false;
  }
  return true;
}

function validateWeight() {
  const weightValue = weight.value;
  if (weightValue === '' || isNaN(parseFloat(weightValue)) || parseFloat(weightValue) <= 0) {
      alert("Harap masukkan berat badan yang valid (harus berupa angka lebih besar dari 0).");
      return false;
  }
  return true;
}

function validateGender() {
  if (!male.checked && !female.checked) {
      alert("Harap pilih jenis kelamin.");
      return false;
  }
  return true;
}

function validateInput() {
  const isAgeValid = validateAge();
  const isHeightValid = validateHeight();
  const isWeightValid = validateWeight();
  const isGenderValid = validateGender();

  return isAgeValid && isHeightValid && isWeightValid && isGenderValid;
}

function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan Berat Badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal / Ideal';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan Berat Badan';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Kegemukan / Obesitas';
     }

resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Keterangan BMI kamu <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}
