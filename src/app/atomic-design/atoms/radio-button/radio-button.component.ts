import {Component, Input} from '@angular/core';
import {RadioOption} from "../../../utils/Interfaces/Interfaces";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'atom-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {

  @Input() radioOptions: RadioOption[];
  @Input() labelRadio: string = '';
  @Input() control: FormControl;
  @Input() name: string = '';

}
