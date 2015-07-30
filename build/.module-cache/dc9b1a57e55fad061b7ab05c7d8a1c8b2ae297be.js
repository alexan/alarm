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
                     React.createElement("input", {type: "checkbox", onChange: activateChanged})
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
         var currentTime = event.currentTime;
         
         if(activated && time) {
            if(time.hour < currentTime.hour && time.minute < currentTime.minute) {
               console.log('ring ring');
            }
         }
      }
      
      function alarmTimeChanged(event) {
         var timeString = event.target.value;
         var timeArray = timeString.split(':')
         var hour = +timeArray[0];
         var minute = + timeArray[1];
         
         time = {
            hour: hour,
            minute: minute
         }
      }
      
      function activateChanged(event) {
         activated = event.target.checked;
      }
   }
})();
