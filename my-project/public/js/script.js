document.addEventListener("DOMContentLoaded", function() {
  var eventBox = document.getElementById("eventBox");

  // eventBox 클릭 시 랜덤한 이미지가 있는 새로운 페이지로 이동
  eventBox.addEventListener("click", function() {
    // 1부터 44까지의 랜덤한 숫자 생성
    var randomNumber = Math.floor(Math.random() * 48) + 1;
    // 랜덤한 이미지가 있는 페이지 주소 생성
    var pageURL = "luck.html?image=" + randomNumber;
    // 새로운 페이지로 이동
    window.location.href = pageURL;
  });
});

