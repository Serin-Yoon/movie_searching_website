오류사항: 라이브서버 켜보니 원인모를 에러가 발생하네요. 처음 접속해서 개발자도구 확인해서 에러가 발생하면 라이브 서버 다시 켜주시고
영화검색, 장르만 검색, 서비스만 검색, 장르와 서비스 전부검색 한 번씩 하고 나면 에러가 발생하지 않습니다.

그 외에도 db에 문제가 있는것 같아서 오류는 계속 찾아보겠습니다.






먼저 기본적인 구조를 설명하겠습니다.

main.html에서 페이지 이동이 다음과 같이 일어납니다.

영화 이름을 검색했을 때-> title.js
장르만 검색했을 때 -> genre_select.js
서비스만 검색했을 때 -> service_select.js
장르와 서비스 모두 검색했을 때 -> full_select.js




각각의 html에 각각의 js를 html 아랫부분에 연결해 두었습니다(지우시면 안됩니다!). 이 부분에 각각 작업을 하시면 됩니다.

genre_select.html -> genre_select.js
service_select.html -> service_select.js
full_select.html -> full_select.js
title.html -> title.js



각 js 파일에는 공통적인 작업이 되어있습니다. 

init() 함수와 loadedGenre() 함수입니다. (loadedGenre같은 경우는 이름을 각자 파일에 맞게 바꾸어야 하는데 우선은 신경쓰지 않아도 될거 같아요)

init 은 js파일을 시작한다는 의미이며, loadedGenre 함수를 호출합니다. loadedGenre 함수는 각 파일의 특성에 맞게 localstorage에서 필요한 정보를 가져옵니다. 따라서 여러분이 localstorage에 접속할 필요가 없습니다. 




각 파일에서 loadedGenre 함수가 가져오는 정보는 다음과 같습니다. 

genre_select.js
1) 서비스별로 선택한 장르의 영화가 평점순으로 정렬되어 있는 정보-> loadedItem에 저장(객체)
2) 어떤 서비스를 선택했는지 -> loadedWhat에 저장(문자열)

service_select.js
1) 장르별로 선택한 서비스의 영화가 평점 순으로 정렬되어 있는 정보 -> loadedItem에 저장(객체)
2) 어떤 서비스를 선택했는지 -> loadedWhat에 저장(문자열)

full_select.js
1) 선택한 장르와 서비스의 영화가 평점 순으로 정렬되어 있는 정보 -> loadedItem에 저장(배열)
2) 어떤 서비스, 장르를 선택했는지 -> loadedWhat에 저장(배열)

title.js
1) 선택한 영화와 같은 장르의 영화가 평점순으로 정렬 -> loadedSame에 저장(배열)
2) 선택한 영화의 정보 -> loadedMovie에 저장(객체)
3) 어떤 영화를 선택했는지 -> loadedWhat에 저장(문자열)


console.log로 찍어두었으니 개발자 도구에서 구조를 확인해 보세요.




이렇게 각자 필요한 정보는 모두 저장되어 있습니다. 이 정보를 가지고 화면에 그려내면 됩니다. 이제 그 방법에 대해서 설명하겠습니다.

각자 작업할 파일은 총 3가지입니다.(각자의 html, 각자의 js, 각자의 css)

tile.html에 test.js와 test.css 예시를 걸어두었습니다. title.html 작업을 하시는 분은 확인 뒤 작업 시 
title.html에 작성되어 있는 내용 ,test.js, test.css을 지우고, title.js를 추가한 뒤 진행해 주시면 됩니다. 


작업은 다음과 같이 진행합니다.

1. 먼저 데이터가 없다고 생각하고, html과 css를 만들어 주세요. 초기 작업 시에는 데이터를 넣기 전까지 js를 사용한 효과(mouseover 등)생성은 안하시는게 좋습니다. 어떤 내용을 어디에 넣을지 구조에 집중해 주세요. 어차피 이미지와 글은 js를 통해 대체될 것이기 때문에 html에서 아무거나 막 넣어보셔도 됩니다. 초기 작업은 title.html에서 test.js를 추가한 부분을 지워보면 확인할 수 있습니다.


2. 이제 js작업을 하시면 됩니다. js작업은 다음과 같은 순서로 하시면 됩니다.

각자의 loadedItem,loadedWhat 을 적절하게 이용해서 정보를 빼낸다-> document.querySelector를 이용해서 html요소를 가져온다
-> 빼낸 정보를 가져온 html요소에 심는다 (글자일 경우 innerHTML, 이미지일 경우 src사용) -> 모두 집어 넣은 다음 효과(mouseover 등)를 추가



각 파일마다 loadedItem의 구조가 다릅니다. 객체인 것도있고 , 배열인 것도 있고, 배열안에 객체가 있는 것도 있습니다.

Array.length
Object.keys(객체이름)
Object[키이름]
반복문
등 을 적절하게 사용해보세요.


또한 html에 값을 집어 넣을 때 하나하나 document.querySelector로 가져오는 방법도 있지만, document.querySelectorAll로 
유사한 요소 전부를 배열로 가져오는 방법도 있습니다. 두 가지 예시 모두 들어놓았습니다.





주의
css 파일명, class의 이름, 변수 명, 함수의 이름 등을 지을 때 중복이 발생하면 안됩니다. 고유하게 지어주세요.

작업이 진행 되어있는 html 페이지를 열어보았는데(장르만 선택, 서비스만 선택) 에러가 발생합니다.
코드를 만들 때 (특히 js파일) 에러를 꼭 확인하면서 만들어 주시고, 중간중간에 console.log를 많이 찍어보면서 의도한 대로 되고 있는지 확인해 주시면 좋을거 같아
요.