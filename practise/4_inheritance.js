function wrestling(event,championship,winner){
this.event = event;
this.championship = championship;
this.winner = winner;

}
//get summary
wrestling.prototype.getSummary = function(){
    return`${this.winner} won the ${this.championship} at ${this.event}`;

}

const wrestling1 = new wrestling('summerslum','heavy weight','Roman reigns');

console.log(wrestling1);

function nxt(){
    
    

}



