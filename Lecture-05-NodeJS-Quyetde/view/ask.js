const totalChar = 200;

$('#textInput').on("input", function() {
    let remainChar = totalChar - $("#textInput").val().length;
    $('#remain').text("Còn " + remainChar + "/200 ký tự");
});