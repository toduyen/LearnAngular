import { Component, ViewChild , OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ToggleDemoComponent } from './toggle-demo/toggle-demo.component';

@Component({
  selector: 'day3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isBoolearnCheck = true;
  // demo ve viewChild
  @ViewChildren(ToggleDemoComponent) taggeleComp!: QueryList<ToggleDemoComponent>;
  // demo ve viewChild -- nó lấy element của một cái button bất kỳ
  @ViewChild('btnbtnReferen',{static: true}) btnbtnReferen!: ElementRef<HTMLButtonElement>;
  // lấy element để tác động vào cái ô input
  @ViewChild('inputforcus',{static: true}) inputForcus!:ElementRef<HTMLInputElement>;

  // viewChildren được xử dụng để các hàm nó xử lý độc lập
  title = 'day3';
  checked = true;
  ngOnInit():void{
    setTimeout(():void => {
      this.inputForcus.nativeElement.focus();
      this.taggeleComp.changes.subscribe(console.log);
    }, 3000);
  }
  ngAfterOnInit():void{
    this.taggeleComp.changes.subscribe(console.log);
  }

}
