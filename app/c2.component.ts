import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2 implements OnInit {
    constructor() { }
    ngOnInit() { }
@Input()
j:number;
@Output()
sendData:EventEmitter<number>=new EventEmitter<number>();
me(){
    this.j=this.j+1;
    this.sendData.emit(this.j);
    
}
}