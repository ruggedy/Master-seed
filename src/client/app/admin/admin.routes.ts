import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminComponent, PostComponent } from './index';

export const AdminRoutes: Route[] = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{
				path: '',
				component: PostComponent
			}
		]
	}

]

export const routing: ModuleWithProviders = RouterModule.forChild(AdminRoutes);