import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

// Example nonce value (you will generate this value dynamically on the server)
const nonceValue = (window as any).requestId || 'random-nonce';

bootstrapApplication(AppComponent, appConfig);

console.log("🚀 The nonce value is: " + nonceValue);
