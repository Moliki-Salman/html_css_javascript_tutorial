function temperature () {
  //To convert celcius to farenheit
  //(CEL * 9/5) + 32
const c = document.getElementById("celsius").value;
const f = (c * 9/5) + 32
document.getElementById("fahrenheit").value = f
}

