import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BusStation} from "../components/map/model/bus-station";
import {FuelStation} from "../components/map/model/fuel-station";
import {ParkingSpot} from "../components/map/model/parking-spot";
import {CarRental} from "../components/map/model/car-rental";
import {PublicTransport} from "../components/map/model/public-transport";

@Injectable({
  providedIn: 'root'
})
export class BusAPIService {
  private bus_url = "https://spring-dians-map.herokuapp.com/api/busstation";
  private fuel_url = "https://spring-dians-map.herokuapp.com/api/fuelstations";
  private parkingspot_url = "https://spring-dians-map.herokuapp.com/api/parkingspace";
  private carrental_url = "https://spring-dians-map.herokuapp.com/api/carrental";
  private publictransport_url = "https://spring-dians-map.herokuapp.com/api/publictransport";

  constructor(private http: HttpClient) {
  }

  getAllPublicTransports(): Observable<PublicTransport[]> {
    return this.http.get<PublicTransport[]>(this.publictransport_url);
  }

  getAllCarRentals(): Observable<CarRental[]> {
    return this.http.get<CarRental[]>(this.carrental_url);
  }

  getAllBusStations(): Observable<BusStation[]> {
    return this.http.get<BusStation[]>(this.bus_url);
  }

  getAllFuelStations(): Observable<FuelStation[]> {
    return this.http.get<FuelStation[]>(this.fuel_url);
  }

  getAllParkingSpot(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(this.parkingspot_url);
  }
}
