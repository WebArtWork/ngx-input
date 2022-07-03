import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'winput',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent{
	@Input() model;
	@Input() label;
	@Input() name = 'name';
	@Input() type = 'text';
	@Input() placeholder;
	@Input() disabled;
	@Output() modelChange = new EventEmitter()

	constructor() {}
}
