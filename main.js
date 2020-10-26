document.getElementById("input").addEventListener("keyup", function(event) {
if (event.getModifierState("CapsLock")){
  document.getElementById('warning').style.display="block"}
  else {
    document.getElementById('warning').style.display="none"
  }
});
