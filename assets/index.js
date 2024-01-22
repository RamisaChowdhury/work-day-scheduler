// Selector variables
var rowEl = $(".row");
var hourEl = $(".hour");
var textAreaEl = $("textarea");

// Display current day at the top of the planner
let currentTime = dayjs().format("HH");
var todaysDate = dayjs().format("dddd DD MMMM YYYY");
$("#currentDay").text(todaysDate);

// Color-code each timeblock based on past, present, and future
rowEl.each(function() {
    var hourBlock = this.dataset.index;
    if (hourBlock < currentTime) {
        $(this).addClass("past");
    } else if (hourBlock === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

// Save text to local storage when save button is clicked
$(".saveBtn").on("click", function() {
    var eventText = $(this).siblings(".textarea").val();
    var eventId = $(this).siblings(".textarea").attr("id");
    localStorage.setItem(eventId, eventText);
});

// Function to render saved events from local storage
function renderSavedEvents() {
    for (var i = 9; i < 18; i++){
        $("#"+[i]).val(localStorage.getItem([i]));
    }
};

// Onload render saved events from local storage
renderSavedEvents();