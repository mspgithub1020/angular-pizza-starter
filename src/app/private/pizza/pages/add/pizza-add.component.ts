import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorsService } from 'src/app/core/validation/errors.service';
import { IngredientService } from 'src/app/private/ingredient/services/ingredient-http.service';
import { PizzaService } from '../../services/pizza-http.service';


@Component({
    selector: 'ps-pizza-add',
    templateUrl: './pizza-add.component.html',
    styleUrls: ['./pizza-add.component.css'],
    providers: [IngredientService, PizzaService]
})
export class PizzaAddComponent implements OnInit {
    @ViewChild('form') form: FormGroup;
    model = {
        name: '',
        ingredients: []
    }
    errors = {
        name: {
            required: 'El nombre de la pizza es requerido'
        },
        ingredients: {
            required: 'Debe seleccionar al menos un ingrediente'
        },
    };

    ingredients = []
    constructor(
        public errorsService: ErrorsService,
        private ingredientService: IngredientService,
        private pizzaService: PizzaService
    ) { }

    ngOnInit() {
        this.getIngredients();
    }
    private getIngredients() {
        this.ingredientService.getAll()
            .then((ingredients: any[])=> this.ingredients = ingredients)
    }
    private createPizza(){
        this.pizzaService.create(this.model)
    }
    onSubmit() {
        if (this.form.invalid){
            return;
        }
        this.createPizza();
    }
}
