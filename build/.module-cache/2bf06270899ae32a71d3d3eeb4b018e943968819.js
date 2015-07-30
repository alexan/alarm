(function() {
   
   mom.createPart('ringer')
      .creator(playerCreator);
   
   function playerCreator() {
      var service = {
         play: play,
         stop: stop
      };
      var playing;
      var currentId = 0;
      
      return service;
      
      
      function play() {
         var audio = new Audio('mp3/Coo-coo-clock-sound.mp3');//
         var isLooping = true;
         var id = getNextId();
         
         audio.loop = isLooping;
         audio.play();
         
         playing = audio;
         
         return id;
      }
      
      function stop() {
         playing.pause();
         
         playing = undefined;
      }
      
      function getNextId() {
         return currentId++;
      }
   }   
})();
