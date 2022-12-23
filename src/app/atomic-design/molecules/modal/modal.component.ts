import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() titre: string = 'Confirmation de votre action';
  @Input() body: string = 'Veuillez confirmer votre action.';
  @Input() nomAnnulation: string = 'Fermer';
  @Input() nomValidation: string = 'Valider';
  @Input() id = '';
  @Input() isOpen = false;
  @Input() ariaLabelledby: string = 'modal';
  @Input() classConfirmation: string = 'btn-primary';
  @Input() data: any;

  @Output() validationEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() annulationEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('modal') modal;
  @ViewChild('background') background;

  confirmer() {
    this.validationEvent.emit(this.data);
    this.close();
  }

  annuler() {
    this.annulationEvent.emit();
    this.close();
  }

  open() {
    this.modal.nativeElement.style.display = 'block';
    this.background.nativeElement.style.display = 'block';
    this.modal.nativeElement.className = 'modal fade show';
    this.isOpen = true;
  }

  close() {
    this.modal.nativeElement.className = 'modal fade hide';
    this.isOpen = false;
    setTimeout(() => {
      this.modal.nativeElement.style.display = 'none';
      this.background.nativeElement.style.display = 'none';
    }, 400);
  }
}
