import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorValidation } from '../../../model';

@Component({
  selector: 'atom-invalid-message',
  templateUrl: './invalid-message.component.html',
  styleUrls: ['./invalid-message.component.scss']
})
export class InvalidMessageComponent {
  @Input() control: FormControl = new FormControl();
  @Input() groupControl: FormGroup;
  @Input() errorTable: ErrorValidation[] = [];

  hasError(errorCode: string) {
    if (this.groupControl) {
      return Object.keys(this.groupControl.controls).some((key) => {
        return this.groupControl.get(key).hasError(errorCode);
      });
    }

    return this.control.hasError(errorCode);
  }

  displayed() {
    if (this.groupControl) {
      return this.groupControl.invalid && this.groupControl.touched;
    }

    return this.control.invalid && this.control.touched;
  }
}
