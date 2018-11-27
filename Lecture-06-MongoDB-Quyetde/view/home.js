$.ajax({
    url: "/randomquestion", 
    type : "GET", 
    success : function(result) {
        // result đang ở dạng object {question : nội dung (ID, content, yes, no)}
        $('#question').text(result.question.content);
        $("#question").attr("result-question", result.question._id);
    },
    error : function(err) {
        console.log(err)
    }
})

$("#no, #yes").on('click',function(){
    $.ajax({
        url:"/answer",
        type:"post",
        result: {
            questionId: $("#question").attr("result-question"),
            vote:$(this).attr("id")
        },
        success: function(result) {
            window.location.href = "/question/"+result.questions._id; 
        },
        error: function(err) {
            console.log(err);
        }
    });
});

$("#result-vote").on("click", function() {
    $.ajax({
        success: function() {
            window.location = "/question/" + $("#question").attr("result-question");
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
