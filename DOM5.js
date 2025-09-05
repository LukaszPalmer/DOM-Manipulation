const createElement = (
    element,
    attributes = {},
    styles = {},
    text = "",
    placement = {},
    classes
) => {
    const createNewElement = document.createElement(element);

    Object.entries(attributes).forEach(([key, value]) => {
        createNewElement.setAttribute(key, value);
    });

    Object.assign(createNewElement.style, styles);

    if (text) {
        createNewElement.text = text;
    }

    if (placement.target) {
        const target = document.querySelector(placement.target);
        if (target) {
            switch (placement.method) {
                case "append":
                    target.appendChild(createNewElement);
                    break;
                case "prepend":
                    target.prepend(createNewElement);
                    break;
                case "before":
                    target.insertAdjacentElement(createNewElement);
                    break;
                case "after":
                    target.insertAdjacentElement(createNewElement);
                    break;
                default:
                    target.appendChild(createNewElement);
            }
        }
    }

    if (classes) {
        if (typeof classes === "string") {
            createNewElement.classList.add(...classes.split(" "));
        }
    }

    if (Array.isArray(classes)) {
        createNewElement.classList.add(...classes);
    }

    return createNewElement;
};

createElement(
    "input",
    { type: "text", placeholder: "Schreib was..." },
    {
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
    },
    "",
    { target: "body", method: "append" },
    "form-control"
);

const createStylesAndElement = (element, styles = {}, attributes = {}) => {
    const newElement = document.createElement(element);

    Object.assign(newElement.style, styles);

    Object.entries(attributes).forEach(([key, value]) => {
        newElement.setAttribute(key, value);
    });

    return newElement;
};

const createNewSection = createStylesAndElement(
    "section",
    { border: "1px solid red", height: "100px", width: "100px" },
    { id: "firstSection" }
);

document.querySelector("body").appendChild(createNewSection);

// TODO: now a better Version with more visability
const createElements = (tag, options = {}) => {
    const el = document.createElement(tag);

    if (options.attributes) {
        Object.entries(options.attributes).forEach(([key, value]) => {
            el.setAttribute(key, value);
        });
    }

    if (options.styles) {
        Object.assign(el.style, options.styles);
    }

    if (options.text) {
        el.textContent = options.text;
    }

    if (options.classes) {
        if (typeof options.classes === "string") {
            el.classList.add(...options.classes.split(" "));
        }
        if (Array.isArray(options.classes)) {
            el.classList.add(...options.classes);
        }
    }

    if (options.events) {
        Object.entries(options.events).forEach(([event, handler]) => {
            el.addEventListener(event, handler);
        });
    }

    if (options.placement?.target) {
        const target = document.querySelector(options.placement.target);
        if (target) {
            switch (options.placement.method) {
                case "append":
                    target.appendChild(el);
                    break;
                case "prepend":
                    target.prepend(el);
                    break;
                case "before":
                    target.insertAdjacentElement("beforebegin", el);
                    break;
                case "after":
                    target.insertAdjacentElement("afterend", el);
                    break;
                default:
                    target.appendChild(el);
            }
        }
    }

    return el;
};

export default createElements;

createElements("div", {
    text: "Hallo Welt",
    classes: "box red",
    styles: { color: "white", backgroundColor: "black", padding: "10px" },
    placement: { target: "body", method: "append" }
});
