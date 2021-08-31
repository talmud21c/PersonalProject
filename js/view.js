var contents = JSON.parse(localStorage.getItem("contents"));
  
  //페이지 로드시 작성자와 아이디 일치여부 확인
  var userId = JSON.parse(sessionStorage.getItem("__login_user_"));
  var writer = contents[getParameterByName('no')-1]['writer'];
  
  document.addEventListener("DOMContentLoaded",function(){
    if( writer == userId['id'] ) {
      document.getElementById('btnDelete').hidden = false;
      document.getElementById('btnModify').hidden = false;
    }
  });
  
  getContents();
  function getContents() {
  
    if (!contents) {
      contents = [];
    }
    
    var content = contents[getParameterByName('no')-1];
    document.getElementById('title').innerText = content.title;
    document.getElementById('writer').innerText = content.writer;
    document.getElementById('content').innerText = content.content;
    document.getElementById('write_date').innerText = content.write_date;
  }
  
  // 삭제 확인
  function removeContent() {
        
    if (confirm('삭제하시겠습니까?')) {
      contents.splice(getParameterByName('no')-1, 1);
      localStorage.setItem("contents", JSON.stringify(contents));
      location.href = 'list.html'
    } else {
      return;
    }
  }
  
  // 수정 페이지로 이동
  function modify() {
      if (confirm('수정하시겠습니까?')) {
      location.href = 'modify.html?=' + '&no='+getParameterByName('no');
    } else{
      return;
    }
  }
  
  function getParameterByName(name) { 
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
  }