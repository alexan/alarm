(function () {

   mom.createModule('alarm')
      .dependencies(['ringer'])
      .creator(timeCreator);

   function timeCreator(element) {
      var activated = false;
      var time;
      

      var Alarm = React.createClass({displayName: "Alarm",
            getInitialState: function() {
               return {
                  ringing: false
               };
            },
            render: function () {
               return (
                  React.createElement("div", null, 
                     React.createElement("input", {type: "time", onChange: alarmTimeChanged}), 
                     React.createElement("input", {type: "checkbox", onChange: activateChanged}), 
                     React.createElement("div", null, this.props.ringing ? "ringing" : "")
                  )
               );
            }
      });
      

      var alarm = React.render(React.createElement(Alarm, {text: "test"}) ,
         element
      );
            
      return {
         onTimeChanged: onTimeChanged
      }
      
      function onTimeChanged(event) {
         var currentTime = event.time;
         
         if(activated && time) {
            if(time.hours === currentTime.hours && time.minutes === currentTime.minutes) {
               ringer.play();
            } 
         } else {
            ringer.stop();
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
