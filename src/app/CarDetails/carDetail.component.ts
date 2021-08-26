import { Component } from "@angular/core";

@Component({
    selector: "app-carDetails",
    templateUrl: "./carDetails.component.html",
    styleUrls: ['./carDetails.component.css']
})
export class CarDetailsComponent{
    carNumber : string = "JT-327";
    carModel : string = "2005";
    carPrice : string= "15,50,000";
    newCarPrice = "35,50,999";
    getCarPrice()
    {
       
        return this.newCarPrice;
    }
}