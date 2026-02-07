import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WritableSignal } from '@angular/core';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() value!: WritableSignal<string>;
}
