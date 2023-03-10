import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'observables';

  // Promisse é o objeto que recebe uma função
  // essa função interna, recebe outras duas funções, resolve e reject
  // e precisa determinar quando cada uma das duas será executada.
  
  // as função resolve e reject recebe retornam uma promise
  // do tipo Promise<T>, logo devem receber um parámetro do tipo T.

  
  myPromise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {

      // é bom notar que somente uma das duas serao executadas, mesmo 
      // sem o if

      
      if(nome === 'mateus'){
        resolve('nome legal parabens po')
      }

      else {
        reject('nome feio')
      }

    })
  }

  ngOnInit(): void {

    // estamos dizendo o que fazer quando o resultado chegar
    //  a promisse representa uma string, entao estamos fazendo
    // codigo do que faremos com essa string, quando tivermos esse valor
    // nesse caso é so imprimir ela na tela

    this.myPromise('ok')
      .then((value) => {console.log(value)})
      .catch(erro => {console.log(erro)})

      console.log('mateus')
      console.log('mateus 2')

  }
}

