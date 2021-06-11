import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {
        return createTable(100)
        // `
        //         <div class="row">
        //           <div class="row-info"></div>
        //           <div class="row-data">
        //         <div class="column">
        //           A
        //         </div>
        //         <div class="column">
        //           B
        //         </div>
        //         <div class="column">
        //           C
        //         </div>
        //         <div class="column">
        //           A
        //         </div>
        //         <div class="column">
        //           B
        //         </div>
        //         <div class="column">
        //           C
        //         </div>
        //         <div class="column">
        //           A
        //         </div>
        //         <div class="column">
        //           B
        //         </div>
        //         <div class="column">
        //           C
        //         </div>
        //         <div class="column">
        //           A
        //         </div>
        //         <div class="column">
        //           B
        //         </div>
        //         <div class="column">
        //           C
        //         </div>
        //         <div class="column">
        //           A
        //         </div>
        //         <div class="column">
        //           B
        //         </div>
        //         <div class="column">
        //           C
        //         </div>
        //         <div class="column">
        //           A
        //         </div>
        //         <div class="column">
        //           B
        //         </div>
        //         <div class="column">
        //           C
        //         </div>
        //         <div class="column">
        //           A
        //         </div>
        //         <div class="column">
        //           B
        //         </div>
        //         <div class="column">
        //           C
        //         </div>
        //         <div class="column">
        //           A
        //         </div>
        //         <div class="column">
        //           B
        //         </div>
        //         <div class="column">
        //           C
        //         </div>
        //       </div>
        //     </div>
        //     <div class="row">
        //       <div class="row-info">
        //         1
        //       </div>
        //       <div class="row-data">
        //         <div class="cell selected" contenteditable="">3A</div>
        //         <div class="cell" contenteditable="">4A</div>
        //         <div class="cell" contenteditable="">5A</div>
        //       </div>
        //     </div>
        //     <div class="row">
        //       <div class="row-info">
        //         1
        //       </div>
        //       <div class="row-data">
        //         <div class="cell">3</div>
        //         <div class="cell">4</div>
        //         <div class="cell">5</div>
        //       </div>
        //     </div>
        // `
    }
}