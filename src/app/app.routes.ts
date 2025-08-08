import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { loginMatchGuard } from './guards/login-match.guard';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { autenticaGuard } from './guards/autentica.guard';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'nosotros', component: NosotrosComponent, canActivate: [autenticaGuard] },
    { path: 'productos', component: ProductosComponent, canActivate: [autenticaGuard] },
    { path: 'login', component: LoginComponent, canMatch: [loginMatchGuard] },
    { path: 'registro', component: RegistroComponent, canDeactivate: [registroUsuarioGuard] },


];
