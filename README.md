# 🌐 DOM-Manipulation – Mini-Portfolio

![GitHub repo size](https://img.shields.io/github/repo-size/LukaszPalmer/DOM-Manipulation?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/LukaszPalmer/DOM-Manipulation?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/LukaszPalmer/DOM-Manipulation?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/LukaszPalmer/DOM-Manipulation?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/LukaszPalmer/DOM-Manipulation?style=social)

---

## 🔹 Projektbeschreibung

Dieses Repository ist mein **Lern- und Übungsprojekt zur DOM-Manipulation mit Vanilla JavaScript**.  
Ziel ist es, **interaktive, dynamische Webanwendungen** zu erstellen und meine Fähigkeiten für **Fullstack- oder Frontend-Projekte** zu demonstrieren.

> 💡 Dieses Projekt zeigt, dass ich moderne Webentwicklung beherrsche – von DOM-Zugriff über Events bis zu fortgeschrittenen APIs.

---

## 🚀 Themenbereiche

### 🟢 DOM Zugriff (Elemente auswählen)
- `document.getElementById("id")`  
- `document.getElementsByClassName("class")`  
- `document.getElementsByTagName("div")`  
- `document.querySelector(".class oder #id oder [attr=value]")`  
- `document.querySelectorAll("selector")` → NodeList (forEach nutzbar)  

### 🟡 DOM Traversing (Navigieren)
- `parentNode / parentElement`  
- `children / childNodes`  
- `firstChild / lastChild`  
- `firstElementChild / lastElementChild`  
- `nextSibling / previousSibling`  
- `nextElementSibling / previousElementSibling`  
- `closest("selector")` → nächster passender Vorfahre  

### 🔵 Elemente erstellen & einfügen
- `document.createElement("div")`  
- `document.createTextNode("Text")`  
- `parent.appendChild(child)`  
- `parent.insertBefore(newNode, referenceNode)`  
- `element.append(...nodes)`  
- `element.prepend(node)`  
- `element.before(node), element.after(node)`  
- `element.replaceWith(newNode)`  
- `element.remove()`  

### 🟣 Attribute & Klassen
- `element.getAttribute("attr")`  
- `element.setAttribute("attr", "value")`  
- `element.hasAttribute("attr")`  
- `element.removeAttribute("attr")`  
- `element.id`, `element.src`, `element.value`  
- `element.classList.add/remove/toggle/contains`  
- `element.style.property = "value"`  

### 🟠 Inhalte verändern
- `element.textContent`, `element.innerText`, `element.innerHTML`  
- `element.insertAdjacentHTML("beforebegin" | "afterbegin" | "beforeend" | "afterend", htmlString)`  

### 🔴 Events & Event Handling
- `element.addEventListener("click", handler)`  
- `element.removeEventListener("click", handler)`  
- Event-Objekt: `event.target`, `event.currentTarget`, `event.preventDefault()`, `event.stopPropagation()`  
- Event-Bubbling vs. Capturing  
- Delegation: Eventlistener am Parent + Prüfung von `event.target`  

### 🟤 Formulare & Interaktionen
- `input.value`, `textarea.value`, `select.value`  
- `checkbox.checked`  
- `form.submit()`, `form.reset()`  

### ⚪ Fortgeschrittene APIs
- **Shadow DOM**: `element.attachShadow({ mode: "open" })`  
- **Mutation Observer**  
- **Intersection Observer**  
- **Clipboard API**  
- **Drag & Drop API**  
- **Fullscreen API**  

---



