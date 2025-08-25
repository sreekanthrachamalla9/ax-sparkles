import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getMockJobs, Job } from '../job.util';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.scss'
})
export class CandidateComponent {
  jobs: Job[] = getMockJobs();

  onJobApply(job: Job) {
    console.log('✅ Applied for:', job.company);
  }
}
