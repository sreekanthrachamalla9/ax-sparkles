import { Component, Input, Output, EventEmitter } from '@angular/core';
import { formatDate, getStatusColor } from './job-applied.util';

@Component({
  selector: 'app-job-card',
  standalone: true,
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() job!: any;
  @Output() view = new EventEmitter<string>();

  getStatusColor = getStatusColor;
  formatDate = formatDate;

  onView() {
    this.view.emit(this.job.jobId);
  }
}
