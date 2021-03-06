class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        // this.$el.innerHTML()
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
        // return this.$el.innerHTML.trim()
    }

    text(text) {
        if (typeof text === 'string') {
            this.$el.textContent = text
            return this
        }
        if (this.$el.tagName.toLowerCase() === 'input') {
            return this.$el.value.trim()
        }
        return this.$el.textContent.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    append(node) {
        node = node instanceof Dom
            ? node.$el
            : node
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }

    get data() {
        return this.$el.dataset
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCords() {
        // получаем набор координат
        return this.$el.getBoundingClientRect()
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    find(selector) {
        return $(this.$el.querySelector(selector))
    }

    addClass(className) {
        this.$el.classList.add(className)
        return this
    }

    removeClass(className) {
        this.$el.classList.remove(className)
        return this
    }

    id(parse) {
        if (parse) {
            const parsed = this.id().split(':')
            return {
                row: +parsed[0],
                col: +parsed[1]
            }
        }
        return this.data.id
    }

    focus() {
        this.$el.focus()
        return this
    }

    css(styles = {}) {
        // eslint-disable-next-line

        // for (const key in styles) {
        //     if (styles.hasOwnProperty(key)) {
        //         console.log(styles[key])
        // this.$el.style[key] = styles[key]
        //     }
        // }

        Object
            .keys(styles)
            .forEach(key => {
                this.$el.style[key] = styles[key]
            })
    }
}


// $('div').html(<h1>Test</h1>).clear()

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}


// if (node instanceof Dom) {
//     node = node.$el
// }

