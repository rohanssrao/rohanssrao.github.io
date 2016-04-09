$(document).ready(function() {

   window.onload = function() {
      $('body').fadeIn(800);
   };

   $(".button-collapse").sideNav();

   var $window = $(window);

   $('#nav-mobile a').mouseout(function() {
      $(this).css({"color": "white"});
   });

   $('nav li').click(function() {
      var color = randomColor();
      $(this).css("background-color", color);
   });



   $('#mainbtn').click(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, {duration: 0});
      return false;
   });

   function zeller(month, day, year) {

      var date = new Date(year, month - 1, day);

      var d = date.getDay();

      switch (d) {
         case 0:
            dayname = "Sunday";
            break;
         case 1:
            dayname = "Monday";
            break;
         case 2:
            dayname = "Tuesday";
            break;
         case 3:
            dayname = "Wednesday";
            break;
         case 4:
            dayname = "Thursday";
            break;
         case 5:
            dayname = "Friday";
            break;
         case 6:
            dayname = "Saturday";
            break;
      }
   }

   $('#submit').click(function() {
      var name = $('#name').val();
      name = '"' + name + '"';
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      var s = d.getSeconds();
      m = ('0' + m).slice(-2);
      s = ('0' + s).slice(-2);
      if (h > 12) {
         h -= 12;
         time = h + ":" + m + ":" + s + " PM";
      } else {
         time = h + ":" + m + ":" + s + " AM";
      }

      if (name != '""') {
         $('html,body').animate({scrollTop: $(document).height()});
         $("<div class='card-panel light-blue accent-2 teal-text text-darken-4 textcard'>" + name + " - " + time + " </div>").appendTo('#main').hide().slideDown();
      }

   });


   $('#name').keyup(function() {
      if ($('#name').val()) {
         $('#submit').removeClass("disabled");
         $('#submit').addClass('waves-effect');
      } else {
         $('#submit').addClass("disabled");
         $('#submit').removeClass('waves-effect');
      }
   });


   $('#name').keyup(function(event) {
      if (event.keyCode == 13) {
         $('#submit').click();
         return false;
         }
   });



   $('#orangeripple').click(function() {

      function isInt(value) {
         var x;
         if (isNaN(value)) {
         return false;
         }
         x = parseFloat(value);
         return (x | 0) === x;
      }

      function isMonth(month) {
         if (month >=1 && month <=12 && isInt(month)) {
            return true;
         } else {
            return false;
         }
      }

      function isDay(day, month, year) {

               if (isInt(day) === false) {
                  return false;
               } else if (year % 4 !== 0 && month === 2 && day > 28) {
                  return false;
               } else if (year % 4 === 0 && month === 2 && day > 29) {
                  return false;
               } else if (day > 31 || day < 1) {
                  return false;
               } else {
                  return true;
               }


      }

      function isYear(year) {
         var d = new Date();
         if (year > d.getFullYear()) {
            return false;
         } else if (year <= 0) {
            return false;
         } else if (isInt(year) === false) {
            return false;
         } else {
            return true;
         }
      }


      var cont = confirm("I can tell you what day of the week you were born on!\nClick OK to continue or Cancel to quit.");
      if (cont) {
      var year = prompt("What year were you born in?");
      if (year) {
      while (isYear(year) === false) {
         year = prompt("That isn't a valid year :(\nWhat year were you born in?");
      }
      var month = prompt("What month were you born in?\n(1-12 only)");
      if (month) {
      while (isMonth(month) === false) {
         month = prompt("That isn't a valid month :(\nWhat month were you born in?\n(1-12 only)");
      }
      var day = prompt("What day of the month were you born on?\n(1-31 only)");
      if (day) {
      while (isDay(day, month, year) === false) {
         day = prompt("That isn't a valid day :(\nWhat day of the month were you born on?\n(1-31 only)");
      }}
      if (isDay(day, month, year) && isMonth(month) && isYear(year)) {
         zeller(month, day, year);
         alert("You were born on a " + dayname + "!");

         Snarl.addNotification({
            title: 'Thanks for clicking!',
            icon: '<img style="height: 38px; width: 38px; margin-top: -18px !important; margin-left: -18px !important;" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Thumbs_up_font_awesome.svg"></img>'
         });
      }}}}


   });


   $('#tealripple').click(function() {
      Snarl.addNotification({
         title: 'Hey!',
         //    text: 'Be sure to check out my other site over at https://goo.gl/OrCFsE! Click this notification to go there!',
         icon: '<svg style="height: 34px !important; width: 34px !important; margin-top: -18px !important; margin-left: -18px !important;" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1416 647q60 0 107 23 141 63 141 226v177q0 94-23 186l-85 339q-21 86-90.5 140t-157.5 54h-668q-106 0-181-75t-75-181v-401l-239-628q-17-45-17-91 0-106 75-181t181-75q80 0 145.5 45.5t93.5 119.5l17 44v-113q0-106 75-181t181-75 181 75 75 181v261q27-5 48-5 69 0 127.5 36.5t88.5 98.5zm-216-7q-33 0-60.5 18t-41.5 48l-74 163-71 155h55q50 0 90 31.5t50 80.5l154-338q10-20 10-46 0-46-33-79t-79-33zm221 135q-22 0-40.5 8t-29 16-23.5 29.5-17 30.5-17 37l-132 290q-10 20-10 46 0 46 33 79t79 33q33 0 60.5-18t41.5-48l160-352q9-18 9-38 0-50-32-81.5t-82-31.5zm-1165-359q0 22 8 46l248 650v69l102-111q43-46 106-46h198l106-233v-535q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5v640h-64l-200-526q-14-37-47-59.5t-73-22.5q-53 0-90.5 37.5t-37.5 90.5zm1052 1248q44 0 78.5-27t45.5-70l85-339q19-73 19-155v-91l-141 310q-17 38-53 61t-78 23q-53 0-93.5-34.5t-48.5-86.5q-44 57-114 57h-208v-32h208q46 0 81-33t35-79-31-79-77-33h-296q-49 0-82 36l-126 136v308q0 53 37.5 90.5t90.5 37.5h668z"/></svg>',
         //    action:  function() {
            //                window.open("https://goo.gl/OrCFsE", '_blank');
            //               }
      });
   });

});
