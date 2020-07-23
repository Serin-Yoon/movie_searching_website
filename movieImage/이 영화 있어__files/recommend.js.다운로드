//중복x 아주 랜덤하게 추출해줌.
let recObj = [];
let recList = [];

organize = num => {
    if (recList.length > num) {
        let cnt = recList.length - num;
        while (cnt--) {
            recList.pop();
        }
    }
    for (let i = 0; i < recList.length; i++) {
        let subObj = {};
        let subsub = {};

        subsub = db[recList[i]];
        subObj[recList[i]] = subsub;
        recObj.push(subObj);
    }
    recObj.sort(function (a, b) {
        let aTitle = Object.keys(a);
        let bTitle = Object.keys(b);
        let aNum = Number(db[aTitle]["rate"]);
        let bNum = Number(db[bTitle]["rate"]);
        return aNum > bNum ? -1 : aNum < bNum ? 1 : 0;
    })
    localStorage.setItem("RECOMMEND", JSON.stringify(recObj));
}


sortMovie = () => {
    let sortedMovie = {};//장르가 키 , value는 영화이름 배열
    let movieKeys = Object.keys(db);
    for (let i = 0; i < movieKeys.length; i++) {
        let targetGenre = db[movieKeys[i]].genre
        if (Array.isArray(targetGenre) === false) {
            targetGenre = targetGenre.split();
        }
        for (let j = 0; j < targetGenre.length; j++) {
            if (sortedMovie[targetGenre[j]] === undefined) {
                sortedMovie[targetGenre[j]] = [];
                sortedMovie[targetGenre[j]].push(movieKeys[i]);
            } else {
                sortedMovie[targetGenre[j]].push(movieKeys[i]);
            }
        }
    }
    return sortedMovie
}

recMovie = (searchKey, count, sortedMovie) => {//랜덤하게  count개 추출후 push // recursive
    let targetMovies = sortedMovie[searchKey]; //랜덤하게 count개 추출
    for (let i = 0; i < count; i++) {
        let idx = Math.floor((Math.random() * (targetMovies.length - 1 - 0 + 1)) + 0);
        while (recList.includes(targetMovies[idx])) {//중복제거
            idx = Math.floor((Math.random() * (targetMovies.length - 1 - 0 + 1)) + 0);
        }
        recList.push(targetMovies[idx]);
    }
}

sortSearch = (parseSearch, num) => {//장르별 등장횟수 파악
    let searchObj = {};
    let len = parseSearch.length;
    for (let i = 0; i < len; i++) {
        let targetGenre = db[parseSearch[i]].genre;
        if (Array.isArray(targetGenre) === false) {
            targetGenre = targetGenre.split();
        }
        for (let j = 0; j < targetGenre.length; j++) {
            if (searchObj[targetGenre[j]] === undefined) {
                searchObj[targetGenre[j]] = 1;
            } else {
                searchObj[targetGenre[j]] += 1;
            }
        }
    }
    let searchPercent = {};
    let searchKeys = Object.keys(searchObj);
    let sortedMovie = sortMovie();
    let movieSum = 0;
    for (let i = 0; i < searchKeys.length; i++) {
        movieSum += searchObj[searchKeys[i]];
    }
    for (let i = 0; i < searchKeys.length; i++) {
        let curPer = Math.ceil((searchObj[searchKeys[i]] / movieSum) * 100);
        let count = Math.ceil(num * curPer / 100);//넣고 깎자
        recMovie(searchKeys[i], count, sortedMovie);
    }
    organize(num);
}

onlyLoad = () => {
    const loadedSearch = localStorage.getItem("SEARCH");
    if (loadedSearch !== null) {
        const parseSearch = JSON.parse(loadedSearch);
        sortSearch(parseSearch, 5);//개수선택
    }
}


init = () => {
    onlyLoad();
}


init();