import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.imageTarget = document.getElementById("monkey-image");
    this.defaultImage = this.imageTarget.dataset.defaultImage;
    this.startImageSwitching();
  }

  startImageSwitching() {
    this.switchImage();
  }

  switchImage() {
    // Random interval (X) between 2 and 12 seconds
    const randomInterval = Math.floor(Math.random() * (3000 - 800 + 1)) + 2000;
    
    setTimeout(() => {
      const randomImage = monkeyImages[Math.floor(Math.random() * monkeyImages.length)];
      console.log(randomImage)

      this.imageTarget.src = randomImage;

      // Random duration (Y) between 300ms and 3 seconds for how long to show the new image
      const randomDuration = Math.floor(Math.random() * (3000 - 800 + 1)) + 300; // in ms

      setTimeout(() => {
        this.imageTarget.src = this.defaultImage;
        this.switchImage();
      }, randomDuration);

    }, randomInterval);
  }
}
