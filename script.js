
var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("h");

var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < workHours.length; i++) {

    var row = $("<div>");
    var timeBlock = $("<div>");
    var userText = $("<textarea>");
    var btn = $("<button>");

    timeBlock.text(workHours[i]);
    btn.text("SAVE");

    row.addClass("row");
    timeBlock.addClass("col-sm-1 time-block mt-4");
    userText.addClass("col-sm-10 description");
    btn.addClass("col-sm-1 saveBtn");

    if (timeBlock.text() < currentTime){
        userText.addClass("past");
    } else if (timeBlock.text() > currentTime) {
        userText.addClass("future");
    } else {
         userText.addClass("present");
    }
    
    
    $(".container").append(row);
    row.append(timeBlock);
    row.append(userText);
    row.append(btn);
    
}



$("#currentDay").append(currentDate);

$("button").on("click", function (event) {

//   var saved = localStorage.setItem("userText", JSON.stringify(userText.val));
//   I have watched every video in my archives on bootcampspot.com and I cannot 
//   figure out how to save value of userText in this situation. 
//   I have tried JSON. I have tried innerHTML. I have tried Val. I have spent
//   eight hours making zero progress on this. I am on a time crunch. I 
//   cannot spend any more time for I have many other things NEW to study up on.
//   console.log(saved.val);
  
});

