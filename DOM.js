// # DOM Zugriff (Auswahl von Elementen)
// - document.getElementById("id")
// - document.getElementsByClassName("class")
// - document.getElementsByTagName("div")
// - document.querySelector(".class oder #id oder [attr=value]")
// - document.querySelectorAll("selector") -> NodeList (forEach nutzbar)


















































// # DOM Traversing (Navigieren im DOM)
// - parentNode / parentElement
// - children / childNodes
// - firstChild / lastChild
// - firstElementChild / lastElementChild
// - nextSibling / previousSibling
// - nextElementSibling / previousElementSibling
// - closest("selector") -> nächster Vorfahre, der passt

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