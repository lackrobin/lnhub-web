<script>
    import lottie from "lottie-web";
    import { onMount } from "svelte";
  
    export let lottiePath;
    export let isAutoplay = false;
    export let isLoop = false;
    let lottieLogo;
    
    let isLottiePlayed = false;
    let lottieID = lottiePath.split("/").pop().replace("\.","-")+"lottie"+Math.random().toString(16).substring(2, 8);
    onMount(() => {
      lottieLogo = lottie.loadAnimation({
        container: document.getElementById(lottieID),
        renderer: "svg",
        loop: isLoop,
        autoplay: isAutoplay,
        path: lottiePath,
      });
    });
  
    function playLottie(event) {
      if (!isLottiePlayed) {
        lottieLogo.play();
      } else {
        lottieLogo.stop();
      }
      isLottiePlayed = !isLottiePlayed;
    }
  </script>
  
  <div class="lottie-display cursor-pointer" on:click={playLottie} id={lottieID} />
  