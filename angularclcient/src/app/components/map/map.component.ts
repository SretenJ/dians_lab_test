import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [41.99646, 21.43141]; //

  private initMap(): void {
    // var corner1 = L.latLng(42.352138,22.301185)
    //var corner2 = L.latLng(40.803090,20.470589)
//    // @ts-ignore
    //  var oms = new L.TileLayer.BoundaryCanvas()
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 10,

    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // create 5 random jitteries and add them to map
    /*   const jittery = Array(5).fill(this.centroid).map(
         x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
       ).map(
         x => L.marker(x as L.LatLngExpression)
       ).forEach(
         x => x.addTo(this.map)
       );*/
    tiles.addTo(this.map);

  }

  constructor() {
  }

  ngOnInit(): void {
    this.initMap();
  }

}