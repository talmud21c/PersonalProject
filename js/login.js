/* 
1. 아이디를 입력한다.
2. 패스워드를 입력한다.
3. 로그인 버튼을 누른다.
4. 입력한 아이디, 패스워드를 가져온다.
   - 둘중하나라도 입력하지 않으면, 입력하라고 알려준다.
5. 입력한 아이디가 존재하는지 검사한다.
   - 존재하지 않으면 로그인 실패
6. 아이디 존재하면, 해당 회원정보를 가져와서 패스워드를 비교한다.
   - 패스워드가 일치하지 않으면 로그인 실패
7. 패스워드가 일치하면 로그인한다.
   - sessionStorage에 로그인정보를 기록한다.
   - sessionStorage에 담긴 비밀번호 정보를 삭제한다.
*/

clearLoginSession();

function clearLoginSession() {
 sessionStorage.removeItem('__login_user_');
}


function login() {
  var idEl = document.getElementById('id');
  var passwordEl = document.getElementById('pw');

  var id = idEl.value;
  var password = passwordEl.value;

  idEl.className = null;
  passwordEl.className = null;

  if (!id) {
    alert('아이디를 입력하세요.');
    idEl.className = "error";
    return;
  }

  if (!password) {
    alert('패스워드를 입력하세요.');
    passwordEl.className = "error";
    return;
  }

  var userJson = localStorage.getItem('__user__'+id);
  
  if (!userJson) {
     alert('로그인에 실패하였습니다.');
     return;
  }

  var user = JSON.parse(userJson);
  var userJson = localStorage.getItem('__user__'+pw);
  if (password != user.pw) {
     alert('로그인에 실패하였습니다.');
     return;
  }

  //세션스토리지에 담긴 비밀번호 삭제
  delete user.pw;
  delete user.pw_chk;

  sessionStorage.setItem('__login_user_', JSON.stringify(user));

  location.replace('list.html');
}