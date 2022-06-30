#Input

## Usage
```html
<winput [(model)]="value.input" (modelChange)="test()" label="This is a label text for input" placeholder="This is a placeholder text for input"></winput>
```
```
import { InputModule } from 'src/app/modules';
@NgModule({
	imports: [
		InputModule
	]
})
```
## Arguments
```
label: string | Displayed text
model: string | Returns the input text
modelChange | Called when model changes
```
