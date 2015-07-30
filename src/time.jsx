(function() {
   
   mom.createModule('time')
      .dependencies(['timeDispatcher'])
      .creator(timeCreator);

   function timeCreator(element, currentTime) {
      var Time = React.createClass({ 
         getInitialState: currentTime,
         render: function() {
            return <div>{ formatTime(this.state.hours) }:{ formatTime(this.state.minutes) }:{ this.state.seconds }</div>;
         }           
      });

      var time = React.render(
         <Time />,
         element
      );

      return {
         onTimeChanged: onTimeChanged
      }


      function onTimeChanged(event) {
         time.setState(event.time);
      }


      function formatTime(i) {
         if (i<10) {
            i = "0" + i;
         }  // add zero in front of numbers < 10

         return i;
      }
   } 
})();
