

loadGenre = () => {
    let loadedSame = localStorage.getItem("ONLY_SEARCH_SAME");
    let loadedMovie = localStorage.getItem("ONLY_SEARCH_MOVIE");
    let loadedWhat = localStorage.getItem("WHAT");

    if (loadedSame === null || loadedMovie === null || loadedWhat === null) {
        alert('error');
    } else {
        loadedSame = JSON.parse(loadedSame);
        loadedMovie = JSON.parse(loadedMovie);
        loadedWhat = JSON.parse(loadedWhat);
    }
    console.log(loadedSame);//사용
    console.log(loadedMovie);
    console.log(loadedWhat);

    for (let i = 0; i < loadedMovie.length; i++) {
        let cur = loadedMovie[i];
    }
}




init = () => {
    loadGenre();
}

init();