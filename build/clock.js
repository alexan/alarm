(function() {
   
   mom.createModule('clock')
      .dependencies(['timeDispatcher'])
      .creator(timeCreator);

   function timeCreator(element, currentTime) {
      var clockStyle = {
         strocke: "black",
         fill: "#f8f8f8"
      };
      var hourStyle = {
         strokeWidth: "6px",
         stroke: "green"
      };
      var minuteStyle = {
         strokeWidth: "4px",
         stroke: "blue"
      };
      var secondStyle = {
         strokeWidth: "2px",
         stroke: "red"
      };
      var alarmStyle = {
         strokeWidth: "10px",
         stroke: "purple",
         cursor: "grabbing"
      };
      
      var Time = React.createClass({displayName: "Time", 
         getInitialState: function() {
            return { 
               isMouseDown: false,
               alarm: { x: 100, y:50 },
               time: currentTime()
            }   
         },
         onMouseDownCircle: function(e) {
            var x = e.pageX - this.getDOMNode().offsetLeft;
            var y = e.pageY  - this.getDOMNode().offsetTop;
            this.moveAlarm(x,y);
         },
         onMouseDown: function(e) {
            console.log("down");
            this.setState({
               isMouseDown: true
            });
            e.stopPropagation();
         },
         onMouseUp: function(e) {
            console.log("up");
            this.setState({
               isMouseDown: false
            });
         },
         onMouseMove: function(e) {
            if(this.state.isMouseDown) {
               var x = e.pageX - this.getDOMNode().offsetLeft;
               var y = e.pageY  - this.getDOMNode().offsetTop;
               this.moveAlarm(x,y);
            }
         },
         moveAlarm: function(x,y) {
            x = x - 100;
            y = 100 - y;
            var fac = (x < 0) ? 1 : -1; 
            var newAngle = fac * Math.acos(y/Math.sqrt(Math.pow(x,2) + Math.pow(y,2)));

            x = 0 * Math.cos(newAngle) - 45 * Math.sin(newAngle);
            y = 0 * Math.sin(newAngle) + 45 * Math.cos(newAngle);

            this.setState({
               alarm :{
                  x: x + 100,
                  y: 100 - y
               }
            });
         },
         render: function() {
            return (
            React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", width: "1000", height: "1000", onClick: this.onMouseDownCircle}, 
               React.createElement("g", null, 
                  React.createElement("circle", {id: "circle", style: clockStyle, cx: "100", cy: "100", r: "100"})
               ), 
               React.createElement("g", null, 

                       React.createElement("line", {x1: "100", y1: "100", 
                       x2: getX(30 * (this.state.time.hours + this.state.time.seconds / 60 / 60), 100, 0.55,  100), 
                       y2: getY(30 * (this.state.time.hours + this.state.time.seconds / 60 / 60), 100, 0.55,  100), 
                       style: hourStyle}), 
                 React.createElement("line", {x1: "100", y1: "100", 
                       x2: getX(6 * (this.state.time.minutes + this.state.time.seconds / 60), 100, 0.85,  100), 
                       y2: getY(6 * (this.state.time.minutes + this.state.time.seconds / 60), 100, 0.85,  100), 
                       style: minuteStyle}), 
                                                               React.createElement("line", {x1: "100", y1: "100", 
                       x2: this.state.alarm.x, 
                       y2: this.state.alarm.y, 
                       style: alarmStyle, 
                       onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, onMouseMove: this.onMouseMove, 
                       onMouseOut: this.onMouseUp}), 
                   React.createElement("line", {x1: "100", y1: "100", 
                       x2: getX(6 * (this.state.time.seconds + this.state.time.millis / 1000), 100, 0.95,  100), 
                       y2: getY(6 * (this.state.time.seconds + this.state.time.millis / 1000), 100, 0.95,  100), 
                       style: secondStyle})

               )
            )
            );
         }           
      });

      var time = React.render(
         React.createElement(Time, null),
         element
      );

      return {
         onTimeChanged: onTimeChanged
      };


      function onTimeChanged(event) {
         time.setState({time: event.time});
      }


      /*
      * Get a Point X value.
      * degress. Angle's degrees.
      * r. Circle's radio.
      * adjust. Percent of length.
      * x. Start of X point.
      */
      function getX(degrees, r, adjust, x) {
         var x = x || r, 
         adj = adjust || 1;
         return x + r * adj * Math.cos(getRad(degrees));
      }

      /*
      * Get a Point Y value.
      * degress. Angle's degrees.
      * r. Circle's radio.
      * adjust. Percent of length.
      * x. Start of Y point.
      */   
      function getY(degrees, r, adjust, y) {
         var y = y || r,
         adj = adjust || 1;
         return y + r * adj * Math.sin(getRad(degrees));
      }
      
      // Convert from degrees to radians.
      function getRad(degrees) {
         var adjust = Math.PI / 2;
         return (degrees * Math.PI / 180) - adjust;
      }
      
      function getDeg(rad) {
         var adjust = Math.PI / 2;
         return  rad * 180 / Math.PI;
      }
   } 
})();


