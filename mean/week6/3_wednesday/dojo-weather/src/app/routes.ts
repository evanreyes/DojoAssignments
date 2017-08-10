import { IndexComponent } from './components/index/index.component';
import { ChicagoComponent } from './components/chicago/chicago.component';
import { DcComponent } from './components/dc/dc.component';
import { DallasComponent } from './components/dallas/dallas.component';
import { BurbankComponent } from './components/burbank/burbank.component';
import { SanjoseComponent } from './components/sanjose/sanjose.component';
import { SeattleComponent } from './components/seattle/seattle.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: IndexComponent , pathMatch: 'full' },
    { path: 'seattle', component: SeattleComponent },
    { path: 'sanjose', component: SanjoseComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'dc', component: DcComponent },
    { path: 'chicago', component: ChicagoComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
