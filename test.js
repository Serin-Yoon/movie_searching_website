


showSame2 = (targetDiv, targetMovie) => {
    let title = Object.keys(targetMovie);
    let movieObj = targetMovie[title];
    let genre = movieObj["genre"];
    let rate = movieObj["rate"];
    let where = movieObj["where"];
    let imgPath = movieObj["img"];

    targetDiv.querySelector(".name").innerHTML = title;
    targetDiv.querySelector(".genre").innerHTML = genre;
    targetDiv.querySelector(".rate").innerHTML = rate;
    targetDiv.querySelector(".where").innerHTML = where;
    targetDiv.querySelector(".image img").src = imgPath;
}


showSame = loadedSame => {//함수를 이용하는 방법을 보여드립니다.
    let divList = document.querySelectorAll(".smovie");//class이름에 smovie를 포함하는 모든 div
    for (let i = 0; i < 5; i++) {
        showSame2(divList[i], loadedSame[i]);
    }
}


showMovie = loadedMovie => {//일일히 넣는 방법을 보여드립니다.
    let title = Object.keys(loadedMovie);
    let movieObj = loadedMovie[title];
    let genre = movieObj["genre"];
    let rate = movieObj["rate"];
    let where = movieObj["where"];
    let imgPath = movieObj["img"];

    document.querySelector(".searched-name").innerHTML = title;//글을 집어 넣는법
    document.querySelector(".searched-genre").innerHTML = genre;
    document.querySelector(".searched-rate").innerHTML = rate;
    document.querySelector(".searched-where").innerHTML = where;
    document.querySelector(".searched-img img").src = imgPath;//이미지를 집어 넣는법
}


showWhat = loadedWhat => {
    document.querySelector(".searched-movie").innerHTML = `${loadedWhat} 을(를) 검색하셨습니다`;
}

testStart = (loadedWhat, loadedMovie, loadedSame) => {
    showWhat(loadedWhat);//~을 검색하셨습니다 보여주기
    showMovie(loadedMovie);//검색한 영화 보여주기
    showSame(loadedSame);//같은 장르 보여주기
}



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
    console.log(loadedWhat);//여기까지가 데이터 불러오기

    //여기부터 테스트 시작
    testStart(loadedWhat, loadedMovie, loadedSame);
}



init = () => {
    loadGenre();
}

init();