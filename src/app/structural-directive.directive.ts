import {Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[structural]',
  exportAs: 'structural'
})
export class StructuralDirectiveDirective implements OnInit, OnChanges{

  constructor(private tr: TemplateRef<any>,
              private vcr: ViewContainerRef) { }

  @Input('structural') public anotherInput;
  @Input('structuralOf') xes;

  ngOnInit(): void {
    this.vcr.clear();
    for(let x of this.xes) {
      this.vcr.createEmbeddedView(this.tr, {
        $implicit: x
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("structural: ", changes);
  }

}
