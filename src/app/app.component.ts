import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Uncomment the following code to see the CSP in action


    // const script = this.renderer.createElement('script');

    // script.text = `
    //   alert("This script will be blocked by CSP!");
    // `;

    // this.renderer.appendChild(document.body, script);
  }
}
