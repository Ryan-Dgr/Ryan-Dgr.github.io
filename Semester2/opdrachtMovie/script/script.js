// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorzien

const setup = () =>{
    loadMovies();
}

const loadMovies = () => {
    const movieList = document.getElementById('movielist');

    movies.forEach((movie, index) =>{
        let movieDiv = createElementWithClassName("div", "movie");
        let title = createElementWithClassNameAndText("p", "title", movie.title);
        let buttons = createElementWithClassName("div", "buttons");
        let thumbs_up = createElementWithClassName("i", "fas");
        thumbs_up.classList.add("fa-thumbs-up");
        thumbs_up.addEventListener("click", like);
        let thumbs_down = createElementWithClassName("i", "fas");
        thumbs_down.classList.add("fa-thumbs-down");
        thumbs_down.addEventListener("click", like)
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

const like = (event) => {
    let el = event.target;
    let amountLike = document.getElementById("like");
    let amountDislike = document.getElementById("dislike");
    let likeButton = el.parentElement.querySelector(".fa-thumbs-up");
    let dislikeButton = el.parentElement.querySelector(".fa-thumbs-down");
    let movieDiv = el.closest(".movie");
    let title = movieDiv.querySelector(".title").textContent;

    let likebar = document.getElementById("likebar");
    let likebarmovies = document.getElementById("likebarmovies");

    if (el.classList.contains("fa-thumbs-up")) {
        if (!likeButton.classList.contains("movieLiked")) {
            likeButton.classList.add("movieLiked");
            amountLike.innerHTML++;

            if (dislikeButton.classList.contains("movieDisliked")) {
                dislikeButton.classList.remove("movieDisliked");
                amountDislike.innerHTML--;
            }

            let item = document.createElement("div");
            item.setAttribute("class", "liked-movie");
            item.setAttribute("data-title", title);
            item.innerHTML = `${title} <i class='fas fa-trash-alt'></i>`;
            item.querySelector("i").addEventListener("click", () => {
                likeButton.classList.remove("movieLiked");
                amountLike.innerHTML--;
                likebarmovies.removeChild(item);
                if (likebarmovies.childElementCount === 0) {
                    likebar.style.visibility = "hidden";
                }
            });

            likebarmovies.appendChild(item);
            likebar.style.visibility = "visible";
        } else {
            likeButton.classList.remove("movieLiked");
            amountLike.innerHTML--;

            let likedMovie = likebarmovies.querySelector(`[data-title="${title}"]`);
            if (likedMovie) likebarmovies.removeChild(likedMovie);
            if (likebarmovies.childElementCount === 0) {
                likebar.style.visibility = "hidden";
            }
        }

        // If disliked
    } else {
        if (!dislikeButton.classList.contains("movieDisliked")) {
            dislikeButton.classList.add("movieDisliked");
            amountDislike.innerHTML++;

            if (likeButton.classList.contains("movieLiked")) {
                likeButton.classList.remove("movieLiked");
                amountLike.innerHTML--;

                let likedMovie = likebarmovies.querySelector(`[data-title="${title}"]`);
                if (likedMovie) likebarmovies.removeChild(likedMovie);
                if (likebarmovies.childElementCount === 0) {
                    likebar.style.visibility = "hidden";
                }
            }
        } else {
            dislikeButton.classList.remove("movieDisliked");
            amountDislike.innerHTML--;
        }
    }
};



window.addEventListener('load', setup);