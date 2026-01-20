import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { AuthenticatedLayoutComponent } from './features/shell/authenticated-layout/authenticated-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/dashboard/home/home.component';
import { StatementComponent } from './features/dashboard/statement/statement.component';
import { MonthlyContributionComponent } from './features/dashboard/monthly-contribution/monthly-contribution.component';
import { AdditionalContributionComponent } from './features/dashboard/additional-contribution/additional-contribution.component';
import { DocumentsComponent } from './features/dashboard/documents/documents.component';
import { TaxRegimeComponent } from './features/dashboard/tax-regime/tax-regime.component';
import { RequestBenefitComponent } from './features/dashboard/request-benefit/request-benefit.component';
import { RegressiveStatementComponent } from './features/dashboard/regressive-statement/regressive-statement.component';
import { InformationComponent } from './features/dashboard/information/information.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'app',
        component: AuthenticatedLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'statement',
                component: StatementComponent
            },
            {
                path: 'monthly-contribution',
                component: MonthlyContributionComponent
            },
            {
                path: 'additional-contribution',
                component: AdditionalContributionComponent
            },
            {
                path: 'documents',
                component: DocumentsComponent
            },
            {
                path: 'tax-regime',
                component: TaxRegimeComponent
            },
            {
                path: 'request-benefit',
                component: RequestBenefitComponent
            },
            {
                path: 'regressive-statement',
                component: RegressiveStatementComponent
            },
            {
                path: 'information',
                component: InformationComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
