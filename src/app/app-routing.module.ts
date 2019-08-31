import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './users/user/user.component';
import { authGaurd } from './auth-gaurd.service';
import { canDeactivateGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import { AppErrorComponent } from './app-error/app-error.component';
import { ServerResolver } from './servers/server/server-resolver.service';


const approutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [{ path: ':id/:name', component: UserComponent }] },
  //{ path: 'users/:id/:name', component: UserComponent },
  {
    path: 'servers',
    //canActivate: [authGaurd],
    canActivateChild: [authGaurd],

    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
      { path: ':id/Edit', component: EditServerComponent, canDeactivate: [canDeactivateGaurd] }]
  },
  //{ path: 'not-found', component: PagenotfoundComponent },
  { path: 'not-found', component: AppErrorComponent, data: {message:'Page not Found'} },
  { path: '**', redirectTo: 'not-found' },

  //{ path: 'servers/:id', component: ServerComponent },
  //{ path: 'servers/:id/Edit', component: EditServerComponent }


];
@NgModule({
  imports: [
    RouterModule.forRoot(approutes, { useHash:true })],
  exports: [RouterModule]
})
export class appRoutingModule {

}
