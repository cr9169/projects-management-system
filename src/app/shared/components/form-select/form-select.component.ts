import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WritableSignal } from '@angular/core';

interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.scss',
})
export class FormSelectComponent {
  @Input() label!: string;
  @Input() value!: WritableSignal<string>;
  @Input() options: SelectOption[] = [];
}
