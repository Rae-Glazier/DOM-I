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

//selectors ~ task 1

const headerElement = document.getElementsByTagName('header');
const navBar = document.getElementsByTagName('nav');
const aLinks = document.getElementsByTagName('a');
const logoImg = document.getElementById('logo-img');
const ctAction = document.getElementsByClassName('cta');
const ctaText = document.getElementsByClassName('cta-text');
const ctaImg = document.getElementById('cta-img');
const mainContent = document.getElementsByClassName('main-content');
const topContent = document.getElementsByClassName('top-content');
const textContent = document.getElementsByClassName('text-content');
const middleImg = document.getElementById('middle-img');
const bottomContent = document.getElementsByClassName('bottom-content');
const contactSect = document.getElementsByClassName('contact')
const fotterSect = document.getElementsByTagName('footer');

//update HTML ~ task 2

// nav bar 
 const navServices = document.createElement('a');
 navServices.textContent = 'Services'; 
 const parentNav = document.querySelector('nav');
 parentNav.append(navServices);

 const navProduct = document.createElement('a');
 navProduct.textContent = 'Product'; 
 parentNav.append(navProduct);

 const navVision = document.createElement('a');
 navVision.textContent = 'Vision'; 
 parentNav.append(navVision);

 const navFeatures = document.createElement('a');
 navFeatures.textContent = 'Features'; 
 parentNav.append(navFeatures);

 const navAbout = document.createElement('a');
 navAbout.textContent = 'About';
 parentNav.append(navAbout);

 const navContact = document.createElement('a');
 navContact.textContent = 'Contact'; 
 parentNav.append(navContact);

