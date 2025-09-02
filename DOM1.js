const manipulateTitle = () => {
    const h1 = document.getElementById("main-title");
    h1.style.color = "darkgreen";
    h1.style.background = "black";
    h1.innerHTML += "...";
    const main = document.querySelectorAll("section");
    main[0].getElementsByClassName("subtitle")[0].style.color = "red";
    main[0].getElementsByClassName("subtitle")[0].style.background = "black";
    main[0].getElementsByClassName("subtitle")[0].textContent = "Change to DOM";
    main[1].getElementsByClassName("subtitle")[0].style.color = "hotpink";
    main[1].getElementsByClassName("subtitle")[0].style.background = "black";
    main[1].getElementsByClassName("subtitle")[0].textContent = "Changed Again";
    const article = document.querySelector("main").querySelector("article");
    article.firstElementChild.style.color = "hotpink";
    article.firstElementChild.style.background = "black";
};
manipulateTitle();

const styleParagraphs = () => {
    const firstSection = document
        .querySelectorAll("section")[0]
        .getElementsByTagName("p");
    for (x of firstSection) {
        x.style.color = "gray";
        x.style.background = "lightgray";
        x.innerHTML += " <i>Changed to Italic</i>";
    }
    const article = document.querySelector("article").getElementsByTagName("p");
    article[0].style.color = "green";
    article[0].textContent = "kein zusätzlicher Text mehr...";
    const footer = document.querySelector("footer").firstElementChild;
    footer.style.color = "brown";
};
styleParagraphs();

const updateLinks = () => {
    const divContainerWithLinks = document.getElementsByClassName("link");
    for (attribute of divContainerWithLinks) {
        attribute.setAttribute("target", "_blank");
        attribute.setAttribute("href", "https://www.youtube.com");
        attribute.setAttribute("title", "Visit Youtube");
    }
};

updateLinks();

const traverseDOM = () => {
    //! nur in der BrowserConsole zu sehen 
    const section = document.querySelectorAll("section")[0].nextElementSibling;
    const previous = document.querySelectorAll("section")[1].previousElementSibling;

};

traverseDOM();

const onFirstLoadDOM = () => {
    manipulateTitle();
    styleParagraphs();
    updateLinks();
    traverseDOM();
};

onFirstLoadDOM();
