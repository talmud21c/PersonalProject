  /*
    0. 회원가입 버튼 클릭
     - onclick

    1. 입력값 가져오기
     - document.getElementById('name').value

    2. 입력값을 localstorage 저장
     - localStorage.setItem("key", value);
     -> https://www.daleseo.com/js-web-storage/

    3. 회원가입이 되었습니다. 알림
     - alert 이용

    4. 입력했던 내용을 지우고
     - document.getElementById('name').value = null

    5. 메인화면으로 이동
     - location.replace = 

  */
     var _userkey = '__user__';

     function join() {
       var id = document.getElementById('id').value;
       var name = document.getElementById('name').value;
       var pw = document.getElementById('pw').value;
       var pw_chk = document.getElementById('pw_chk').value;
       
       console.log(id, name, pw, pw_chk);
       
       var userInfo = {
         id:id,
         name:name,
         pw:pw,
         pw_chk:pw_chk
       }
     
       localStorage.setItem(_userkey+id, JSON.stringify(userInfo));
     
       alert('회원가입이 완료되었습니다.')
       location.replace("login.html");
     }
     
     function checkId() {
       document.getElementById('btnJoin').disabled = true;
       var id = document.getElementById('id').value;
       var userInfo = localStorage.getItem(_userkey+id);
       if (userInfo) {
         alert('중복된 아이디 입니다.');
         document.getElementById('id').value = null;
         return;
       }
       alert('사용할 수 있는 아이디 입니다.');
     
       document.getElementById('btnJoin').disabled = false;
     }
     
     function isSame() {
       var pw = document.getElementById('pw').value;    
       var pw_chk = document.getElementById('pw_chk').value;
       if (pw.length < 4 || pw.length > 8) {
           window.alert('비밀번호는 4자리 이상 8자리 이하만 가능합니다.');
           document.getElementById('pw').value=document.getElementById('pw_chk').value='';
           document.getElementById('same').innerHTML='';
       }
       if(document.getElementById('pw').value!='' && document.getElementById('pw_chk').value!='') {
           if(document.getElementById('pw').value==document.getElementById('pw_chk').value) {
               document.getElementById('same').innerHTML='비밀번호가 일치합니다.';
               document.getElementById('same').style.color='blue';
           }
           else {
               document.getElementById('same').innerHTML='비밀번호가 일치하지 않습니다!!';
               document.getElementById('same').style.color='red';
           }
           
         }
     }