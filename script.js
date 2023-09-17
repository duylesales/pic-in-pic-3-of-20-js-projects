const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Promt to select media stream, pass to video element, them play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("whoop,error here:", error);
  }
}

button.addEventListener("click", async () => {
  //Disable Buttom
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disabled = false;
});

//On Load
selectMediaStream();
