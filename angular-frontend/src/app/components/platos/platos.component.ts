import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  constructor(private servicioDelivery: DeliveryService) { }

  ngOnInit(): void {
  }

}
