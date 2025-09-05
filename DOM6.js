import createElements from "./DOM5.js";

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

//! Event / Event Handling
//! Nutzer klickt auf einem Button (click)
//! Nutzer tippt etwas in ein Eingabefeld (input event)
//! Nutzer lädt die Seite (load)
//! Ohne diese Events kann sie Seite nicht Nutzeraktionen reagieren
//! Ein eventListener aktzeptiert 2 Parameter (Eventname | function (deine Funktion die beschreibt was passieren soll))

//TODO: use your helperFunction and create a button add onclick a change to it's style
const firstButton = createElements("button", {
    attributes: { id: "btn" },
    styles: { padding: "10px", background: "black", color: "white", outline: 'none'},
    text: "click",
    placement: { target: "body", method: "append" },
    classes: "my-btn",
});


const changeStyles = () => {
    firstButton.style.background = 'green';
}
firstButton.addEventListener('click',changeStyles);

//! Event-Object
//! 