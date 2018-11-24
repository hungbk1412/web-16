$.ajax({
    url: "http://localhost:6969/randomquestion", 
    type : "GET", 
    success : function(result) {
        // result đang ở dạng object {question : nội dung (ID, content, yes, no)}
        $('#question').text(result.question.content);
        questionID = result.question._id; // Đặt questionID trở thành 1 biến toàn cục
        $("#question").attr("result-question", result.question._id);
    },
    error : function(err) {
        console.log(err)
    }
})

$("#no, #yes").on("click", function() {
    $.ajax({
        url: "/answer",
        type : "POST", 
        data: {
            questionID: questionID,
            questionID: $("#question").attr("result-question"),
            vote : $(this).attr("id") // "yes" || "no"
        },
        success: function(result) {
            console.log(result);
            window.location.href = "/question/" + result.question._id;
        },
        error : function(err) {
        console.log(err)
        }
    })
})

$("#result-vote").on("click", function() {
    $.ajax({
        success: function() {
            window.location = "/question/" + questionID;
        },
        error : function(err) {
            console.log(err)
        }
    })
})

$("#else").on("click", function() {
    $.ajax({
        success: function() {
            window.location = "/";
        },
        error : function(err) {
            console.log(err)
        }
    })
})
