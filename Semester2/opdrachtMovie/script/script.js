// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorzien
let global = {
    moviesInLikebar: []
}

const setup = () =>{
    setLikedMoviesVisibility()
    loadMovies();
}

const loadMovies = () => {
    const movieList = document.getElementById('movielist');

    movies.forEach((movie, index) =>{
        let movieDiv = createElementWithClassName("div", "movie");
        movieDiv.setAttribute("data-index", movie.id);
        let title = createElementWithClassNameAndText("p", "title", movie.title);
        let buttons = createElementWithClassName("div", "buttons");
        let thumbs_up = createElementWithClassName("i", "fas");
        thumbs_up.classList.add("fa-thumbs-up");
        thumbs_up.addEventListener("click", setLikesAndDislikes);
        let thumbs_down = createElementWithClassName("i", "fas");
        thumbs_down.classList.add("fa-thumbs-down");
        thumbs_down.addEventListener("click", setLikesAndDislikes)
        let cover = createElementWithClassNameAndText("img", "cover");
        cover.setAttribute("src", movie.imageUrl);
        let description = createElementWithClassNameAndText("p", "description", movie.description);

        movieList.appendChild(movieDiv);
        movieDiv.appendChild(title);
        movieDiv.appendChild(buttons);
        buttons.appendChild(thumbs_up);
        buttons.appendChild(thumbs_down);
        movieDiv.appendChild(cover);
        movieDiv.appendChild(description);
    })
}

const setLikesAndDislikes = (event) => {
    let el = event.target;
    let isLikeButton =  el.classList.contains("fa-thumbs-up");
    let isDislikeButton =  el.classList.contains("fa-thumbs-down");
    if(isLikeButton){
        let isLiked = el.classList.contains("movieLiked");
        if(!isLiked){
            like(el);
        }else{
            unlike(el);
        }

    }else if(isDislikeButton){
        let isDisliked = el.classList.contains("movieDisliked");
        if(!isDisliked){
           dislike(el);
        }else{
            undislike(el);
        }
    }
    updateLikedMovies();
}

const updateLikedMovies = () => {
    setLikedMoviesVisibility();
    const allMovies = document.querySelectorAll(".movie");
    const likebarmovies = document.querySelector("#likebarmovies");

    likebarmovies.innerHTML = "";
    global.moviesInLikebar = [];

    allMovies.forEach((movie) => {
        if (movie.querySelector(".fa-thumbs-up").classList.contains("movieLiked")) {
            let movieId = movie.getAttribute("data-index");
            let title = movie.querySelector(".title").innerText;

            let el = createElementWithClassNameAndText("p", "likebarmovie", title);
            el.setAttribute("data-index", movieId);
            let trash = createElementWithClassName("i", "fas");
            trash.classList.add("fa-trash");
            trash.addEventListener("click", removeLikedMovie)
            likebarmovies.appendChild(el);
            el.appendChild(trash);

            global.moviesInLikebar.push(movieId);
        }
    });
}
const removeLikedMovie = (event) => {
    let el = event.target;
    let movieId = el.parentElement.getAttribute("data-index");
    let list = document.querySelectorAll(".movie");
    list.forEach(movie => {
        if(movie.getAttribute("data-index") === movieId) {
            unlike(movie.querySelector(".fa-thumbs-up"));
        }
    })
    updateLikedMovies();
}

const createElementWithClassName = (element, className) =>{
    let el = document.createElement(element);
    el.setAttribute("class", className);
    return el;
}
const createElementWithClassNameAndText = (element, className, text) =>{
    let el = document.createElement(element);
    el.setAttribute("class", className);
    el.appendChild(document.createTextNode(text));
    return el;
}
const like = (el) =>{
    let amount = document.getElementById("like");
    el.classList.add("movieLiked");
    amount.innerHTML++;
    let dislikeButton = el.parentElement.querySelector(".fa-thumbs-down");
    if(dislikeButton.classList.contains("movieDisliked")){
        undislike(dislikeButton);
    }
}
const unlike = (el) =>{
    let amount = document.getElementById("like");
    el.classList.remove("movieLiked");
    amount.innerHTML--;
}
const dislike = (el) =>{
    let amount = document.getElementById("dislike");
    el.classList.add("movieDisliked");
    amount.innerHTML++;
    let likeButton = el.parentElement.querySelector(".fa-thumbs-up");
    if(likeButton.classList.contains("movieLiked")){
        unlike(likeButton);
    }
}
const undislike = (el) =>{
    let amount = document.getElementById("dislike");
    el.classList.remove("movieDisliked");
    amount.innerHTML--;
}
const setLikedMoviesVisibility = () =>{
    let likes = document.getElementById("like");
    let likebar = document.getElementById("likebar");
    if(Number(likes.innerText) > 0){
        likebar.setAttribute("style", "");
    }else{
        likebar.setAttribute("style", "visibility:hidden");
    }
}
window.addEventListener('load', setup);