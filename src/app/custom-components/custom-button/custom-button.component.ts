import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  label = input<string>();
  cssClass = input<string>();
  btnClicked = output<boolean>();

  btnClickedEmit(event: boolean) {
    this.btnClicked.emit(event);
  }
}
