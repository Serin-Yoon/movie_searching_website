
const bodyAll = document.querySelector('body');
const posternum = document.querySelector("#poster11")

function mouseOnPoster(posterid){
    var posterNum = parseInt(posterid.slice(6))
    const posterInfo = document.querySelector(`#movie_info${posterNum}`);
    
    setTimeout(function() {
        posterInfo.style.display= "block";
      }, 50);
    setTimeout(function() {
        posterInfo.style.display= "none";
    }, 2000);
}

function mouseOutPoster(posterid){  
    var posterNum = parseInt(posterid.slice(6))
    const posterInfo = document.querySelector(`#movie_info${posterNum}`);
    posterInfo.style.display= "none";
}