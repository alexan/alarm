(function() {
   
   mom.createPart('player')
      .creator(playerCreator);
   
   function playerCreator() {
      var service = {
         play: play,
         stop: stop
      };
      var playing = {
         
      };
      var currentId = 0;
      
      return service;
      
      
      function play(sound, loop) {
         var audio = new Audio(sound);//'mp3/Coo-coo-clock-sound.mp3'
         var isLooping = loop || false;
         var id = getNextId();
         
         audio.loop = isLooping;
         audio.play();
         
         playing[id] = audio;
         
         return id;
      }
      
      function stop(id) {
         playing[id].pause();
         
         delete playing[id];
      }
      
      function getNextId() {
         return currentId++;
      }
   }   
})();
