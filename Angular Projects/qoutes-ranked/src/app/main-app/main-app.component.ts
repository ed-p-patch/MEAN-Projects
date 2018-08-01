import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent{
  my_qoutes = [
    { 
      qoute: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' (I've found it!), but That's funny...", 
      author: "Issac Asimov",
      score: 0
    },
    {
      qoute: "Dreams, memories, the sacred--they are all alike in that they are beyond our grasp. Once we are even marginally separated from what we can touch, the object is sanctified; it acquires the beauty of the unattainable, the quality of the miraculous. Everything, really, has this quality of sacredness, but we can desecrate it at a touch. How strange man is! His touch defiles and yet he contains the source of miracles.", 
      author: "Yukio Mishima",
      score: 0
    },
    {
      qoute: "Music comes from the moment, it is spontaneous, it exists at the time it is created.",
      author: "Bill Evans",
      score: 0
    }
  ];

  upvote(qoute){
    const index = this.my_qoutes.indexOf(qoute);
    this.my_qoutes[index].score += 1;
    this.my_qoutes.sort(function(obj1, obj2){ return obj1.score - obj2.score; });
  }

  downvote(qoute){
    const index = this.my_qoutes.indexOf(qoute);
    this.my_qoutes[index].score -= 1;
    this.my_qoutes.sort(function(obj1, obj2){ return obj1.score - obj2.score; });
  }

  make_qoute(qoute){
    console.log(qoute);
    this.my_qoutes.push(qoute);
    this.my_qoutes.sort(function(obj1, obj2){ return obj1.score - obj2.score; });
  }

  delete_qoute(qoute){
    console.log(qoute);
    const index = this.my_qoutes.indexOf(qoute);
    this.my_qoutes.splice(index, 1);
    this.my_qoutes.sort(function(obj1, obj2){ return obj1.score - obj2.score; });
  }
  //https://davidwalsh.name/array-sort
  //this.my_qoutes.sort(function(obj1, obj2){ return obj1.score - obj2.score; });
}
