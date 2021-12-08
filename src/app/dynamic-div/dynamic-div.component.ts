import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit, AfterViewInit{
  
  items:Array<number>=[];
  newDiv:Array<number>=[];
  maxScrollHeight:any;

   index=1
   limit = 24

   @ViewChild('scrollframe', { static: false })scrollFrame!: ElementRef;
  
   @ViewChildren('item')
  itemElements!: QueryList<any>;
   scrollContainer: any;

   isNearBottom = true;
  constructor() { }

  ngOnInit(): void {
    this.items= this.dynamicDiv(this.index,this.limit)
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
   
  }

   onItemElementsChanged(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  dynamicDiv(index:number,limit:number){
    let data = []
    for(let i:number= index ;i<=limit;i++){
      data.push(i);
    }
    return data
  }

  alertFunction(index :number){
    let mod = index % 10;
    if(!mod){
        alert(`Button  in  ${index}th div  clicked `);
    }
  }


  private scrollToBottom(): void {
    window.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      // behavior: 'smooth',
    });
   this.limit+=24;  
    let num = this.dynamicDiv(this.items.length+1,this.limit);
    console.log(num);
    this.items =  [...this.items,...num]
  }

  private isUserNearBottom(): boolean {
    // const threshold = 150;
    const threshold = 0;
    const position = window.scrollY + window.innerHeight;
    const height = document.body.scrollHeight;
    return position > height - threshold;
  }

  @HostListener('window:scroll', ['$event'])
  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
    this.onItemElementsChanged()
  }
}
