import {capitalize} from '@core/utils'

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root provided for DomListener')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                const name = this.name || ''
                console.log(name)
                throw new Error(`Method ${method} isn't implemented
                 in ${name || ''} Component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

// input -> onInput
const getMethodName = eventName => {
    return 'on' + capitalize(eventName)
}