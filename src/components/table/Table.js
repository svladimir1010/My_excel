import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {shouldResize} from '@/components/table/table.functions'

export class Table extends ExcelComponent {
    static className = 'excel__table'
    col

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable(25)
    }


    onMousedown(e) {
        // проверка на если data атрибут resize  - data-resize=""
        if (shouldResize(e)) {
            resizeHandler(this.$root, e)
        }
    }
}

