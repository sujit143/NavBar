import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { EmpComponent } from './emp/emp.component';
import { ContactComponent } from './contact/contact.component';


const arr : Routes=[

{path:'',component:HomeComponent},
{path:'design',component:DesignComponent},
{path:'emp',component:EmpComponent},
{path:'con',component:ContactComponent}

];

export const routing=RouterModule.forRoot(arr);
