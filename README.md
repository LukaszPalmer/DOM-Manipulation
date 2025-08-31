# 🌐 DOM-Manipulation

![GitHub repo size](https://img.shields.io/github/repo-size/LukaszPalmer/DOM-Manipulation?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/LukaszPalmer/DOM-Manipulation?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/LukaszPalmer/DOM-Manipulation?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/LukaszPalmer/DOM-Manipulation?style=flat-square)

---

## 🔹 Projektbeschreibung

Dieses Repository dient als Lern- und Übungsprojekt zur **DOM-Manipulation mit Vanilla JavaScript**.  
Ziel ist es, alle grundlegenden und fortgeschrittenen Techniken des DOMs zu beherrschen, um **interaktive, dynamische Webanwendungen** zu erstellen.  

---

## 🚀 Themenbereiche

### 1️⃣ DOM Zugriff (Auswahl von Elementen)
- `document.getElementById("id")`  
- `document.getElementsByClassName("class")`  
- `document.getElementsByTagName("div")`  
- `document.querySelector(".class oder #id oder [attr=value]")`  
- `document.querySelectorAll("selector")` → NodeList (forEach nutzbar)  

### 2️⃣ DOM Traversing (Navigieren im DOM)
- `parentNode / parentElement`  
- `children / childNodes`  
- `firstChild / lastChild`  
- `firstElementChild / lastElementChild`  
- `nextSibling / previousSibling`  
- `nextElementSibling / previousElementSibling`  
- `closest("selector")` → nächster passender Vorfahre  

### 3️⃣ Elemente erstellen & einfügen
- `document.createElement("div")`  
- `document.createTextNode("Text")`  
- `parent.appendChild(child)`  
- `parent.insertBefore(newNode, referenceNode)`  
- `element.append(...nodes)`  
- `element.prepend(node)`  
- `element.before(node), element.after(node)`  
- `element.replaceWith(newNode)`  
- `element.remove()`  

### 4️⃣ Attribute
- `element.getAttribute("attr")`  
- `element.setAttribute("attr", "value")`  
- `element.hasAttribute("attr")`  
- `element.removeAttribute("attr")`  
- Direktzugriff: `element.id`, `element.src`, `element.value`  

### 5️⃣ Klassen & Styles
- `element.classList.add("class")`  
- `element.classList.remove("class")`  
- `element.classList.toggle("class")`  
- `element.classList.contains("class")`  
- `element.style.property = "value"`  
- `getComputedStyle(element).property`  

### 6️⃣ Inhalte verändern
- `element.textContent = "Text"`  
- `element.innerText = "Text"`  
- `element.innerHTML = "<b>HTML</b>"`  
- `element.insertAdjacentHTML("beforebegin" | "afterbegin" | "beforeend" | "afterend", htmlString)`  

### 7️⃣ Events & Event Handling
- `element.addEventListener("click", handler)`  
- `element.removeEventListener("click", handler)`  
- Event-Objekt: `event.target`, `event.currentTarget`, `event.preventDefault()`, `event.stopPropagation()`  
- Event-Bubbling vs. Capturing  
- Delegation: Eventlistener am Parent + Prüfung von `event.target`  

### 8️⃣ Formularelemente
- `input.value`, `textarea.value`, `select.value`  
- `checkbox.checked`  
- `form.submit()`, `form.reset()`  

### 9️⃣ Fortgeschrittene Themen
- **Shadow DOM**: `element.attachShadow({ mode: "open" })`  
- **Mutation Observer**  
- **Intersection Observer**  
- **Clipboard API**  
- **Drag & Drop API**  
- **Fullscreen API**  

---

## 💡 Ziel des Projekts

Dieses Projekt zeigt:
- Praktische Anwendung aller DOM-Techniken  
- Erstellung dynamischer Web-Komponenten  
- Vorbereitung auf Fullstack- oder Frontend-Projekte  
- Sauberen, modernen und performanten JavaScript-Code  

---

## 📂 Projektstruktur

