(function() {
   
   mom.createPart('ringer')
      .scope(mom.scope.lazySingleton)
      .creator(playerCreator);
   
   function playerCreator() {
      var service = {
         play: play,
         stop: stop,
         isPlaying: isPlaying
      };
      var playing;
      
      return service;
      
      
      function play() {
         if(!isPlaying()) {
            var audio = new Audio('mp3/Coo-coo-clock-sound.mp3');//
            var isLooping = true;

            audio.loop = isLooping;
            audio.play();

            playing = audio;
         }
      }
      
      function isPlaying() {
         return !!playing;
      }
      
      function stop() {
         if(isPlaying()) {
            playing.pause();
            playing = undefined;
         }
      }
   }   
})();
