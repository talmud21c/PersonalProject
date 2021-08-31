var _user;

loginCheck();
setUserName(); 

var contentList = JSON.parse(localStorage.getItem("contents"));

drawRows();
function moveForm() {
  location.href = 'form.html'
}

function drawRows() {
  var templates = '';
  var body = document.getElementById('rows');

  for (var i=contentList.length-1; 0<=i; i--) {
    var content  = contentList[i];
    console.log(content);
    templates += '<tr onclick="moveView('+i+')">';
    templates += '<td style="text-align:center">'+(i+1)+'</td>';
    templates += '<td>'+content.title+'</td>';
    templates += '<td style="text-align:center">'+content.writer+'</td>';
    templates += '<td style="text-align:center">'+toStringByFormatting(new Date(content.write_date))+'</td>';
    templates += '</tr>';
  }

  body.innerHTML = templates;
}

function moveView(contentNo) {
  location.href = 'view.html?no='+(contentNo+1);
}

function loginCheck() {
    var userJson = sessionStorage.getItem('__login_user_');
    if (!userJson) {
       alert('로그인 후 이용하세요.')
       location.replace('login.html');
    }
    _user = JSON.parse(userJson);

 }

function setUserName() {
    document.getElementById('userName').innerText = _user.name;
 }

function logOut() {
  if (confirm('로그아웃 하시겠습니까?')) {
    sessionStorage.clear();
    location.href = 'login.html';
  } else{
      return;
  }
}

function leftPad(value) { if (value >= 10) { return value; } return `0${value}`; } 

function toStringByFormatting(source, delimiter = '-') {
  const year = source.getFullYear(); const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate()); return [year, month, day].join(delimiter); }