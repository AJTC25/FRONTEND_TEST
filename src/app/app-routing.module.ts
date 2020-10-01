import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorShellComponent } from './containers/contenedor-shell/contenedor-shell.component';
import { InicioShellComponent } from './containers/inicio-shell/inicio-shell.component';

const routes: Routes =
  [
    {
      path: '',
      component: ContenedorShellComponent,
      children: [{
        path: '',
        component: InicioShellComponent
      }]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
