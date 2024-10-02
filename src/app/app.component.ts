import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './custom-components/custom-button/custom-button.component';
import { CustomInputComponent } from './custom-components/custom-input/custom-input.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomButtonComponent, CustomInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'testes-componentes-bootstrap';
  fc = new FormControl('')

  ngOnInit() {
    this.fc.valueChanges.subscribe(value => console.log(value))
  }

  customButtomClicked(clicked: boolean) {
    console.log(clicked)
  }
}
