(function () {

   mom.createModule('alarm')
      .creator(timeCreator);

   function timeCreator(element) {
      var activated = false;
      var time;
      

      var Alarm = React.createClass({displayName: "Alarm",
            render: function () {
               return (
                  React.createElement("div", null, 
                     React.createElement("input", {type: "time", onChange: alarmTimeChanged}), 
                     React.createElement("input", {type: "checkbox", onChange: activateChanged}), 
                     React.createElement("audio", {src: "mp3/Coo-coo-clock-sound.mp3", autoplay: true, loop: true, type: "audio/mpeg", controls: true})
                  )
               );
            }
      });
      

      var time = React.render(React.createElement(Alarm, null) ,
         element
      );
      
      return {
         onTimeChanged: onTimeChanged
      }
      
      function onTimeChanged(event) {
         var currentTime = event.time;
         
         if(activated && time) {
            if(time.hours === currentTime.hours && time.minutes === currentTime.minutes) {
               console.log('ring ring');
            }
         }
      }
      
      function alarmTimeChanged(event) {
         var timeString = event.target.value;
         var timeArray = timeString.split(':')
         var hours = +timeArray[0];
         var minutes = + timeArray[1];
         
         time = {
            hours: hours,
            minutes: minutes
         }
      }
      
      function activateChanged(event) {
         activated = event.target.checked;
      }
   }
})();
