import { Component, Input } from '@angular/core';

@Component({
  selector: 'molecule-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() classMolecule: string = '';
  @Input() accordionTitle: string = '';
  @Input() accordionDescription: string = '';
}
