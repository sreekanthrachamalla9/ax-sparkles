import { Routes } from '@angular/router';
import { CandidateRegisterComponent } from './pages/register/candidate-register/candidate-register.component';
import { CandidateLoginComponent } from './pages/login/candidate-login/candidate-login.component';
import { CandidateComponent } from './pages/dashboard/pages/candidate/candidate.component';
import { JobsAppliedComponent } from './pages/jobs-applied/jobs-applied.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    {path: 'register', component: CandidateRegisterComponent},
    {path:'login', component: CandidateLoginComponent},
    {path: 'candidate', component: CandidateComponent},
    {path: 'jobs', component: JobsAppliedComponent}
];
