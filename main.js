
function addItem(){
	var ol = document.getElementById("list");
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ol.appendChild(li);
}

function removeItem(){
	var ol = document.getElementById("list");
  var candidate = document.getElementById("candidate");
  var item = document.getElementById(candidate.value);
  ol.removeChild(item);
}