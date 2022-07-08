import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtroArray.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe{



}
