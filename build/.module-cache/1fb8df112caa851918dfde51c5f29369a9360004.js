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
         })
      },5000);
      
      return currentTime;
      
      function currentTime() {
         var now =new Date();
         var hours = now.getHours();
         var minutes = now.getMinutes();
         var seconds = now.getSeconds();
         
         return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
         };
      }
   }
})();
