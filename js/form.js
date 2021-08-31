function save() {
    if (!confirm('등록하시겠습니까?')) {
      return;
    }
    var contents;
      try {
        contents = JSON.parse(localStorage.getItem("contents"));
      } catch (e) {
        contents = null;
      }

    if (!contents) {
      contents = [];
    }

    var title = document.getElementById('title').value;
    var writer = document.getElementById('writer').value;
    var content = document.getElementById('content').value;
    contents.push({no:contents.length+1
      , title:title
      , writer:writer
      , content:content
      , write_date:new Date()});
    localStorage.setItem("contents", JSON.stringify(contents));

    alert('글이 등록되었습니다.');
    location.href = 'list.html';
  }

  document.addEventListener("DOMContentLoaded", function(){
    var signedUser = JSON.parse(sessionStorage.getItem("__login_user_"));
    document.getElementById("writer").value = signedUser["id"];
  });