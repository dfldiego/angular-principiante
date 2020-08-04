import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-detalle-plato',
  templateUrl: './detalle-plato.component.html',
  styleUrls: ['./detalle-plato.component.css']
})
export class DetallePlatoComponent implements OnInit {
  plato: any;
  constructor(private activatedRoute: ActivatedRoute, private servicioDelibery: DeliveryService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.plato = this.servicioDelibery.getPlatoXId(params['id']);
    })
  }
  ngOnInit(): void {
  }
}