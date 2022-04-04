
// Establishing the current day via moment
$(document).ready(function(){
  var currentDay = moment().format("dddd MMMM Do, YYYY");
  $("#currentDay").text("Today: " + currentDay);
    $(".saveBtn").on("click", function(){
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);

    }); 