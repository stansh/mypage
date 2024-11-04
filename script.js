const proj1 = [
    "A full-stack web application built with ReactJS and ASP.NET",
    "The app has a dashboard that displays various KPIs and allows adding and removing records to project, customer and lead lists",
    "The app is hosted on Azure Web App service while using a Mongo database hosted on Mongo Atlas"
  ];
  
const proj2 = [
    "A full-stack web application built with MERN Stack (MongoDB, Express, React, Node)",
    "The app allows attaching tickets to ongoing projects and adding comments to the tickets as well as choosing tickets priority and user assignemnt.It has authentication and registration done JWT token",
    "The application is hosted on render.com while using a Mongo database hosted on Amongo Atlas"
  ];
  
const proj3 = [
    "A full-stack web application built with MERN Stack (MongoDB, Express, React, Node)",
    "It is an eCommerce app that has Stripe API integrated for payments, allows product filtering and a shopping cart",
    "The application is hosted on render.com while using a Mongo database hosted on Amongo Atlas"
  ];
  
const proj4 = [
    "A frontend app that is using a currency rate API",
    "The rates are updated daily",
    ""
  ];
  
const buttonClick = (target)=>{
    let image;
    let link;
    const value = target.innerHTML;
    target.classList.add("d-block")
    console.log(value);
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
            link.setAttribute("href","https://bug-tracker-gyil.onrender.com");
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

const displayProjectInfo = (projData)=>{
    const listItems = document.querySelectorAll("#projectInfo li");
    listItems.forEach((el,i) => {
        el.textContent=projData[i]
    })
   
}