// ./FuturisticCar.ts
import { IFuturisticCar, IVehicle } from './interfaces';

export default class FuturisticCar implements IFuturisticCar {
    drive(): void { console.log('Drive a futuristic car'); }
  
    fly(): void { console.log('Flying a futuristic car'); }
  }


// export default class FuturisticCar implements IVehicle {
//   drive(): void { console.log('Drive a futuristic car'); }

//   fly(): void { console.log('Flying a futuristic car'); }
// }
