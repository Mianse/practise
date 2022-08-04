function Movie(title,actor,year){
this.title = title;
this.actor = actor;
this.year = year;
}

Movie.prototype.getSummary = function(){
    return`${this.title}  by ${this.actor} was the best  in ${this.year}`
}

Movie.prototype.getAge = function(){
const years = new Date().getFullYear() - this.year;
return`${this.title} is ${years}  years old`;
}

const Movie1 = new Movie('into the badlands','sonny','2016');

console.log(Movie1.getAge());