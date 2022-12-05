// directory of where to source files such as images, gifs etc stored in a variable
const mediaSourceDirectory = document.getElementById("media-source-directory").textContent;

// Main Site Function fetch and return images, gifs to display
var after = "";
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function fetchMedia() {
  color();

  if (document.getElementById("media-container")) {
    document.getElementById("media-container").remove();
  }
  var newIndex = [];
  var id = 0;
  var lastIndex=[];
    let parentdiv = document.createElement("div");
    let secondarydiv = document.createElement("div");
    let loadMoreBtn = document.createElement("button");
    parentdiv.id = "media-container";
    secondarydiv.id = "media";
    loadMoreBtn.id = "load-more";
  fetch(`https://www.reddit.com/${mediaSourceDirectory}.json?after=${after}`)
    .then((response) => response.json())
    .then((body) => {
      after = body.data.after;
      for (let index = 0; index < body.data.children.length; index++) {
        if (body.data.children[index].data.post_hint === "image") {
          id=index;
          newIndex.push(id);
          console.log(index);          
        }
      }
      // console.log(newIndex);
      shuffle(newIndex);
      // console.log(newIndex);
      return body;
    }).then(body=>{
      newIndex.forEach((elem)=>{
              let div = document.createElement("div");
              let h4 = document.createElement("h4");
              let image = document.createElement("img");
              image.classList = "image-blur";
              image.loading = "lazy";
              image.title = `${mediaSourceDirectory}`;
              image.alt = `${mediaSourceDirectory}`;
              image.src = body.data.children[elem].data.url_overridden_by_dest;
              h4.textContent = body.data.children[elem].data.title;
              loadMoreBtn.innerHTML = "Load More";
              div.id = "media-inner";
              div.appendChild(h4);
              div.appendChild(image);
              secondarydiv.appendChild(div);
              parentdiv.appendChild(secondarydiv);
              parentdiv.appendChild(loadMoreBtn);
              document.body.appendChild(parentdiv);

               // Image Click Pay Request Function
               image.addEventListener("click", () => {
                if(image.classList.contains("image-blur")){
                  image.removeAttribute("class");
                  image.id = "blur-removed";
                }
                document.querySelector(".landing-page-visible").classList.add("filter-blur");
                document.querySelector(".image-click-container").classList.remove("hide");
              })

              // disable right Click function/ browser context menu to show popup box
              image.addEventListener("contextmenu", function(event) {
                event.preventDefault();
                image.removeAttribute("class");
                document.querySelector(".landing-page-visible").classList.add("filter-blur");
                document.querySelector(".image-click-container").classList.remove("hide");
              })

              // Disable Blur - On/Off
              const checkbox = document.querySelector("input[type='checkbox']");
              checkbox.addEventListener("click", () => {
                if(checkbox.checked) {
                  if(image.classList.contains("image-blur")){
                    image.classList.remove("image-blur");
                  }else if(!image.classList.contains("image-blur")){
                    image.classList.add("image-blur");
                  }if(image.id === "blur-removed"){
                    image.classList.remove("image-blur");
                  }
                }
                if(!checkbox.checked) {
                  image.classList.add("image-blur");
                }
              })
            })
            document.querySelector(".content-wrap").appendChild(parentdiv);
            const mediaBtn = document.getElementById("load-more");
            const checkbox = document.querySelector("input[type='checkbox']");
            mediaBtn.addEventListener("click", () => {
              fetchMedia();
              window.scroll({top: 0, behavior: "smooth"});
              checkbox.checked = false;
            })
    })
    .catch((e) => {
      console.log(e);
    });
}

const lowerMetaContent = document.querySelector(".lower-meta-content");
window.onload = function () {
    fetchMedia();

    setInterval(function() { 
        lowerMetaContent.classList.remove("hide");
    }, 2000);
};

// Payment Request Popup Elements on image click being dynamically created
const imageClickPopup = document.createElement("div");
const imageClickPopupInner = document.createElement("div");
imageClickPopup.className = "image-click-container hide";
imageClickPopupInner.className = "image-click";
imageClickPopupInner.innerHTML = `
    <h3> You Have Unlocked This Media!</h3>
    <p>Want to send a personal like?</p>
    <i class="fa-solid fa-heart"></i>
    <div class="pay-select">
        <button id="to-pay-btn">Yes</button>
        <button id="do-not-proceed">No</button>
    </div>
    <br>
    <div id="popup-lower-text">
      <p>Unlimited Content - Cheaper Than OnlyFans!!</p>
    </div>`;

    // Append Payment Request elements to container and body of website
imageClickPopup.appendChild(imageClickPopupInner);
document.body.appendChild(imageClickPopup);

// Create Blur Toggle button for pages
const toggleBlurWrap = document.createElement("div");
const sidebarAppend = document.querySelector(".showcase-wrapper");
toggleBlurWrap.className = "blur-toggle-wrap";
toggleBlurWrap.innerHTML = `
    <h4>Blur On - Off</h2>
    <input type="checkbox" id="switch" />
    <label id="blur-toggle" for="switch">Toggle</label>`;

// Append Blur toggle to sidebar div
sidebarAppend.appendChild(toggleBlurWrap);

// Share Button
const shareBtn = document.getElementById("share-button");
function shareList() {
    if (navigator.canShare) {
        navigator.share({
            title: document.title,
            text: document.querySelector("meta[name='description']").content,
            url: window.location.href,
        });
    } else {
        // Desktop Functionality
    }
};

shareBtn.addEventListener("click", () => {
    shareList();
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const arrowIcon = document.getElementById("arrow-right");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
    arrowIcon.classList.remove("hide");
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
    arrowIcon.classList.add("hide");
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);
}

// Cookie Settings
document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";

// Contact Send to avoid spam and hide email from email crawlers
const contactSend = document.getElementById("contact-submit");
const action = "https://formsubmit.co/oniquecampbell@yahoo.com";

contactSend.addEventListener("click", () => {
    document.getElementById("gamelounge-contact").action = action;
});


// Contact Email & Privacy Policy
const landingPageVisible = document.querySelector('.landing-page-visible');
const contactForm = document.querySelector('.gamelounge-contact-container');
const contactClick = document.querySelector(".showcase-contact");
const disclaimerClick = document.querySelector(".showcase-disclaimer");
const contactFormExit = document.querySelector('.form-exit');
const disclaimerForm = document.querySelector('.fair-use-disclaimer--container');
const disclaimerExit = document.querySelector('.disclaimer-exit');

contactClick.addEventListener("click", () => {
    landingPageVisible.classList.add("hide");
    contactForm.classList.toggle("hide");
});

contactFormExit.addEventListener("click", () => {
    landingPageVisible.classList.remove("hide");
    contactForm.classList.toggle("hide");
});

disclaimerClick.addEventListener("click", () => {
    landingPageVisible.classList.add("hide");
    disclaimerForm.classList.toggle("hide");
});

disclaimerExit.addEventListener("click", () => {
    landingPageVisible.classList.remove("hide");
    disclaimerForm.classList.toggle("hide");
});

const payBtn = document.querySelector("#to-pay-btn");
const cancelPay = document.querySelector("#do-not-proceed");

payBtn.addEventListener("click", () => {
  document.querySelector(".landing-page-visible").classList.remove("filter-blur");
  document.querySelector(".image-click-container").classList.add("hide");
  window.location.href = "https://www.feenixbloom.com/pay";
});

cancelPay.addEventListener("click", () => {
  document.querySelector(".landing-page-visible").classList.remove("filter-blur");
  document.querySelector(".image-click-container").classList.add("hide");
});

// Prevent Screenshots and Print Functions on page
/** TO DISABLE SCREEN CAPTURE **/
document.addEventListener('keyup', (e) => {
  if (e.key == 'PrintScreen') {
      navigator.clipboard.writeText('');
      alert('Privacy Breach: Screenshots disabled!');
  }
});

/** TO DISABLE PRINTS WHIT CTRL+P **/
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key == 'p') {
      alert('Privacy Breach: This section is not allowed to print or export to PDF');
      e.cancelBubble = true;
      e.preventDefault();
      e.stopImmediatePropagation();
  }
});