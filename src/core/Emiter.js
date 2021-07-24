export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // dispatch, fire, trigger
    // Уведомляем слушателей если они есть
    // 'formula:done'
    // table.emit('table:select', {a: 1})
    emit(eventName, ...args) {
        if (!Array.isArray(this.listeners[eventName])) {
            return false
        }
        this.listeners[eventName].forEach(listener => {
            listener(...args)
        })
        return true
    }

    // on, listen
    // Подписываемся на уведомления
    // Или добавляем нового слушателя
    // formula.subscribe('table:select', ()=>{})
    subscribe(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || []
        this.listeners[eventName].push(fn)
        return () => {
            this.listeners[eventName] =
                this.listeners[eventName].filter(listener => {
                    return listener !== fn
                })
        }
    }
}

// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('good_morning',
//     data => console.log('sub:', data))
// emitter.emit('good_morning', 'now')
//
// setTimeout(() => {
//     emitter.emit('good_morning', '2 second')
//     unsub()
// }, 2000)
//
//
// setTimeout(() => {
//     emitter.emit('good_morning', '4 second')
// }, 4000)