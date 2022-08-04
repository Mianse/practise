//object 

const Movie1 = {
   title:'Ghost rider',
   actor:'nicholas cage',
   year:2012,
   getSummary: function(){
    return`${this.title} by ${this.actor} was the greatest movie in ${this.year}`; 
   }
}

const Movie2 = {
    title:'fast and furious',
    actor:'the rock',
    year:2019,
    getSummary: function(){
     return`${this.title} by ${this.actor} was the greatest movie in ${this.year}`; 
    }
 }



console.log(Movie1);
console.log(Movie2.getSummary());