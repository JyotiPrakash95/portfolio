// fixed header
const fixHead = document.getElementById("head");

const fixHeader = () => {
  if (window.pageYOffset >= 100) {
    fixHead.classList.add("fixed-header");
  } else {
    fixHead.classList.remove("fixed-header");
  }
};
window.addEventListener("scroll", fixHeader);

// Mobile navigation
document.querySelector("#hamburger").addEventListener("click", function () {
  document.querySelector(".menu").classList.add("active-menu");
});
document.querySelector("#close-menu").addEventListener("click", function () {
  document.querySelector(".menu").classList.remove("active-menu");
});

// navigation fade in
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(fadeFun);
});
// document.addEventListener("DOMContentLoaded", () => {
//   const container1 = document.querySelector(".container1");
//   const childElements = container1.querySelectorAll("*");

//   childElements.forEach((element, index) => {
//     setTimeout(() => {
//       element.classList.add("fade-in");
//     }, (index + 1) * 1000);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const sectionItem = document.querySelectorAll("section");
  sectionItem.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("fade-in");
    }, index * 1000);
  });
});

function fadeFun(navItem, index) {
  setTimeout(() => {
    navItem.classList.add("fade-in");
  }, index * 500);
}

// tabs
var tabButtons = document.querySelectorAll(".tablinks");

for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    var tabName = this.dataset.tab;
    var tabContent = document.getElementById(tabName);
    var allTabContent = document.querySelectorAll(".tabcontent");
    var allTabButtons = document.querySelectorAll(".tablinks");

    for (var j = 0; j < allTabContent.length; j++) {
      allTabContent[j].style.display = "none";
    }

    for (var k = 0; k < allTabButtons.length; k++) {
      allTabButtons[k].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classList.add("active");
  });
}

document.querySelector(".tablinks").click();

// qrcode 
const qrCodeContainer = document.getElementById("qrcode");
// Content for the QR code
const qrCodeContent = "https://github.com/JyotiPrakash95"; 

const qrCode = new QRCode(qrCodeContainer, {
  text: qrCodeContent,
  width: 128,
  height: 128,
});

// pop-up
var modal = document.getElementById("myModal");
var btn = document.getElementById("pop-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// form submmisiom
const form = document.getElementById("myForm");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameVal = document.getElementById("name");
  const formDiv = document.getElementById("formDiv");
  formDiv.style.display = "none";
  const namePara = document.createElement("h3");
  namePara.classList.add("submitText")
  form.appendChild(namePara);
  namePara.textContent = `Thank you for connecting ${nameVal.value} !`;

})