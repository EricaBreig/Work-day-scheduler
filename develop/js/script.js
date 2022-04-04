//Today's date with assigned function to call on later
function getCurrentDate() {
  var currentDay = moment().format("dddd MMMM Do, YYYY");
  $("#currentDay").text("Today: " + currentDay);
}

// Planner container variable===============================================
var dayPlanner = [
  {
    id: "0",
    hour: "9:00",
    time: "09",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "1",
    hour: "10:00",
    time: "10",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "2",
    hour: "11:00",
    time: "11",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "3",
    hour: "12:00",
    time: "12",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "4",
    hour: "1:00",
    time: "13",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "5",
    hour: "2:00",
    time: "14",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "6",
    hour: "3:00",
    time: "15",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "7",
    hour: "4:00",
    time: "16",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "8",
    hour: "5:00",
    time: "17",
    meridiem: "pm",
    reminder: "",
  },
];
//FUNCTIONS=================================================================
// Saves the data to the local storage 
function saveReminders() {
  localStorage.setItem("dayPlanner", JSON.stringify(dayPlanner));
}

// sets any data in localStorage to the view
function displayReminders() {
  dayPlanner.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
  });
}
