// # Attribute
// - element.getAttribute("attr")
// - element.setAttribute("attr", "value")
// - element.hasAttribute("attr")
// - element.removeAttribute("attr")
// - Direktzugriff: element.id, element.src, element.value


// # Klassen & Styles
// - element.classList.add("class")
// - element.classList.remove("class")
// - element.classList.toggle("class")
// - element.classList.contains("class")
// - element.style.property = "value" (inline Style)
// - getComputedStyle(element).property -> tatsächlicher Wert



//! element.getAttribute('attr') 
//! href, src, alt und alle anderen Attribute
//! damit kann ich prüfen was im HTML steht oder externe Links zu überprüfen


//! element.setAttribute("attr", "value")
//! hiermit füge oder ändere ich ein Attribut hinzu


//! element.hasAttribute("attr")
//! wird selten genutzt gibt ein boolean zurück


//! Direktzugriff (element.id, element.src, element.value)
//! Sehr praktisch wird sehr oft genutzt direkter Zugriff über die Eigenschaften


//! element.classList.add("class")
//! Sehr praktisch ! klassen hinzufügen um sie mit CSS anzusprechen wenn nötig
//! Lieber klasse als Inlinestyle !


//! element.classList.remove("class")
//! sehr oft genutzt ! wenn wir wieder die jeweilige klasse entfernen wollen
//! Ideal für das Toggle() oder dynamische layouts oder um etwas zurück zu setzen


//! element.classList.toggle("class")
//! sehr oft genutzt für interaktive webseiten wie Hamburgermenü, darkmode, dropdowns usw....
//! schaltet die Klasse aus/an


//! element.classList.contains("class")
//! wird sehr oft mit if genutzt um zu prüfen ob eiene klasse existiert


//! element.style.property = "value"
//! wird sehr schnell übersichtlich lieber mit CSS selektoren arbeiten um elemente zu stylen
// ! für kleine Dynamische änderungen ist es sehr gut 




//TODO Attribute auslesen : href des Links | alt text des Bildes
const accessAttribute = () => {
    const img = document.querySelector("img");
    const link = document.getElementById("my-link");

    img.getAttribute('alt');
    link.getAttribute('href');

    img.alt // geht auch so 
    link.href // geht auch so 
}
accessAttribute();


//TODO: Attribute ändern: href = link zu youtube | Bild = src && alt
const changeAttribute = () => {
    const img = document.querySelector('img');
    const link = document.getElementById('my-link');

    img.setAttribute('src', 'https://media.istockphoto.com/id/175397603/de/foto/frog.jpg?s=612x612&w=0&k=20&c=uwRo7jBzLmcQKQIk7FVEOXT31OxPLutNGgz39KQT1Os=');
    link.setAttribute('href','https://www.youtube.com');
    if(!link.hasAttribute('target','_blank')){
        link.setAttribute('target','_blank');
    }
    img.alt = "neuer Platzhalter";
}
changeAttribute();


//TODO: Attribute prüfen und löschen: prüfen ob img.alt === true | title attribut entfernen vom link
const checkAndDeleteAttribute = () => {
    const img = document.querySelector('img');
    const link = document.getElementById('my-link');

    const imgAttribute = img.hasAttribute('alt') ? true : false;
    link.hasAttribute('title') ? link.removeAttribute('title') : '';
    return imgAttribute;
}
checkAndDeleteAttribute();


//TODO: Direktzugriff: neuen Text ins Input field setzen | per direktzugriff die ID des h1 ändern
const directAccess = () => {
    const inputField = document.getElementById('my-input');
    inputField.value = "new Value";

    const h1  = document.getElementById('main-title');
    h1.id = 'first-maintitle'; 
}
directAccess();

//TODO: Klassen hinzufügen/Entfernen: klick = neue klasse "highlight" beim button "Aktion" | beim erneuten cklicken die Klasse entfernen
const createClassRemoveClass = () => {
    const aktionButton = document.getElementById('action-btn');
    const h1  = document.getElementById('first-maintitle');

    aktionButton.onclick = () => {
        h1.classList.toggle("highlight");
    }   
}
createClassRemoveClass();


//TODO: Toggle verwenden: beim klicken soll das Bild sichtbar und unsichtbar werden
const imgToggle = () => {
    const img = document.querySelector('img');
    const toggleButton = document.getElementById('toggle-btn');
    toggleButton.onclick = () => {
        img.classList.toggle('hidden');
    }
}
imgToggle();


