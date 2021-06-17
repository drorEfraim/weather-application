import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  

  public weatherSearchForm: FormGroup;
  public weatherData: any;

  
  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ["", Validators.required],
      units: [""],
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location, formValues.units).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}