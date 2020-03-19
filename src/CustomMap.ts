export interface Mappable{
  location:{
    lat: number;
    lng: number;
  }
  markerContent():string;
  color:string;
}

export class CustomMap {
  private googleMaps: google.maps.Map;

  constructor(mapId: string) {
    this.googleMaps = new google.maps.Map(document.getElementById(mapId), {
      zoom:1,
      center:{
        lat:0,
        lng:0
      }
    });
  }

  public addMarker(mappable: Mappable):void {
    
    const Maker = new google.maps.Marker({
      map: this.googleMaps,
      position:{
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    });

    Maker.addListener('click',() =>{
      infoWindow.open(this.googleMaps, Maker);
    });

  }

}