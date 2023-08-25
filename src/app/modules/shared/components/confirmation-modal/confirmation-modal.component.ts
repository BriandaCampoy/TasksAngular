import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Component for displaying a confirmation modal.
 */
@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent {
  /**
   * The title of the confirmation modal.
   */
  @Input() title: string = 'Confirm action';

  /**
   * The message displayed in the confirmation modal.
   */
  @Input() message: string = 'Are you sure you want to perform this action?';

  /**
   * The result of the confirmation action.
   */
  @Input() result: boolean = false;

  /**
   * Event emitter for confirming or cancelling the action.
   */
  @Output() confirmed = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal) {}

  /**
   * Handles the confirmation action.
   */
  onConfirm() {
    this.result = true;
    this.confirmed.emit(this.result);
    this.activeModal.close();
  }

  /**
   * Handles the cancellation action.
   */
  onClose() {
    this.result = false;
    this.confirmed.emit(this.result);
    this.activeModal.close();
  }
}
