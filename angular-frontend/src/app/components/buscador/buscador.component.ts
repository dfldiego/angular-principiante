import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  platosBusqueda: any = [];   //arreglo de los resultados del buscador
  termino: string;  //termino de busqueda

  constructor(private activatedRoute: ActivatedRoute, private servicioDelivery: DeliveryService, private router: Router) { }

  //En vez de buscar por un id, busco a partir de un termino.
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {  // params -> es un termino
      this.termino = params['termino'];
      this.platosBusqueda = this.servicioDelivery.buscarPlatos(params['termino']);  //termino -> lo uso para buscar el plato.
    });
  }

  public verPlato(idx: string) {
    this.router.navigate(['/detallePlato', idx])
  }

}
