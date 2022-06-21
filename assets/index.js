document.getElementById("button").onclick = function() {myName()};

function myName() {
  const name = document.getElementById("myName").value;

  document.getElementById("demo").innerHTML = "Hello "+name+", welcome to the bootcamp";
}