const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation
const navTags = document.querySelectorAll('nav > a')

// console.log(navTags)

navTags[0].textContent = siteContent.nav["nav-item-1"]
navTags[1].textContent = siteContent.nav["nav-item-2"]
navTags[2].textContent = siteContent.nav["nav-item-3"]
navTags[3].textContent = siteContent.nav["nav-item-4"]
navTags[4].textContent = siteContent.nav["nav-item-5"]
navTags[5].textContent = siteContent.nav["nav-item-6"]

//added new a tag to end using .appendchild
const nav = document.querySelector('nav')
const newA = document.createElement('a')
newA.textContent = 'Blog'
newA.href = '#'
nav.appendChild(newA)


//added new a tag to beginning using .prepend
const secondNewA = document.createElement('a')
secondNewA.textContent = 'Home'
secondNewA.href = '#'
nav.prepend(secondNewA)

//change color of navigation text to green
nav.style.color = 'green'


//adding h1 text
const h1 = document.querySelector('h1')
// console.log(h1)
h1.textContent = siteContent.cta['h1']

//adding circle image
const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent.cta['img-src'])

//adding button text
const button = document.querySelector("button")
button.textContent = siteContent.cta['button']


//ADDING MAIN CONTENT

//features section
const featuresTitle = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
featuresTitle.textContent = siteContent["main-content"]["features-h4"]
const featuresPar = document.querySelector('.top-content .text-content:nth-of-type(1) p')
featuresPar.textContent = siteContent["main-content"]["features-content"]

//about section
const aboutTitle = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
aboutTitle.textContent = siteContent["main-content"]["about-h4"]
const aboutPar = document.querySelector('.top-content .text-content:nth-of-type(2) p')
aboutPar.textContent = siteContent["main-content"]["about-content"]


//adding middle image
const middlePic = document.querySelector("#middle-img")
middlePic.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//services section
const servicesTitle = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
servicesTitle.textContent = siteContent["main-content"]["services-h4"]
const servicesPar = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
servicesPar.textContent = siteContent["main-content"]["services-content"]

//product section
const productTitle  = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productTitle.textContent = siteContent["main-content"]["product-h4"]
const productPar = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productPar.textContent = siteContent["main-content"]["product-content"]

//vision section
const visionTitle = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionTitle.textContent = siteContent["main-content"]["vision-h4"]
const visionPar = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionPar.textContent = siteContent["main-content"]["vision-content"]

// const features = document.querySelector(".text-content")
// let featuresTitle = features.querySelector('h4')
// featuresTitle.textContent = "Features"
// let featuresContent = features.querySelector("p")
// featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// const about = document.querySelector(".text-content:nth-of-type(2)")
// const aboutTitle = about.querySelector("h4")
// aboutTitle.textContent = "About"
// const aboutContent = about.querySelector("p")
// aboutContent.textContent ="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



// const services = document.querySelector(".text-content:nth-of-type(3) h4")
// // const servicesTitle = services.querySelector("h4")
// servicesTitle.textContent = "Services"
// const servicesContent = services.querySelector("p")
// servicesContent.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


// const product = document.querySelector(".text-content:nth-of-type(3)")
// const productTitle = product.querySelector("h4")
// productTitle.textContent = "Product"


//contact section
const contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent.contact['contact-h4']

const contactInfo = document.querySelectorAll('.contact p')

contactInfo[0].textContent = siteContent.contact['address']
contactInfo[1].textContent = siteContent.contact['phone']
contactInfo[2].textContent = siteContent.contact['email']


//footersection

const footer = document.querySelector('footer')
footer.textContent = siteContent.footer.copyright