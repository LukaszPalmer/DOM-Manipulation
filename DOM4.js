// # Inhalte verändern
// - element.textContent = "Text"
// - element.innerText = "Text" (berücksichtigt CSS)
// - element.innerHTML = "<b>HTML</b>" (Achtung XSS!)
// - element.insertAdjacentHTML("beforebegin" | "afterbegin" | "beforeend" | "afterend", htmlString)


// # Formularelemente
// - input.value, textarea.value, select.value
// - checkbox.checked
// - form.submit(), form.reset()



//! element.textContent = "Text"
//! wird sehr oft benutzt man ändern ständig Texte
//! HTML Tags werden nicht interpretioert sonden als Text angezeugt


//! element.innerText = "Text"
//! berücksichtigt CSS (z. B. display: none, visibility: hidden).
//! Nur benutzen wenn man sichtbaren Text anzeigen möchte


//! element.innerHTML = "<b>HTML</b>"
//! Hier werden HTML thags geparst und gerändert
//! man sollte hier aber aufpassen vor XSS (Cross site Scripting)


//! element.insertAdjacentHTML(position, htmlString)
//! Fügt ein HTML Dokument relativ zu einem Element ein
//! es gibt verschiedene Positionen : beforebegin|afterbegin|beforeend|afterend
//! Wird sehr oft benutzt


//! input.value, textarea.value, select.value
//! es ist der Zugriff auf den aktuellen Wert eines Eingabefeldes
//! wenn man Benutzereingaben verarbeiten will oder verschicken möchte ich es sehr wichtig
//! es wird immer genutzt man kommt nicht drum herum

//! checkbox.checked
//! gibt ein Boolean zurück jenachdem ob der User die checkboxk angeklikt hat oder nicht
//! Ideal und sehr gut bei zustimmungen wie AGB oder filter Funktionen.


//! form.submit(), form.reset()
//! submit() → Formular absenden
//! reset() → Alle Eingaben im Formular zurücksetzen. (ist jetzt nützlich wenn man es gespeichert hat)


//TODO: Create a Form with only JS
const createForm = () => {
    //TODO: Create all Elemets that are needed
    const body = document.querySelector('body');
    const main = document.createElement('main');
    const section = document.createElement('section');
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');

    //TODO: now I need to append my containers
    body.appendChild(main);
    main.insertAdjacentElement('afterbegin',section);
    section.appendChild(form);
    form.appendChild(label);
    form.appendChild(input);

    //TODO: Now lets give Attributes, classes and ID's to section and form
    section.classList.add('formContainer');
    const formAttributes = {
        id: 'user-form',
        action: '/submit',
        method: 'post'
    };
    Object.entries(formAttributes).forEach(([key,value]) => {
        form.setAttribute(key,value);
    });
    //TODO: Now lets add Text into label and create first inputfield type "password"
    label.setAttribute('for','password');
    label.textContent = 'Benutzername:';
    const inputAtributes = {
        type: 'text',
        id: 'username',
        name: 'username',
        required: ''
    };
    Object.entries(inputAtributes).forEach(([key,value]) => {
        input.setAttribute(key,value);
    });
    
    
}
createForm();
