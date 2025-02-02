
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'input-error-state-matcher-example',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.scss'],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})

export class EditarPostComponent {
  modeloFormControl = new FormControl('', [Validators.required]); // Modelo
  descripcionFormControl = new FormControl('', [Validators.required]); // Descripcion 
  yearFormControl = new FormControl('', [Validators.required]); // Año
  marcaFormControl = new FormControl('', [Validators.required]); // Ejemplo: 10 dígitos // Marca
  precioFormControl = new FormControl('', [Validators.required]); // Precio

  matcher = new MyErrorStateMatcher();
}
