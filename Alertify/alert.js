$(document).ready(function() {

   var wave = function() {
      Waves.attach("button", ['waves-float']);
      Waves.attach(".alertify-button", ['waves-float', 'waves-light']);
   }

   $('button').click(function() {
      alertify.prompt("What is your first name?", function(e, str) {
         if (e === false) {
            alertify.alert(":(")
            wave()
            alertify.error("Pls")
            wave()
         } if (str.length === 0 || /\d/.test(str) ) {
            alertify.alert("You didn't type a name =_=")
            wave()
         } else {
            var d = new Date()
            var h = d.getHours()
            var m = d.getMinutes()
            m = ('0' + m).slice(-2)
            str = str.toLowerCase()
            str = str.toLowerCase().charAt(0).toUpperCase() + str.slice(1)
            if (h < 12) {
               alertify.alert("Good morning " + str + "! It is " + h + ":" + m + " AM right now.")
               wave()
            } if (h >= 12 && h < 18) {
               h = h - 12
               alertify.alert("Good afternoon " + str + "! It is " + h + ":" + m + " PM right now.")
               wave()
            } else {
               h = h - 12
               alertify.alert("Good evening " + str + "! It is " + h + ":" + m + " PM right now.")
               wave()
            }
         }
      })

      wave()

   })

Waves.attach("button", ['waves-button', 'waves-float'])
Waves.attach(".alertify-button", ['waves-float', 'waves-light'])
Waves.init()


})
