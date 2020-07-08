import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorsService } from 'src/app/core/validation/errors.service';
import { IngredientService } from 'src/app/private/ingredient/services/ingredient-http.service';
import { PizzaService } from '../../services/pizza-http.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'ps-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css'],
  providers: [IngredientService, PizzaService]
})
export class PizzaAddComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  model = {
    name: '',
    ingredients: [],
    img: null
  };
  errors = {
    name: {
      required: 'El nombre de la pizza es requerido'
    },
    ingredients: {
      required: 'Debe seleccionar al menos un ingrediente'
    },
    img: {
      required: 'Debe adjuntar una imagen'
    }
  };

  ingredients = [];
  imageName = '';
  imageUrl = '';
  sanitizedImageUrl: SafeUrl;

  constructor(
    public errorsService: ErrorsService,
    private ingredientService: IngredientService,
    private pizzaService: PizzaService,
    private domSanitizer: DomSanitizer
  ) { }
  ngOnInit() {
    this.getIngredients();
  }
  ngOnDestroy() {
    this.clearImage();
  }
  private getIngredients() {
    this.ingredientService.getAll()
      .then((ingredients: any[]) => this.ingredients = ingredients)
  }
  private createPizza() {
    const formData = new FormData();
    formData.append('name', this.model.name);
    formData.append('img', this.model.img);
    for (const ingredient of this.model.ingredients) {
      formData.append('ingredients[]', ingredient);
    }
    return this.pizzaService.create(formData);
  }
  onFileChange(files: FileList) {
    this.model.img = files[0];
    this.setImage();
  }
  setImage() {
    this.clearImage();
    if (this.model.img) {
      this.imageName = this.model.img.name;
      this.imageUrl = URL.createObjectURL(this.model.img);
      this.sanitizedImageUrl = this.domSanitizer.bypassSecurityTrustUrl(this.imageUrl);
    }
  }
  clearImage() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
      this.imageUrl = '';
      this.imageName = '';
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.createPizza();
  }
}
