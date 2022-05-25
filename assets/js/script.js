var date = $('#currentDay')

var today = moment().format("MMMM Do, YYYY, h:mm a");

date.append(today);

function doSomethingAboutClickOrSaveButton() {
  console.log(this);
  var key = $(this).parent().attr("id");
  console.log(key);
  var activity = $(this).siblings(".textarea").val().trim();
  console.log(activity);
  localStorage.setItem(key, activity);

};

$('.save').on('click', doSomethingAboutClickOrSaveButton);

function doSomethingAboutTimeBlockColors() {
  $(".row").each(function () {
    var rowHour = parseInt($(this).attr("id"));
    var momentHour = moment().hours();
    if (rowHour < momentHour) {
      $(this).children(".textarea").addClass("past");
    } else if (rowHour === momentHour) {
      $(this).children(".textarea").addClass("present");
    } else {
      $(this).children(".textarea").addClass("future");
    }
    $(this).children(".textarea").val(localStorage.getItem(rowHour));
    console.log(rowHour);
  })


}

doSomethingAboutTimeBlockColors();


