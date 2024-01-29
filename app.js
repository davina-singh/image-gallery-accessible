// get the thumbnail and display images by their id 
let thumbnailContainer = document.getElementById("thumbnail-container")
let displayContainer = document.getElementById("display-container")

// an array that contains the url and alt description for the images
let images = [
    {
        url: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "field"
    },
    {
        url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "mountains"
    },
    {
        url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "lavender"
    },
    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "stream"
    },
    {
        url: "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "sunset"
    }
]

// a function that creates the thumbnail of images by taking arrayOfImages as it parameter
const createThumbnails = (arrayOfImages) => { 
    // it then loops through the arrayOfImages using forEach (which takes takes a call back function - which is a function to be executed for each element in the array)
    // in this case image is a parameter of the arrow function that has been used instead of a callback function 
    arrayOfImages.forEach((image, index) => { // this line is the same as writing .forEach(function(image))
    // creates an image tag (in the html)
    let imageElement = document.createElement('img')
    // sets the image tag's src to be image.url
    imageElement.src = image.url
    // sets alt to be image.alt
    imageElement.alt = image.alt
    // add a class to the image element for styling 
    imageElement.classList.add('thumbnail-image')
    // set the tab index to make it focusable 
    imageElement.tabIndex = 0 
     // add a keyboard event listener for navigation
     imageElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            createDisplayImage(image);
        }
        else if (event.key === "ArrowRight" && index < arrayOfImages.length - 1) {
            event.preventDefault();
            createDisplayImage(arrayOfImages[index + 1]);
        }
        else if (event.key === "ArrowLeft" && index > 0) {
            event.preventDefault();
            createDisplayImage(arrayOfImages[index - 1]);
        }
    });
    // appends this imageElement to the thumbnail container (so that it appears on the page)
    thumbnailContainer.appendChild(imageElement)
    // add an event listener to the image that has been created so that when you click it, it appears as the display image
    imageElement.addEventListener("click", () => {
        createDisplayImage(image) // image represents each indidivual image object from the "array of images"
    } )
    })
}

// a function that cereates the display image when the thumbnail image is clicked 
function createDisplayImage (image) {
    // set the HTML content of the display image element (which is the div for this)
    displayContainer.innerHTML = ''
    // write a variable that creates an image tag
    let displayImage = document.createElement('img')
    // set the url of this image tag
    displayImage.src = image.url
    // set the alt of this image tag
    displayImage.alt = image.alt
    // add a class to the image element for css styling
    displayImage.classList.add("display-image")
    // add this image tag to the div of the display container 
    displayContainer.appendChild(displayImage)
}

// set the current index of the displayed image to zero
let currentIndex = 0;

// write a function to create the image gallery
const createGallery = () => {
    // create the thumbnails for the image gallery by calling the createThumbnail function and passing it the images
    createThumbnails(images);
    // add event listeners for next and previous buttons
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    // so that when you click them, they move to the next image (and not stop when they get to the end?)
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        // the function createDisplayImage is then called and passed the image with the current index from the image gallery
        createDisplayImage(images[currentIndex]);
    });
    // this is the same but for the previous button
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        createDisplayImage(images[currentIndex]);
    });
};

// Create the image gallery
createGallery();

// when the createThumbnails function is called, it is passed the images array as an argument (to run the function on)
createThumbnails(images)