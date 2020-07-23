// const movieInputForm = document.querySelector(".userSearch");
// const movieInput = movieInputForm.querySelector(".userSearch input");
// const selectGenre = document.querySelector(".select-genre");
// const selectService = document.querySelector(".select-service");
// const selectBtn = document.querySelector(".select-btn");


handlePageSelect = () => {
    if (selectGenre.value !== "선택" && selectService.value !== "선택") {
        window.location.href = './full_select.html';
    } else if (selectGenre.value === "선택") {
        window.location.href = './service_select.html';
    } else {
        window.location.href = './genre_select.html';
    }
}

handlePageInput = (event) => {
    window.location.href = './title.html';
}


init = () => {
    movieInputForm.addEventListener("submit", handlePageInput);
    selectBtn.addEventListener("click", handlePageSelect);
}


init();