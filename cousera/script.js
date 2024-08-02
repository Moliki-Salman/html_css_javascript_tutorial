function temperature(){
  //To convert celcius to farenheit
  //(CEL * 9/5) + 32
const c = document.getElementById("celsius").value;
const f = (c * 9/5) + 32
document.getElementById("fahrenheit").value = f
}

function weight(){
  //To convert KGs to Pounds
  // KG * 2.2
  const kg = document.getElementById("kg").value;
  const pounds = kg * 2.2;
  document.getElementById("pounds").value = pounds;
}

function distance(){
  //To convert kilometera to miles
  // KM * 0.62137
  const kilo = document.getElementById("km").value;
  const miles = kilo * 0.62137;
  document.getElementById("miles").value = miles;
}