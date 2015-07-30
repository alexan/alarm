(function () {

   mom.createModule('alarm')
      .dependencies(['ringer'])
      .creator(timeCreator);

   function timeCreator(element, ringer) {
      var activated = false;
      var time;
      

      var Alarm = React.createClass({
            getInitialState: function() {
               return {
                  ringing: false
               };
            },
            render: function () {
               return (
                  <div>
                     <input type="time" onChange={alarmTimeChanged} />
                     <input type="checkbox" onChange={activateChanged}/>
                     <div>{this.props.ringing ? "ringing" : ""}</div>
                  </div>
               );
            }
      });
      

      var alarm = React.render(<Alarm  text="test"/> ,
         element
      );
            
      return {
         onTimeChanged: onTimeChanged
      };
      
      function onTimeChanged(event) {
         var currentTime = event.time;
         
         if(activated && time) {
            if(time.hours === currentTime.hours && time.minutes === currentTime.minutes) {
               ringer.play();
               alarm.setProps({ ringing: true });
            } 
         } else {
            ringer.stop();
            alarm.setProps({ ringing: false });
         }
      }
      
      function alarmTimeChanged(event) {
         var timeString = event.target.value;
         var timeArray = timeString.split(':');
         var hours = +timeArray[0];
         var minutes = + timeArray[1];
         
         time = {
            hours: hours,
            minutes: minutes
         };
      }
      
      function activateChanged(event) {
         activated = event.target.checked;
      }
   }
})();
