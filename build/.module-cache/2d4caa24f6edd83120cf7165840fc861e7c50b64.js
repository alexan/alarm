(function() {
   
   mom.createModule('time')
      .creator(timeCreator);
   
   function timeCreator(element) {
      var Time = React.createClass({displayName: "Time", 
         getInitialState: currentTime,
         render: function() {
            return React.createElement("div", null,  this.state.hours, ":",  this.state.minutes, ":",  this.state.seconds);
         }           
      });

      var time = React.render(
         React.createElement(Time, null),
         element
      );
      
      
      setInterval(function(){
         time.setState(currentTime());
      },500);
      
      
      var audio = new Audio('mp3/Coo-coo-clock-sound.mp3');
      audio.play();
      audio.shop();
      
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