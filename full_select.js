

loadGenre = () => {
    let loadedItem = localStorage.getItem("GENRE_SERVICE");
    let loadedWhat = localStorage.getItem("WHAT");

    if (loadedItem === null || loadedWhat === null) {
        alert('error');
    } else {
        loadedItem = JSON.parse(loadedItem);
        loadedWhat = JSON.parse(loadedWhat);

    }
    console.log(loadedItem);//사용
    console.log(loadedWhat);
}




init = () => {
    loadGenre();
}

init();