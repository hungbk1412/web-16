const totalChar = 200;

// document.getElementById("textInput").addEventListener("input", function() {
//     let remainChar = totalChar - document.getElementById("textInput").value.length;
//     document.getElementById("remain").innerText = "Còn " + remainChar + "/200 ký tự";
// })

$('#textInput').on("input", function() {
    let remainChar = totalChar - $("#textInput").val().length;
    $('#remain').text("Còn " + remainChar + "/200 ký tự");
});