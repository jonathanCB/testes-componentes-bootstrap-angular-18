import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {
  type = input.required<string>();
  id = input<string>();
  placeholder = input<string>('');
  formControl = input.required<any>();
  topLabel = input<string>();
  leftLabel = input<string>();
  ariaLabel = input<string>();
  ariaDescription = input<string>();
}
