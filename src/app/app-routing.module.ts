import { MergedComponentComponent } from './components/merged-component/merged-component.component';
import { OnlineComponentComponent } from './components/online-component/online-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailComponentComponent } from './components/retail-component/retail-component.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

const routes: Routes = [
  { path: 'main', component: MainComponentComponent, children: [
    { path: 'onlinestores', component: OnlineComponentComponent, data: { animation: 'isRight' } },
    { path: 'retailstores', component: RetailComponentComponent, data: { animation: 'isLeft' } },
    { path: 'mergedresults', component: MergedComponentComponent },
    ]
  },
  { path: '',
    redirectTo: '/main/onlinestores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
