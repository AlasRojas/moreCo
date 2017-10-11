function displayDate(){var e=new XMLHttpRequest;e.open("GET","http://demo6292426.mockable.io/blickTest"),e.send(null),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&alert(e.responseText)}}document.getElementById("contactBtn").addEventListener("click",displayDate);
//# sourceMappingURL=../maps/blickUtils.js.map
