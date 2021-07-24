import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {isCell, matrix, nextSelector, shouldResize} from './table.functions'
import {TableSelection} from '@/components/table/TableSelection'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown', 'input'],
            ...options
        })
    }

    toHTML() {
        return createTable(25)
    }

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()
        // const $cell = this.$root.find('[data-id="0:0"]')
        this.selectCell(this.$root.find('[data-id="0:0"]'))
        // this.selection.select($cell)
        // this.$emit('table:select', $cell)

        this.$on('formula:input', text => {
            this.selection.current.text(text)
        })
        this.$on('formula:done', () => {
            this.selection.current.focus()
        })
    }

    selectCell($cell) {
        this.selection.select($cell)
        this.$emit('table:select', $cell)
    }

    onMousedown(e) {
        // проверка на если data атрибут resize  - data-resize=""
        if (shouldResize(e)) {
            resizeHandler(this.$root, e)
        } else if (isCell(e)) {
            const $target = $(e.target)
            if (e.shiftKey) {
                // group
                const target = $target.id(true)
                const current = this.selection.current.id(true)

                const $cells = matrix(target, current).map(id => {
                    return this.$root.find(`[data-id="${id}"]`)
                })
                this.selection.selectGroup($cells)
            } else {
                this.selection.select($target)
            }
        }
    }

    onKeydown(e) {
        const keys = [
            'Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'
        ]

        const {key} = e

        if (keys.includes(key) && !e.shiftKey) {
            e.preventDefault()
            const id = this.selection.current.id(true)
            // const $next = this.$root.find(nextSelector(key, id))
            this.selectCell(this.$root.find(nextSelector(key, id)))
            // this.selection.select($next)
            // this.$emit('table:select', $next)
        }
    }

    onInput(e) {
        this.$emit('table:input', $(e.target))
    }
}

// function nextSelector(key, {col, row}) {
//     const MIN_VALUE = 0
//     switch (key) {
//         case 'Enter':
//         case 'ArrowDown':
//             row++
//             break
//         case 'Tab':
//         case 'ArrowRight':
//             col++
//             break
//         case 'ArrowLeft':
//             col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
//             break
//         case 'ArrowUp':
//             row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
//             break
//     }
//     return `[data-id="${row}:${col}"]`
// }

// input: 0, 3
// output: [0, 1, 2, 3]