const testimonials = [{
    header:"TESTIMONALS",
    name:"Sarah Williams",
    job:"CEO, Tech Innovations Inc.",
    image: "SMITH.jpeg",
    testimonial:
    "RealtiFye has been an invaluable partner in our search for the perfect commercial space. Their team is incredibly knowledgeable and dedicated, making the entire process seamless and stress-free."
},
{   header:"TESTIMONALS",
    name:"David Obrain",
    job:"Director of Operations, Green Earth Solutions",
    image: "virat.jpeg",
    testimonial:"Working with RealtiFye was a game-changer for our home buying journey. Their attention to detail and commitment to finding exactly what we needed was unparalleled."
},
{    header:"TESTIMONALS",
    name:"Michael Brown",
    job:"Chief Financial Officer, Prime Investments Group",
    image: "images.png",
    testimonial:"RealtiFye provided exceptional service from start to finish. Their market expertise and proactive approach ensured that we found the best investment properties."
},
   { header:"TESTIMONALS",
    name:"John Smith",
    job:"Marketing Manager, Bright Future Enterprises",
    image: "hariprasad.jpeg",
    testimonial:"We were impressed by RealtyFye's professionalism and in-depthunderstanding of the real estate market.Their team made the entire process of selling our property effortless and efficient."
   },
];
let i = 0;
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click",() => {
    i = (j + i + 1 )%j;
    displayTestimonial();
})
prevBtn.addEventListener("click",() => {
    i = (j + i - 1 )%j;
    displayTestimonial();
})

let displayTestimonial = () =>{
    testimonialContainer.innerHTML = ` <h1>${testimonials[i].header}</h1>
    <h2>${testimonials[i].testimonial}</h2>
    <img src=${testimonials[i].image}>
    
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>`

};
window.onload = displayTestimonial;