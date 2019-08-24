import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  private news;

  constructor() { 
    this.news = {
      image: "http://midia.gruposinos.com.br/_midias/jpg/2015/07/27/android-949965.jpg",
      content: "Android é um sistema operacional (SO) baseado no núcleo Linux e atualmente desenvolvido pela empresa de tecnologia Google. Com uma interface de usuário baseada na manipulação direta, o Android é projetado principalmente para dispositivos móveis com tela sensível ao toque como smartphones e tablets; com interface específica para TV (Android TV), carro (Android Auto) e relógio de pulso (Android Wear). O sistema operacional utiliza-se da tela sensível ao toque para que o usuário possa manipular objetos virtuais e também de um teclado virtual. Apesar de ser principalmente utilizado em dispositivos com tela sensível ao toque, também é utilizado em consoles de videogames, câmeras digitais, computadores e outros dispositivos eletrônicos."
    }
  }

  ngOnInit() {
  }

}
