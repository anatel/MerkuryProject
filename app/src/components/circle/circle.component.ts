import { Component, Input } from '@angular/core';
  
@Component({
    selector: 'circle',
    template: `
									<div class="circle" [style.width]="size" [style.height]="size" [style.color]="textColor" [style.background-color]="circleColor">
										<img *ngIf="imgPath" [src]="imgPath" [style.width]="size" [style.height]="size"/>
										<span *ngIf="!imgPath">{{content}}</span>
									</div>
								 `,
		styles: ['.circle, .circle img { border-radius: 100%; display: flex; align-items: center; justify-content: center; font-weight: bold;}']
})
export class CircleComponent {
	
	@Input() size: string;
	@Input() content: string;
	@Input() circleColor: string;
	@Input() textColor: string;
	@Input() imgPath: string;

}