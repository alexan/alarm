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
               console.log(event.target.value);
               this.setState({
                  value: event.target.value
               });
            },
            render: function () {
               var value = this.state.value;
               return React.createElement("input", {type: "time", value: value, onChange: this.handleChange});
            }
      });

      var time = React.render( React.createElement(Alarm, null/) ,
         element
      );
   }
})();
