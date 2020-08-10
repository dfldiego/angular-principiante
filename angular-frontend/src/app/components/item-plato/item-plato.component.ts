import { Component, OnInit, Input } from '@angular/core';
import { Plato } from 'src/app/entities/Plato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-plato',
  templateUrl: './item-plato.component.html',
  styleUrls: ['./item-plato.component.css']
})
export class ItemPlatoComponent implements OnInit {
  // @Input() -> especifica que el parametro puede venir desde un componente padre o fuera de nuestro componente
  @Input() platoAux: Plato;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public verPlato() {
    console.log(this.index);
    this.router.navigate(['/detallePlato/', this.index])
  }

}
