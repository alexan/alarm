(function () {

   mom.createModule('alarm')
      .creator(timeCreator);

   function timeCreator(element) {

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
         console.log(event.target.value);

      }
      
      function activateChanged(event) {
         console.log(event.target.value);
      }
   }
})();
