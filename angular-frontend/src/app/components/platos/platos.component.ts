import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  platosArr: any[] = [];

  constructor(private servicioDelivery: DeliveryService, private router: Router) { }

  ngOnInit(): void {
    this.platosArr = this.servicioDelivery.getPlatos();
    //console.log(this.platosArr);
  }

  public verPlato(idx: string) {
    this.router.navigate(['/detallePlato/', idx])
  }

}
