//define functions here

function getIt() {
  $('p').on('click', () => {
    alert("Hey!");
  });
};

function frameIt() {
  $('img').on('load', () => {
    $('img').addClass('tasty');
  });
};

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71) {
      alert("You pressed the G key. GG.");
    }
  });
};

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
};

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
