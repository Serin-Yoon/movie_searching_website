

loadService = () => {
    let loadedItem = localStorage.getItem("ONLY_SERVICE");
    let loadedWhat = localStorage.getItem("WHAT");
    if (loadedItem === null || loadedWhat === null) {
        alert('error');
    } else {
        loadedItem = JSON.parse(loadedItem);
        loadedWhat = JSON.parse(loadedWhat);
    }

    console.log(loadedItem);

    changeService(loadedWhat);
    changeImg(loadedItem);
    changeInfo(loadedItem);
}

function changeService(loadedWhat){
    console.log(loadedWhat);
    let title = document.querySelector('title')
    let serviceImg = document.getElementById('service_name')
    
    if(loadedWhat == '넷플릭스'){
        title.innerHTML = "넷플릭스에 있는 영화"
        serviceImg.src="./images/netflix.png"
    }
    else if(loadedWhat == '왓챠'){
        title.innerHTML = "왓챠에 있는 영화"
        serviceImg.src="./images/watcha.png"
    }
    else if(loadedWhat == '웨이브'){
        title.innerHTML = "웨이브에 있는 영화"
        serviceImg.src="./images/wavve.jpg"
    }
    else if(loadedWhat == '시리즈온'){
        title.innerHTML = "시리즈온에 있는 영화"
        serviceImg.src="./images/naver.png"
    }
}


function changeImg(loadedItem){
    let posterImg = document.querySelectorAll('.poster_img');
    for(let i=0;i<5;i++){
        //액션
        let key = Object.keys(loadedItem.액션[i]);
        // console.log(posterImg[i]);
        // console.log(loadedItem.액션[i][key[0]].img)
        posterImg[i].src =`${loadedItem.액션[i][key[0]].img}`

         //멜로
         let key1 = Object.keys(loadedItem.멜로[i]);
         posterImg[5+i].src =`${loadedItem.멜로[i][key1[0]].img}`

        //코미디
        let key2 = Object.keys(loadedItem.코미디[i]);

        posterImg[10+i].src =`${loadedItem.코미디[i][key2[0]].img}`   
        
        //스릴러
        let key3 = Object.keys(loadedItem.스릴러[i]);

        posterImg[15+i].src =`${loadedItem.스릴러[i][key3[0]].img}` 

        //SF
        let key4 = Object.keys(loadedItem.SF[i]);
        posterImg[20+i].src =`${loadedItem.SF[i][key4[0]].img}` 

        //판타지
        let key5 = Object.keys(loadedItem.판타지[i]);
        posterImg[25+i].src =`${loadedItem.판타지[i][key5[0]].img}` 
    }

}

function changeInfo(loadedItem){
    for(let i=0;i<5;i++){
        let movieInfo1 = document.getElementById(`movie_info${11+i}`);
        //console.log(movieInfo);
        let key1 = Object.keys(loadedItem.액션[i]);
        movieInfo1.innerHTML = `${key1[0]} <br> 평점: ${loadedItem.액션[i][key1[0]].rate}`

        let movieInfo2 = document.getElementById(`movie_info${21+i}`);
        let key2 = Object.keys(loadedItem.멜로[i]);
        movieInfo2.innerHTML = `${key2[0]} <br> 평점: ${loadedItem.멜로[i][key2[0]].rate}`

        let movieInfo3 = document.getElementById(`movie_info${31+i}`);
        let key3 = Object.keys(loadedItem.코미디[i]);
        movieInfo3.innerHTML = `${key3[0]} <br> 평점: ${loadedItem.코미디[i][key3[0]].rate}`

        let movieInfo4 = document.getElementById(`movie_info${41+i}`);
        let key4 = Object.keys(loadedItem.스릴러[i]);
        movieInfo4.innerHTML = `${key4[0]} <br> 평점: ${loadedItem.스릴러[i][key4[0]].rate}`

        let movieInfo5 = document.getElementById(`movie_info${51+i}`);
        let key5 = Object.keys(loadedItem.SF[i]);
        movieInfo5.innerHTML = `${key5[0]} <br> 평점: ${loadedItem.SF[i][key5[0]].rate}`

        let movieInfo6 = document.getElementById(`movie_info${61+i}`);
        let key6 = Object.keys(loadedItem.판타지[i]);
        movieInfo6.innerHTML = `${key6[0]} <br> 평점: ${loadedItem.판타지[i][key6[0]].rate}`
    }
    


    // let movieInfo = document.getElementById('movie_info11');
    // let key = Object.keys(loadedItem.코미디[2]);
    // movieInfo.innerHTML = `${key[0]} <br> 평점: ${loadedItem.코미디[2][key[0]].rate}`
}



init = () => {
    loadService();
}

init();
