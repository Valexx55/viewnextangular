export interface Evento {
    '@id': string;
    title: string;
    location: Ubicacion;
  }
  
  export interface Ubicacion {
    latitude: number;
    longitude: number;
  }
