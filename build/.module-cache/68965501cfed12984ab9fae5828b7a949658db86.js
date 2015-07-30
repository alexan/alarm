(function () {

   mom.createModule('alarm')
      .creator(timeCreator);

   function timeCreator(element) {

      var Alarm = React.createClass({displayName: "Alarm",
            getInitialState: function () {
               return {
                  value: undefined
               };
            },
            handleChange: function (event) {
               console.log(event.target.value);
               this.setState({
                  value: event.target.value
               });
            },
            render: function () {
               return (
                  React.createElement("div", null, 
                     React.createElement("input", {type: "time", onChange: this.handleChange}), 
                     React.createElement("input", {type: "checkbox"})
                  )
               );
            }
      });
      

      var time = React.render(React.createElement(Alarm, null) ,
         element
      );
   }
})();
