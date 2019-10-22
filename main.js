console.log("main.js connected");

document.querySelectorAll('.color').forEach((element) => {
   //console.log(element.style.backgroundColor);
   element.addEventListener("click", (event) => {
      // Clicked sound
      document.getElementById("audio").play(); // not sure a sound is the way to go but we'll see

      /* 
         Tutorial: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
         Note: there's a part of how to keep the user's selection if he had selected something previously, but I think it's fine for the selection to be gone if he clicks on something
      */

      // Create a textarea and give it the text to copy as its value
      let textarea = document.createElement("textarea");
      textarea.value = event.target.style.backgroundColor;

      // Make it readonly to be tamper-proof and invisible
      textarea.setAttribute('readonly', '');
      textarea.style.opacity = 0;

      // Add to document, copy and remove
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      console.log(`Copied color ${event.target.style.backgroundColor} to clipboard`);
   })
});