import { Component, Input}	from '@angular/core';

//Didn't implement the dropdown functionality.
@Component({
	selector: 'circle-drop-down',
	template: `<circle [imgPath]="image" size="40px"></circle><div class="arrow">&#8227;</div>`,
	styles: [`	
						.arrow { 
							transform: rotate(90deg) scaleY(-0.9);
							margin-left: 5px;
						}
						
						:host {
							display: flex;
    					align-items: center;
							font-size: 18px;
						}
					`]
})
export class CircleDropDownComponent {
	
	@Input() image: string;

} 