import { Routes } from '@angular/router';
import { CandidateRegisterComponent } from './pages/register/candidate-register/candidate-register.component';
import { CandidateLoginComponent } from './pages/login/candidate-login/candidate-login.component';
import { CandidateComponent } from './pages/dashboard/pages/candidate/candidate.component';
import { JobsAppliedComponent } from './pages/job-applied/pages/jobs-applied/jobs-applied.component';
import { ProfileMenuComponent } from './pages/profile/pages/profile-menu/profile-menu.component';
import { CandidateContactComponent } from './pages/contacts/pages/candidate-contact/candidate-contact.component';
import { PersonalDetailComponent } from './pages/personal-details/pages/personal-detail/personal-detail.component';
import { PasswordManagementComponent } from './pages/password/pages/password-management/password-management.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    {path: 'register', component: CandidateRegisterComponent},
    {path:'login', component: CandidateLoginComponent},
    {path: 'candidate', component: CandidateComponent},
    {path:'jobs', component: JobsAppliedComponent},
    {path:'contact', component: CandidateContactComponent},
    {path: 'profile', component: ProfileMenuComponent},
    {path:'personal-detail', component:PersonalDetailComponent},
    {path:'password', component: PasswordManagementComponent}
];
