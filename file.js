// 데이터 불러오는 파일
// 이 파일을 최상단에 위치시키면 여기서 선언한 변수명을 다른 파일에서도 사용가능
let db = {};


let movieArr;
readTextFile = file => {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onload = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                let allText = rawFile.responseText;
                movieArr = allText.split('\n');
            }
        }
    };
    rawFile.send(null);
    parsing();
}


parsing = () => {
    for (let i = 0; i < movieArr.length; i++) {
        let oneLine = movieArr[i].split(',');
        let keyName;
        let subObj = {};
        for (let j = 0; j < oneLine.length; j++) {
            let appendSet = oneLine[j].split('=');//key,value
            if (j === 0) {//이름-> key
                keyName = appendSet[1];
            } else if (appendSet[1].includes(':')) {
                appendarrSet = appendSet[1].split(':')
                subObj[appendSet[0]] = appendarrSet;
            } else {
                subObj[appendSet[0]] = appendSet[1];
            }
            db[keyName] = subObj;
        }
    }
    // localStorage.setItem("DB", JSON.stringify(db));
}

init = () => {
    readTextFile("./db.txt");
}


init();

