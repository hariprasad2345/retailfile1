
const s = document.querySelector(".s"),
  s1 = document.querySelector(".s1"),
 
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;
  



const slideImage = () =>
     {
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  s1.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {

  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  
  
};

buttons.forEach((button) => button.addEventListener("click", updateClick));
s1.addEventListener("mouseover", () => clearInterval(intervalId));
