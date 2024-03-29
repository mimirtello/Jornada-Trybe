import ICepAPI from './ICepAPI';

class CepService {
  private readonly cepApi: ICepAPI;

  constructor(cepApi: ICepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;

// // ./CepService.ts
// import FooCepAPI from './FooCepAPI';

// class CepService {
//   private readonly cepApi: FooCepAPI;

//   constructor() {
//     this.cepApi = new FooCepAPI();
//   }

//   addressByCep(cep: string, num: number) {
//     return this.cepApi.getAddressByCEP(cep, num);
//   }

//   cepByAddress(address: string, num: number) {
//     return this.cepApi.getCepByAddress(address, num);
//   }
// }

// export default CepService;