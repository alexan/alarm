(function () {

   mom.createPart('timeDispatcher')
      .scope(mom.scope.eagerSingleton)
      .dependencies(['event-bus'])
      .creator(timeCreator);

   function timeCreator(eventBus) {

      setInterval(function(){
         eventBus.publish({
            name: 'TimeChanged',
            time: currentTime()
         });
         },1000/60);
      
      return currentTime;
      
      function currentTime() {
         var now =new Date();
         var hours = now.getHours();
         var minutes = now.getMinutes();
         var seconds = now.getSeconds();
         var millis = now.getMilliseconds();
         
         return {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            millis: millis
         };
      }
   }
})();
