(function() {
   
   mom.createModule('time')
      .creator(timeCreator);
   
   function timeCreator(element) {
      
      var Alarm = React.createClass({displayName: "Alarm", 
         render: function() {
            return (React.createElement("input", {type: "time"}));
         }
      });

      var time = React.render(
         React.createElement(Alarm, null),
         element
      );
   }
})();