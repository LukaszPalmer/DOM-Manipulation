// # DOM Zugriff (Auswahl von Elementen)
// - document.getElementById("id")
// - document.getElementsByClassName("class")
// - document.getElementsByTagName("div")
// - document.querySelector(".class oder #id oder [attr=value]")
// - document.querySelectorAll("selector") -> NodeList (forEach nutzbar)

//! Document.getElementByID('id') => sucht nach einem Element anhand seiner ID
//! Gibt direkt das element zurück
//! ID's sind was einzigartiges

const uniqueSection = document.getElementById("id");
uniqueSection.style.color = "red";


//! document.getElementsByClassName("class") => liefert ganze collektion dieser Classe aber kein echtes array.
//! Man kann trotzdem for oder for of verwenden
//! wir können es aber auch mit Indexen aufrufen
//! innerHTML erlaubt es und Tags miteinzufügen
//! textContent nur reinen text
//! Wir können auch eine normale Schleife benutzen

const text = document.getElementsByClassName("text");
for(let letters of text){
    letters.innerHTML = "<b>Changed Text</b>";
}
text[0].textContent = "Changed Again... With textContent";

for(let i = 0; i < text.length; i++){
    text[i].textContent = "NEU" + (i+ 1);
}


//! QuerySelectorAll(".class") gehört zu einer NodeList und nicht zu einer HTML Collection
//! Erlaubt uns forEach zu verwenden


const sectionElements = document.querySelectorAll(".sectionClass2");
sectionElements.forEach((section) => {
    section.innerHTML = '<i>Changed</i>'
})


//! getElementsByTagName("div") oder andere Elemente die es im HTML gibt
//! Gibt eine HTML collection wieder, denk dran was keine NodeList ist 

const sections = document.getElementsByTagName("section");
for(let i = 0; i < sections.length; i++){
    sections[i].style.background = "pink";
    sections[i].style.width = "100%";
}

/* 
🔥 DOM-Auswahl Methoden Übersicht 🔥

Methode                  | Rückgabe       | Alle Elemente möglich? | CSS-Selector möglich?
--------------------------|----------------|----------------------|---------------------
getElementById           | 1 Element      | ❌                   | ❌
getElementsByClassName   | HTMLCollection | ✅                   | ❌
getElementsByTagName     | HTMLCollection | ✅                   | ❌
querySelector            | 1 Element      | ❌                   | ✅
querySelectorAll         | NodeList       | ✅                   | ✅
*/


//! setAttribute("attribut", "wert")
//! bei allen HTML Tags die Attribute haben können wir dadurch attribute hinzufügen un ebenfalls löschen


const linkElement = document.getElementsByClassName("link");
for(let l of linkElement){
    l.setAttribute("href", "https://www.google.com");
    l.setAttribute("target", "_blank");              
    l.setAttribute("title", "Google öffnen");
    l.textContent = "Google";
}


//TODO: Mini-Task
const manipulateDOM = () => {
    const h1 = document.querySelector('h1');
    h1.style.color = "green";
    h1.innerHTML = "Hallo Willkommen";

    const p = document.getElementsByTagName('p');
    p[0].style.color = "yellow";
    p[1].style.color = "darkgreen";
    p[2].style.color = "red";

    p[0].textContent = "First-Change";
    p[1].innerHTML = "Second-Change";
    p[2].innerHTML = "Third-Change";

    const section = document.querySelectorAll('section');
    section.forEach((param) => {
        param.innerHTML += " <i>(Changed from JS)</i>"; 
        
    });
    const links = document.getElementsByClassName("link"); 
    for (let i = 0; i < links.length; i++) {
        links[i].setAttribute("href", "https://www.youtube.com"); 
        links[i].setAttribute("target", "_blank");
        links[i].innerHTML = "YouTube";
    }
}

manipulateDOM()


const secondFunctionManipulateDOM = () => {

    const styleH2 = document.querySelector('h2');
    if(styleH2.textContent.length === 0){
        styleH2.textContent = 'zweite Überschrift';
        styleH2.style.color = 'hotpink';
        styleH2.style.background = "black";
        styleH2.innerHTML += '<b>....</b>'
    }
}

secondFunctionManipulateDOM();

// # DOM Traversing (Navigieren im DOM)
// - parentNode / parentElement
// - children / childNodes
// - firstChild / lastChild
// - firstElementChild / lastElementChild
// - nextSibling / previousSibling
// - nextElementSibling / previousElementSibling
// - closest("selector") -> nächster Vorfahre, der passt



// ! parentNode : allgemeiner, gibt auch Nicht-Elemente zurück.
// ! parentElement : spezieller, nur wenn der Parent ein Element ist.

const paragraphParent = document.querySelector('p');
const ParentOfP = paragraphParent.parentNode;


// ! children : Gibt nur die Element-Kinder zurück 
// ! ChildrenNodes: gibt alles zurück wie leerzeichen, kommentare, tags, text zurück => nodeList

const childrenOfBody = document.querySelector('body');
childrenOfBody.childNodes;


// ! firstElementChild: ist praktisch weil es nur Elemente zurück gibt
// ! lastElementChild: ist praktisch weil es nur Elemente zurück gibt


// ! closest: nächsten passenden Vorfahren hochlaufen


/*parentElement → Eltern-Element holen

children → alle direkten Kinder-Elemente holen

firstElementChild / lastElementChild → erstes/letztes Kind-Element

nextElementSibling / previousElementSibling → Nachbarn im gleichen Level

closest("selector") → zum nächsten passenden Vorfahren hochlaufe*/

















































































































// # Elemente erstellen & einfügen
// - document.createElement("div")
// - document.createTextNode("Text")
// - parent.appendChild(child)
// - parent.insertBefore(newNode, referenceNode)
// - element.append(...nodes) (mehrere Nodes/Strings auf einmal)
// - element.prepend(node)
// - element.before(node), element.after(node)
// - element.replaceWith(newNode)
// - element.remove() (löscht sich selbst)

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

// # Inhalte verändern
// - element.textContent = "Text"
// - element.innerText = "Text" (berücksichtigt CSS)
// - element.innerHTML = "<b>HTML</b>" (Achtung XSS!)
// - element.insertAdjacentHTML("beforebegin" | "afterbegin" | "beforeend" | "afterend", htmlString)

// # Formularelemente
// - input.value, textarea.value, select.value
// - checkbox.checked
// - form.submit(), form.reset()

// # Events (Event Handling)
// - element.addEventListener("click", handler)
// - element.removeEventListener("click", handler)
// - Event-Objekt: event.target, event.currentTarget, event.preventDefault(), event.stopPropagation()
// - Event Bubbling (Standard) vs. Capturing (addEventListener("click", fn, true))
// - Delegation: Eventlistener am Parent + event.target prüfen

// # Event-Typen (häufige)
// - Maus: click, dblclick, mouseover, mouseout, contextmenu
// - Tastatur: keydown, keyup, keypress, input, change
// - Formulare: submit, reset, focus, blur
// - Window: load, resize, scroll, DOMContentLoaded

// # DOMContentLoaded vs Load
// - DOMContentLoaded: DOM fertig, Styles/Scripts geladen
// - load: alle Ressourcen (inkl. Bilder) geladen

// # Dimensions & Position
// - element.offsetWidth / offsetHeight (inkl. Border, Padding, Scrollbar)
// - element.clientWidth / clientHeight (inkl. Padding, ohne Border)
// - element.scrollWidth / scrollHeight (gesamter Scrollbereich)
// - element.getBoundingClientRect() -> {top, left, width, height}
// - window.scrollX / scrollY
// - element.scrollTo(x, y), element.scrollIntoView({behavior: "smooth"})

// # Dataset (Custom Data-Attribute)
// - <div data-user-id="123">
// - element.dataset.userId -> "123"
// - element.dataset.newKey = "value"

// # Node vs Element
// - Node = genereller Knoten (Text, Kommentar, Element)
// - Element = spezieller Node mit HTML-Tag
// - nodeType: 1 (Element), 3 (Text), 8 (Kommentar)

// # Clonen von Elementen
// - element.cloneNode(true) -> tiefes Klonen mit Kindern
// - element.cloneNode(false) -> nur das Element selbst

// # Shadow DOM (fortgeschritten)
// - element.attachShadow({ mode: "open" })
// - shadowRoot.innerHTML = "..."
// - Kapselt Styles und Struktur

// # Performance Tipps
// - DocumentFragment: const frag = document.createDocumentFragment()
//   -> mehrere Elemente hinzufügen, dann einmal ins DOM hängen
// - innerHTML bei vielen Änderungen schneller, aber unsauber
// - Reflow/Repain vermeiden durch Batching von Änderungen

// # Selektoren API (modern)
// - element.matches("selector") -> passt dieses Element?
// - element.closest("selector") -> nächster Vorfahre
// - element.querySelector / querySelectorAll auf beliebigem Element

// # Mutation Observer (DOM-Änderungen beobachten)
// - const observer = new MutationObserver(callback)
// - observer.observe(element, { childList: true, attributes: true, subtree: true })
// - observer.disconnect()

// # Intersection Observer (Sichtbarkeit beobachten)
// - Lazy Loading, Infinite Scroll
// - const observer = new IntersectionObserver(callback)
// - observer.observe(element)

// # Clipboard API
// - navigator.clipboard.writeText("Hello")
// - navigator.clipboard.readText().then(text => ...)

// # Drag & Drop API
// - element.draggable = true
// - dragstart, dragover, drop Events

// # Fullscreen API
// - element.requestFullscreen()
// - document.exitFullscreen()
// - document.fullscreenElement