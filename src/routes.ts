import { Routes } from '@angular/router';
import { SignupComponent } from './app/signup/signup.component';
import { LoginComponent } from './app/login/login.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';

export const appRoutes: Routes = [
    { path: 'signup' , component : SignupComponent},
    { path: 'login' , component : LoginComponent},
    { path: 'chat' , component : ChatroomComponent},
    { path: '' , redirectTo: '/login', pathMatch : 'full'}
];