import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
})
export class ConfirmationModalComponent {
  @Input() title: string = 'Confirm action';
  @Input() message: string = 'Are you sure you want to perform this action?';
  @Input() result: boolean = false;
  @Output() confirmed = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal) {}

  onConfirm() {
    this.result = true;
    this.confirmed.emit(this.result);
    this.activeModal.close();
  }

  onClose() {
    this.result = false;
    this.confirmed.emit(this.result);
    this.activeModal.close();
  }
}
