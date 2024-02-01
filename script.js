const hamburger = document.querySelector(".toggle-button");

const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

// highlight the current page
const current = document.getElementsByClassName("current");
for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function(event) {
        var target = event.target;
       if (current.length > 0) {
           current[0].className = current[0].className.replace(" current", "");
        }
        target.classList.add("current");
        console.log("added current class 2")
    });
}

// if click the logo -> navbar resets
const logo = document.querySelector(".logo");
logo.addEventListener("click", function(event) {
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" current", "");
    }
    let pageLinks = document.querySelectorAll('.menu a');
    pageLinks[0].classList.add("current");

})
//navLink.forEach(n => n.addEventListener("click", highlightMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//function highlightMenu() {
  //  console.log("clicked");
//}

/* click on image to enlarge (gallery)
const galleryImgs = document.querySelectorAll("#gallery-img");
let imgZoomed = false;
for (const galleryImg of galleryImgs) {
    galleryImg.addEventListener("click", function handleClick(event) {
        event.stopPropagation();
        if (!imgZoomed) {
            galleryImg.classList.toggle("zoomed");
            imgZoomed = true;
        }
      })
      window.addEventListener("click", function handleClick(event) {
        event.stopPropagation();
        if (imgZoomed) {
            galleryImg.classList.toggle('zoomed');
            imgZoomed = false;
        }
    })
}
*/
/*for (const galleryImg of galleryImgs) {
    window.addEventListener("click", () => {
        if (imgZoomed) {
            galleryImg.classList.toggle('zoomed');
            imgZoomed = false;
        }
    })
}
*/
//document.getElementById("gallery-img").addEventListener("click", function handleClick(event) {
    //const tgt = event.target;
    //tgt.classList.toggle("zoomed");
  //})
//const filmImgs = document.getElementsByClassName('film');
//for (const filmImg of filmImgs){
    //filmImg.addEventListener("click", function handleClick(event) {
        //event.target.classList.add('fullscreen');
    //});
//}


/*let pageID = document.querySelector('section').id;*/
/* for (let link of pageLinks) {
    console.log(link.dataset.active);
}
for (let link of pageLinks) {
    if (link.dataset.active == pageID) {
        link.classList.add("current");
        console.log("pageID = " + pageID);
        console.log("link = " + link);
    }
}

const current = 0;
for (var i = 0; i < document.links.length; i++) {
    console.log(document.links[i].href);
    console.log(document.URL);
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'current';
*/