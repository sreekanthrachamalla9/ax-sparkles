import { Component } from '@angular/core';
import { JobCardComponent } from '../../components/job-card/job-card.component';

interface Job {
  jobId: string;
  title: string;
  company: string;
  location: string;
  status: string;
  timestamp: string;
  appliedOn: string;
}

@Component({
  selector: 'app-jobs-applied',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './jobs-applied.component.html',
  styleUrl: './jobs-applied.component.scss'
})
export class JobsAppliedComponent {
  jobs: Job[] = [
    {
      jobId: 'JOB001',
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
      status: 'Applied',
      timestamp: '2024-01-15 10:30 AM',
      appliedOn: '2024-01-15'
    },
    {
      jobId: 'JOB002',
      title: 'Backend Developer',
      company: 'Innovation Labs',
      location: 'Bangalore',
      status: 'Applied',
      timestamp: '2024-01-14 02:45 PM',
      appliedOn: '2024-01-14'
    },
    {
      jobId: 'JOB003',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Mumbai',
      status: 'Applied',
      timestamp: '2024-01-13 09:15 AM',
      appliedOn: '2024-01-13'
    },
    {
      jobId: 'JOB004',
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Delhi',
      status: 'Shortlisted',
      timestamp: '2024-01-12 04:20 PM',
      appliedOn: '2024-01-12'
    },
    {
      jobId: 'JOB005',
      title: 'DevOps Engineer',
      company: 'Cloud Solutions',
      location: 'Hyderabad',
      status: 'Interview',
      timestamp: '2024-01-11 11:00 AM',
      appliedOn: '2024-01-11'
    }
  ];

  constructor() {
  }

  // handle view job event
  viewJob(jobId: string) {
    console.log('View Job clicked for Job ID:', jobId);
    // here you can navigate or open a modal
    // this.router.navigate(['/jobs', jobId]);
  }
}