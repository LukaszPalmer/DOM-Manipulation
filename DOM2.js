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


//! in der Praxis : createElement() - appenChild()/append() - prepend() - before() - after() - remove()

const createNewParagraphAndAppend = () => {

    // first section
    const firstSection = document.getElementById("first-section");
    // last element of first section (<p>)
    const lastElementOfSection = firstSection.lastElementChild;
    // create new <p>
    const createParagraphElement = document.createElement('p');
    // add text into p 
    createParagraphElement.textContent = "New Text Added";
    // Now append p into Section
    firstSection.append(createParagraphElement);

}
createNewParagraphAndAppend();


const appendBeforeAndAfter = () => {
    // getting second secion
    const secondSection = document.getElementById("second-section");
    // create 1 new paragraph
    const createSecondParagraph = document.createElement("p");
    // Add textContext into it 
    createSecondParagraph.textContent = "second Paragraph";
    // first get h2 and then append after h2 
    const h2FromSecondSection = document.getElementById("second-section").firstElementChild;
    h2FromSecondSection.after(createSecondParagraph);
}
appendBeforeAndAfter();


const removeSomethingFromDOM = () => {
    // get footer
    const secondSection = document.querySelector("footer");
    // remove <p> from inside the footer
    const p = secondSection.firstElementChild;
    // remove p from footer
    secondSection.remove(p);
}
removeSomethingFromDOM();