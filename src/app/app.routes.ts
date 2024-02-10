import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { Component } from '@angular/core';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [
    {path: 'post', redirectTo:'post/index', pathMatch:'full'},
    {path: 'post/index', component:IndexComponent},
    {path:'post/create', component:CreateComponent},
    {path:'post/edit/:postId', component:EditComponent},
    {path:'post/view/:postId', component:ViewComponent},
    {path:'', component:IndexComponent}
];
