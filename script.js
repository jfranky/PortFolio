// heading
const hi = document.querySelectorAll(".headanimate");
observer = new IntersectionObserver(entries => {
  console.log(entries);

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `heading-animate .5s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

hi.forEach(para => {
  observer.observe(para);
});

// education ul
const hithere = document.querySelectorAll(".eduanimate");
observer = new IntersectionObserver(entries => {
  console.log(entries);

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `education-animate .5s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

hithere.forEach(para => {
  observer.observe(para);
});

// experience ul
const hithere1 = document.querySelectorAll(".expanimate");
observer = new IntersectionObserver(entries => {
  console.log(entries);

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `experience-animate .5s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

hithere1.forEach(para => {
  observer.observe(para);
});

// service div
const hithere2 = document.querySelectorAll(".serviceanimate");
observer = new IntersectionObserver(entries => {
  console.log(entries);

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `service-animate .5s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

hithere2.forEach(para => {
  observer.observe(para);
});

// navbar slider
// let navSlide = () => {
//   let burger = document.querySelector(".burger");
//   let nav = document.querySelector(".nav-links");

//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//   });
// };
// navSlide();
// https://www.youtube.com/watch?v=gXkqy0b4M5g

function myFunction() {
  const element1 = document.getElementsByClassName("nav-links");
  element1.classList.toggle("burger-display");
}

// go to top button
// When the user scrolls down 700px from the top of the document, show the button

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
