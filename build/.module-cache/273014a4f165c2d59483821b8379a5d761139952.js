(function() {
   
   mom.createModule('time')
      .creator(timeCreator);
   
   function timeCreator(element) {
      var Time = React.createClass({displayName: "Time", 
         getInitialState: currentTime,
         render: function() {
            return React.createElement("div", null,  this.state.hours, ":",  this.state.minutes, ":",  this.state.seconds);
         },
         componentDidMount: function() {
            setInterval(function(){
               this.s(currentTime());
            },500);
         }         
      });

      var time = React.render(
         React.createElement(Time, null),
         element
      );
      
      function currentTime() {
         var today=new Date();
         var hours=formatTime(today.getHours());
         var minutes=formatTime(today.getMinutes());
         var seconds=formatTime(today.getSeconds());
         
         return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
         };
      }
      
      function formatTime(i) {
         if (i<10) {
            i = "0" + i;
         }  // add zero in front of numbers < 10
         
         return i;
      }
      
      
}


   
})();