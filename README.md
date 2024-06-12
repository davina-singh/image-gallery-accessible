# Assignment 2 (Wk 2) - Building an accessible image gallery
User stories:
- 🐿️ I want to browse a set of thumbnail images that load quickly
- 🐿️ I want to select a thumbnail and display a larger version of the image, with a description
- 🐿️ I expect accessible considerations like alternative text for images, and the ability to click next and previous buttons using the keyboard

Requirements:
- One page, with a set of thumbnail images, and a larger image
- Styled appropriately with CSS, and make use of media queries.
- Use client-side JavaScript to display the larger image when a thumbnail is selected
- Use client-side JavaScript to navigate between images using the keyboard (tab, enter)

Planning:
- 🎯 Plan out the UI and consider the elements you'll need to include to support the stories. Will thumbnails take up space at the top, side or bottom of the page? Will they float over the image?

Building:
- 🎯 Display the thumbnail images. Will you use a grid, or a list? Will you use CSS Grid or Flexbox?
- 🎯 Display the larger image. Will you use an overlay of some kind, or a section on the same page? How would it work on smaller screens?
- 🎯 Handle user interaction. Will you use event listeners on the thumbnails, or on the container? How will you know which thumbnail was selected?

Stretch Goals:
- 🏹 Handle user interaction with keyboard only (as if they have no mouse). You can use tab and enter/space like for all websites, but will you enable the use of the arrow keys as well?
- ✨ The document has a set of keyboard events, including keydown. This event receives an object with a .key property containing the key that was pressed. For example, ArrowRight and ArrowLeft.
- 🏹 Use your operating system's voiceover tools or a Screen Reader to have the computer announce the alt text of the selected image.
- ✨ Using role="status" like this will cause the voiceover to read out the content inside whenever it changes. Create a div, select it by id, and then try changing it's .textContext property with JS. <div id="announcer" role="status" aria-live="assertive" aria-atomic="true"></div>
