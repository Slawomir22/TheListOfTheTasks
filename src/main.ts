import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './todo-list/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)