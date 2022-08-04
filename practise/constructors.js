//constructors
function Movie(title,actor,year) {
  this.title = title ;
  this.actor = actor ;
  this.year = year;
  this.getSummary = function () {
    return`${this.title}  by ${this.actor} was best in ${this.year}`;
  }
}

//instantiate
const Movie1 = new Movie('blackish', 'johnson', '2016');
const Movie2 = new Movie('ghost rider','nicholas cage','2010');

console.log(Movie2.getSummary());