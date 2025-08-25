import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Job {
  company: string;
  description: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() job!: Job;
  @Output() apply = new EventEmitter<Job>();

  onApply() {
    this.apply.emit(this.job);
  }
}
