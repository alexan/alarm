(function () {

   mom.createModule('alarm')
      .creator(timeCreator);

   function timeCreator(element) {

      var Alarm = React.createClass({displayName: "Alarm",
         getInitialState: function () {
            return {
               value: 'Hello!'
            };
         },
         handleChange: function (event) {
            this.setState({
               value: event.target.value
            });
         },
         render: function () {
            return ( React.createElement("input", {type: "time"}/) );
         }

      });

      var time = React.render( React.createElement(Alarm, null/) ,
         element
      );
   }
})();
