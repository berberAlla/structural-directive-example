import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[notStructural]',
  exportAs: 'notStructural'
})
export class NotStructuralDirective implements OnChanges{

  constructor() { }

  @Input('notStructural') public val;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("not structural: ", changes);
  }
}
