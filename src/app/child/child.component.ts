import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() a:number=0;
  @Output() childEvent:EventEmitter<number>=new EventEmitter;
  send(){
     this.childEvent.emit(20);
  }

}
