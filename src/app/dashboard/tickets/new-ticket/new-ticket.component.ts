import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  viewChildren,
} from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  onSubmit(title: string, ticketText: string) {
    this.form()?.nativeElement.reset();
  }
}
