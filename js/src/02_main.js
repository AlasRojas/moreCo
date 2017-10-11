document.getElementById("contactBtn").addEventListener("click", displayDate);

function displayDate () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://demo6292426.mockable.io/blickTest');
	xhr.send(null);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4){
			if (xhr.status === 200) {
				alert(xhr.responseText);
			};
		}
	}
}