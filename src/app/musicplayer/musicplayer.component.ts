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
  Surl: any =  '../../assets/songs/music1.mp3';

  currentFile: any = {};

  flag : any = 0 ;

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

  constructor(){

  }

  openFile(url:any , name:any , movie:any , image:any){
    this.audio.src=url;
    this.sName = name ;
    this.mName = movie ;
    this.imageUrl = image ;

    this.audio.load();
    this.audio.play();

    this.currentFile = url ;

    this.flag = 1 ;

  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  play() {

    if(this.flag==1)
    {
      this.audio.play();
    }
    else
    {
      this.audio.src=this.Surl;
      this.audio.load();
      this.audio.play();
    }

  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0 ;
  }

  previous(){
    alert("Sorry... This Feature is not Working !!! ");
  }

  next(){
    alert("Sorry... This Feature is not Working !!! ");
  }

  setVolume(event:any){
    this.audio.volume = event.target.value;
  }
}
