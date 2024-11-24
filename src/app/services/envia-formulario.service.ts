import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviaInformacaoParaBackend(info: String) {
    console.log('enviando para o backend');
   }
  
}
