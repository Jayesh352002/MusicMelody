import { Component } from '@angular/core';


@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.component.html',
  styleUrls: ['./musicplayer.component.css'],
})
export class MusicplayerComponent {
  audio = new Audio();

  sName : any = 'CHALEYA';
  mName : any = 'Jawan';
  imageUrl : any ='../../assets/songs/s2.jpg';

  files = [
    {
      url: '../../assets/songs/music1.mp3',
      name: 'CHALEYA',
      movie:'Jawan',
      imgurl:'../../assets/songs/s2.jpg'
    },
    {
      url: '../../assets/songs/music2.mp3',
      name: 'ZINDA BANDA',
      movie:'Jawan',
      imgurl:'../../assets/songs/s1.jpg'
    },
    {
      url: '../../assets/songs/music3.mp3',
      name: 'MAIN NIKLA GADDI LEKA',
      movie:'Gadar 2',
      imgurl:'../../assets/songs/s3.jpg'
    },
    {
      url: '../../assets/songs/music4.mp3',
      name: 'HUKUM',
      movie:'Jailer',
      imgurl:'../../assets/songs/s4.jpg'
    },
  ];

  openFile(url:any , name:any , movie:any , image:any){
    this.audio.src=url;
    this.sName = name ;
    this.mName = movie ;
    this.imageUrl = image ;

    this.audio.load();
    this.audio.play();

  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0 ;
  }

  previous(){
    this.audio.pause();

  }

  next(){
    this.audio.pause();
  }
}
