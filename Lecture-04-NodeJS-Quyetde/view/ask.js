const totalChar = 200;

document.getElementById("textInput").addEventListener("input", function() {
    let remainChar = totalChar - document.getElementById("textInput").value.length;
    document.getElementById("remain").innerText = "Còn " + remainChar + "/200 ký tự";
})