const proj1 = [
    "A full-stack web application built with ReactJS and ASP.NET",
    "The app has a dashboard that displays various KPIs and allows adding and removing records to project, customer and lead lists",
    "React | Bootstrap | C# |  ASP.NET | MongoDB "
  ];
  
const proj2 = [
    "A full-stack web application built with MERN Stack",
    "The app allows attaching tickets to ongoing projects and adding comments to the tickets as well as choosing tickets priority and user assignemnt. It has authentication and registration done JWT token",
    "React | Redux | Bootsrap | ExpressJS | NodeJS | MongoDB | JWT Authentication"
  ];
  
const proj3 = [
    "A full-stack web application built with MERN Stack",
    "It is an eCommerce app that has Stripe API integrated for payments, allows product filtering and a shopping cart",
    "React | Redux | Bootsrap | ExpressJS | NodeJS | MongoDB | Auth0 Authentication | Stripe"
  ];
  
const proj4 = [
    "A frontend app that is using a currency rate API",
    "The rates are updated daily",
    "JavaScript | HTML | CSS | API"
  ];

const pageLoaded = () => {
    let firstProj = document.querySelector("#circles span");
    buttonClick(firstProj);
}
  
const buttonClick = (target)=>{
    let image;
    let link;
    const value = target.innerHTML;
    target.classList.add("d-block")
    switch (value) {
        case "1":
            image = document.querySelector("#projectShown img");
            image.setAttribute("src","images/bizhub.PNG");
            displayProjectInfo(proj1);
            link = document.querySelector("#projectShown a");
            link.setAttribute("href","https://crmsolution.azurewebsites.net");
            break;
         case "2":
            image = document.querySelector("#projectShown img");
            image.setAttribute("src","images/bugTr.PNG");
            link = document.querySelector("#projectShown a");
            link.setAttribute("href","https://bgtrckr.azurewebsites.net");
           displayProjectInfo(proj2);
            break;
        case "3":
            image = document.querySelector("#projectShown img");
           image.setAttribute("src","images/mernShop.PNG");
            link = document.querySelector("#projectShown a");
            link.setAttribute("href","https://mernshop.azurewebsites.net");
          displayProjectInfo(proj3);
            break;
        case "4":
            image = document.querySelector("#projectShown img");
            image.setAttribute("src","images/currencyConv.PNG");
            link = document.querySelector("#projectShown a");
            link.setAttribute("href","https://stansh.github.io/Currency_Converter");
           displayProjectInfo(proj4);
            break;
   
        default:
            image = document.querySelector("#projectShown img");
            image.setAttribute("src","images/bizhub.PNG");
            link = document.querySelector("#projectShown a");
            link.setAttribute("href","https://crmsolution.azurewebsites.net");
            displayProjectInfo(proj1);
    }    
 
}

const circles = document.querySelectorAll(".circle")
console.log(circles.length)

circles.forEach(c =>{
    c.addEventListener('mouseover',() => {
        c.style.backgroundColor = '#3086F2';
        buttonClick(c)
        c.style.outline = '2px dotted #3086F2'
        c.style.outlineOffset = '7px'
    })
    c.addEventListener('mouseout',() => {
        c.style.backgroundColor = '#F2AE30'
        c.style.outline = '0px'
    })

    
})

const displayProjectInfo = (projData)=>{
    const listItems = document.querySelectorAll("#projectInfo li");
    listItems.forEach((el,i) => {
        el.textContent=projData[i]
    })
   
}