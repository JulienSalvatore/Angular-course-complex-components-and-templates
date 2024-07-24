import { Component } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

}
