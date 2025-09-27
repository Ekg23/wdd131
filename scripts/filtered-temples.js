const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-954942-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  }
];

createTempleCard()


homeNav = document.getElementById("home");
homeNav.addEventListener("click", () => {
    createTempleCard(); 
    document.getElementById("section-title").textContent = "Home";
});
oldNav = document.getElementById("old");
oldNav.addEventListener("click", () => {
   createTempleCard(temples.filter(temple => temple.templeName === "Manti Utah" || temple.templeName === "Washington D.C." || temple.templeName === "Mexico City Mexico"));
   document.getElementById("section-title").textContent = "Old Temples";
});
newNav = document.getElementById("new");
newNav.addEventListener("click", () => {
   createTempleCard(temples.filter(temple => temple.templeName === "Payson Utah" || temple.templeName === "Yigo Guam" || temple.templeName === "Lima Perú" || temple.templeName === "Madrid Spain" || temple.templeName === "Accra Ghana"));
   document.getElementById("section-title").textContent = "New Temples";
});
largeNav = document.getElementById("large");
largeNav.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 50000));
    document.getElementById("section-title").textContent = "Large Temples";
});
smallNav = document.getElementById("small");
smallNav.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 50000));
  document.getElementById("section-title").textContent = "Small Temples";
});



function createTempleCard(filteredTemples = temples) {
    document.querySelector(".gallery").innerHTML = ""; // Clear previous content
    
    filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("P")
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`
      dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`
      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl); 
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");
      
      
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".gallery").appendChild(card);
      

});
}
