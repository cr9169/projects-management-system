import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WritableSignal } from '@angular/core';

@Component({
  selector: 'app-form-textarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-textarea.component.html',
  styleUrl: './form-textarea.component.scss',
})
export class FormTextareaComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() value!: WritableSignal<string>;
}
