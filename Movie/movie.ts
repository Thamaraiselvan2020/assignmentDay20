class Movie{
    //properties
    title:string;
    studio:string;
    rating:string;

    constructor(title:string,studio:string,rating:string='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(movieObj:Movie[]){
        return movieObj.filter(callback=>callback.rating==='PG');
    }
}
let movieObj=new Movie("CasinoRoyale","Eon Productions","PG13");

let list:Movie[]=[new Movie("Narnia","Disney","PG"),
                new Movie("Pirates of the Caribbean","Disney","PG5"),
                new Movie("FORZEN II","Disney","PG"),
                new Movie("Moana","Disney","PG"),
                new Movie("Zootopia","Disney","PG5"),
                new Movie("FORZEN I","Disney","PG5"),
                new Movie("Tangled","Disney","PG")];
let sortedListOfMovie=movieObj.getPG(list);
for(let i=0;i<sortedListOfMovie.length;i++){
   // document.getElementById("movieList").innerHTML = sortedListOfMovie[i];
    console.log(sortedListOfMovie[i]);
    
}
