(function () {

   mom.createModule('alarm')
      .creator(timeCreator);

   function timeCreator(element) {
      var activated = false;
      var time = time;
      

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
      
      function alarmTimeChanged(event) {
         var timeString = event.target.value;
         var timeArray = timeString.split(':')
         var hour = +timeArray[0];
         var minute = + timeArry[1];
         
         time = {
            hour: hour,
            minute: minute
         }
         console.log(time);
      }
      
      function activateChanged(event) {
         console.log(event.target.checked);
      }
   }
})();
