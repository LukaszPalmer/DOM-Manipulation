const createElement = (element, attributes = {}, styles = {}, text = "", placement = {}, classes) => {

    const createNewElement = document.createElement(element);

    Object.entries(attributes).forEach(([key, value]) => {
        createNewElement.setAttribute(key, value);
    });

    Object.assign(createNewElement.style, styles);

    if(text){
        createNewElement.text = text;
    }

    if(placement.target){
        const target = document.querySelector(placement.target);
        if(target){
            switch(placement.method){
                case 'append':
                    target.appendChild(createNewElement);
                    break;
                case 'prepend':
                    target.prepend(createNewElement);
                    break;
                case 'before':
                    target.insertAdjacentElement(createNewElement);
                    break;
                case 'after':
                    target.insertAdjacentElement(createNewElement);
                    break;
                default:
                    target.appendChild(createNewElement);
            }
        }
    }

    if(classes){
        if(typeof classes === 'string'){
            createNewElement.classList.add(...classes.split(' '));
        }
    }

    if(Array.isArray(classes)){
        createNewElement.classList.add(...classes)
    }

    return createNewElement;
}

createElement(
    'input',
    { type: 'text', placeholder: 'Schreib was...' },
    { padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', outline: 'none' },
    '',
    { target: 'body', method: 'append' },
    'form-control'
);



