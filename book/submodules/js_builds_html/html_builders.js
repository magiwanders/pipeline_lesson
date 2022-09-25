function _Object(type, attributes, children) {
    var element = document.createElement(type)

    for (key in attributes) {
      element.setAttribute(key, attributes[key])
    }

    if (children != undefined) {
        if (children[0] == undefined || typeof children === 'string') {
            element = append(element, children)
        } else {
            children.forEach(child => {
                element = append(element, child)
            })
        }
    }

    return element
}

function append(element, to_append) {
    if (typeof to_append === 'string') {
        element.appendChild(document.createTextNode(to_append))
    } else {
        element.appendChild(to_append)
    }
    return element
}

function _div(attributes, children) {return _Object('div', attributes, children)}
function _button(attributes, children) {return _Object('button', attributes, children)}
function _br(attributes, children) {return _Object('br', attributes, children)}
function _input(attributes, children) {return _Object('input', attributes, children)}
function _label(attributes, children) {return _Object('label', attributes, children)}
function _select(attributes, children) {return _Object('select', attributes, children)}
function _option(attributes, children) {return _Object('option', attributes, children)}
function _optgroup(attributes, children) {return _Object('optgroup', attributes, children)}
function _h1(attributes, children) {return _Object('h1', attributes, children)}
function _h2(attributes, children) {return _Object('h2', attributes, children)}
function _h3(attributes, children) {return _Object('h3', attributes, children)}
function _a(attributes, children) {return _Object('a', attributes, children)}
