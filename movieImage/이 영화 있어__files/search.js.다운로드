const movieInputForm = document.querySelector(".userSearch");
const movieInput = movieInputForm.querySelector(".userSearch input");
const selectGenre = document.querySelector(".select-genre");
const selectService = document.querySelector(".select-service");
const selectBtn = document.querySelector(".select-btn");


onlySearch = (name, sameGenre) => {
    //특정영화 검색
    //same: 검색한 영화 정보, same: 같은 장르 영화 평점순으로 정렬되어있다.
    //console.log(name);
    //console.log(sameGenre);
    //local storage에 저장을 해둔다.-> 각자 html만들고 거기에  각자의 js파일을 import해서 거기서 불러온다.
    let tempObj = {};
    let subObj = {};
    subObj = db[name];
    tempObj[name] = subObj;
    localStorage.setItem("ONLY_SEARCH_MOVIE", JSON.stringify(tempObj));
    localStorage.setItem("ONLY_SEARCH_SAME", JSON.stringify(sameGenre));
    localStorage.setItem("HOW", JSON.stringify("onlySearch"));
}

onlyGenre = (obj) => {
    //장르만 선택
    //서비스 별로 검색한 장르의 영화가 평점순으로 정렬되어 있습니다. 원하는 개수 만큼 출력하면 됩니다.
    //console.log(obj)
    localStorage.setItem("ONLY_GENRE", JSON.stringify(obj));
    localStorage.setItem("HOW", JSON.stringify("onlyGenre"));

}

onlyService = (obj) => {
    //서비스만 선택
    //장르별로 검색한 서비스의 영화가 평점순으로 정렬되어 있습니다. 영화의 중복이 존재합니다.
    //console.log(obj);
    localStorage.setItem("ONLY_SERVICE", JSON.stringify(obj));
    localStorage.setItem("HOW", JSON.stringify("onlyService"));
}

GenreAndService = (arr) => {
    //장르, 서비스 둘다 선택
    //해당 장르,서비스의 영화가 평점순으로 정렬되어 있습니다.
    //console.log(arr);
    localStorage.setItem("GENRE_SERVICE", JSON.stringify(arr));
    localStorage.setItem("HOW", JSON.stringify("GenreAndService"));
}



///여기부터는 수정하시면 안됩니다.
saveMovie = (target) => {
    let searches = [];
    searches.push(target);
    localStorage.setItem("SEARCH", JSON.stringify(searches));
}


loadSearch = (target) => {
    const loadedSearch = localStorage.getItem("SEARCH");
    if (loadedSearch !== null) {
        const parseSearch = JSON.parse(loadedSearch);
        parseSearch.push(target);
        localStorage.setItem("SEARCH", JSON.stringify(parseSearch));
    } else {
        saveMovie(target);
    }
}


handleInput = event => {

    event.preventDefault();
    let target = movieInput.value
    console.log(target);
    localStorage.setItem('WHAT', JSON.stringify(target));

    // if (localStorage.getItem('WHAT') !== null) {
    //     localStorage.removeItem('WHAT');
    //     localStorage.setItem('WHAT', JSON.stringify(target));
    // }

    if (db[target] !== undefined) {
        loadSearch(target);
        let searchSameGenre = [];
        let targetGenre = db[movieInput.value].genre;
        let tempKey = Object.keys(db);
        for (let i = 0; i < tempKey.length; i++) {//db : 하나의 영화  
            let check = false;
            objectGenre = db[tempKey[i]].genre
            if (Array.isArray(objectGenre) === false) {
                objectGenre = objectGenre.split();
            }
            if (Array.isArray(targetGenre) === false) {
                targetGenre = targetGenre.split();
            }
            for (let j = 0; j < objectGenre.length; j++) {// 하나의 영화 장르 배열
                for (let k = 0; k < targetGenre.length; k++) {//타겟영화 장르 배열
                    if (objectGenre[j] == targetGenre[k]) {
                        check = true;
                    }
                }
            }
            if (check === true) {
                let tempObj = {};
                tempObj[tempKey[i]] = db[tempKey[i]];
                searchSameGenre.push(tempObj);
            }

        }
        searchSameGenre.sort(function (a, b) {
            let aTitle = Object.keys(a);
            let bTitle = Object.keys(b);
            let aNum = Number(db[aTitle]["rate"]);
            let bNum = Number(db[bTitle]["rate"]);
            return aNum > bNum ? -1 : aNum < bNum ? 1 : 0;
        })
        onlySearch(movieInput.value, searchSameGenre)
    } else {
        alert("존재하지 않는 영화 입니다")
    }
    // movieInput.value = "";
}

handleSelect = event => {

    if (selectGenre.value === "선택" && selectService.value === "선택") {//둘 다 고르지 않으면
        event.preventDefault();
        alert("장르 또는 서비스를 선택해 주세요");
    } else if (selectService.value === "선택") {//장르만 입력
        localStorage.setItem("WHAT", JSON.stringify(selectGenre.value));
        // if (localStorage.getItem('WHAT') !== null) {
        //     localStorage.removeItem('WHAT');
        //     localStorage.setItem("WHAT", JSON.stringify(selectGenre.value));
        // }


        let obj = {};

        let targetGenre = selectGenre.value;
        let dbKeys = Object.keys(db);
        for (let i = 0; i < dbKeys.length; i++) {
            let curMovie = db[dbKeys[i]]
            let curGenre = curMovie.genre;
            for (let j = 0; j < curGenre.length; j++) {
                if (curGenre[j] === targetGenre) {
                    let curService = db[dbKeys[i]].where;;
                    if (obj[curService] === undefined) {
                        let tempArr = [];
                        let tempObj = {};
                        tempObj[dbKeys[i]] = curMovie;
                        tempArr.push(tempObj);
                        obj[curService] = tempArr;
                    } else {
                        let tempObj2 = {};
                        tempObj2[dbKeys[i]] = curMovie;
                        obj[curService].push(tempObj2);
                    }
                }
            }
        }
        let outerKeys = Object.keys(obj);
        for (let i = 0; i < outerKeys.length; i++) {
            obj[outerKeys[i]].sort(function (a, b) {
                let aTitle = Object.keys(a);
                let bTitle = Object.keys(b);
                let aNum = Number(a[aTitle]["rate"]);
                let bNum = Number(b[bTitle]["rate"]);
                return bNum - aNum;
            });
        }
        onlyGenre(obj);
    } else if (selectGenre.value === "선택") {

        localStorage.setItem("WHAT", JSON.stringify(selectService.value));

        // if (localStorage.getItem('WHAT') !== null) {
        //     localStorage.removeItem('WHAT');
        //     localStorage.setItem("WHAT", JSON.stringify(selectService.value));
        // }

        let obj = {};
        let targetService = selectService.value;
        let dbKeys = Object.keys(db);
        for (let i = 0; i < dbKeys.length; i++) {
            let curMovie = db[dbKeys[i]]
            let curWhere = curMovie.where;
            if (targetService == curWhere) {
                let curGenre = curMovie.genre;
                if (Array.isArray(curGenre) === false) {
                    let temp = [];
                    temp.push(curGenre);
                    curGenre = temp;
                }
                for (let j = 0; j < curGenre.length; j++) {
                    if (obj[curGenre[j]] === undefined) {
                        let tempArr = [];
                        let tempObj = {};
                        tempObj[dbKeys[i]] = curMovie;
                        tempArr.push(tempObj);
                        obj[curGenre[j]] = tempArr;
                    } else {//중복 생김
                        let tempObj = {};
                        tempObj[dbKeys[i]] = curMovie;
                        obj[curGenre[j]].push(tempObj);
                    }
                }
            }
        }

        let outerKeys = Object.keys(obj);
        for (let i = 0; i < outerKeys.length; i++) {
            obj[outerKeys[i]].sort(function (a, b) {
                let aTitle = Object.keys(a);
                let bTitle = Object.keys(b);
                let aNum = Number(a[aTitle]["rate"]);
                let bNum = Number(b[bTitle]["rate"]);
                return bNum - aNum;
            });
        }
        onlyService(obj);
    } else {

        let temp = [];
        temp.push(selectGenre.value);
        temp.push(selectService.value);
        localStorage.setItem("WHAT", JSON.stringify(temp));

        // if (localStorage.getItem('WHAT') !== null) {
        //     localStorage.removeItem('WHAT');
        //     let temp = [];
        //     temp.push(selectGenre.value);
        //     temp.push(selectService.value);
        //     localStorage.setItem("WHAT", JSON.stringify(temp));
        // }
        let arr = [];
        let dbKeys = Object.keys(db);
        for (let i = 0; i < dbKeys.length; i++) {
            if (db[dbKeys[i]].where === selectService.value) {
                let curGenre = db[dbKeys[i]].genre;
                if (Array.isArray(curGenre) === false) {
                    curGenre = curGenre.split();
                }
                for (let j = 0; j < curGenre.length; j++) {
                    if (curGenre[j] === selectGenre.value) {//장르 같으면
                        let tempObj = {};
                        tempObj[dbKeys[i]] = db[dbKeys[i]];
                        arr.push(tempObj);
                    }
                }
            }
        }
        arr.sort(function (a, b) {
            let aTitle = Object.keys(a);
            let bTitle = Object.keys(b);
            let aNum = Number(a[aTitle]["rate"]);
            let bNum = Number(b[bTitle]["rate"]);
            return bNum - aNum;
        });
        GenreAndService(arr);
    }
}

init = () => {
    movieInputForm.addEventListener("submit", handleInput);
    selectBtn.addEventListener("click", handleSelect);
}

init();

