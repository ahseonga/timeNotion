//rgb 재정의
function rgb(r, g, b) {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}
// NodeList에 map 메소드를 추가
// NodeList에 map 메소드를 추가
NodeList.prototype.map = Array.prototype.map;

const all = document.querySelector("#check_all");
const terms = document.querySelectorAll("input.check");
const button = document.querySelector(".join")
// let msg = document.createElement("p")

// 전체 동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
all.addEventListener("click", () => {
  terms.forEach((check) => {
    check.checked = all.checked;
  });
});

// 약관 동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
terms.forEach((check) => {
  check.addEventListener("click", () => {
    // 전체 동의 체크박스 상태를 변경
      all.checked = terms.map((check) => check.checked).filter((checked) => checked).length === 3;
  
  });
});





//비밀번호

const joinPasswordInput = document.getElementById('join-password-input');
const joinPasswordResult = document.getElementById('join-password-result');
const joinPasswordParagraph = document.getElementById('join-password-paragraph');

// 변수생성
let joinPasswordCount = 0 ;
//패스워드박스 focus blur 처리 
joinPasswordInput.addEventListener('focus', joinPasswordInputFocusFunction);
joinPasswordInput.addEventListener('blur',joinPasswordInputBlurFunction);

//패스워드 박스 함수 처리 
function joinPasswordInputFocusFunction(){
  console.log("dkdk");
  if(joinPasswordCount ===0 ){
    console.log("0");
    joinPasswordInput.style.outline = "none";
    joinPasswordInput.style.opacity = 0.7;
    joinPasswordInput.style.borderWidth = "3px";
    joinPasswordInput.style.borderColor = '#B2E8F7';
  }else{
    joinPasswordInput.style.outline = "none";
    joinPasswordInput.style.borderWidth = "3px";
    joinPasswordInput.style.borderColor = "#FEB7B1";
    joinPasswordInput.style.borderWidth = "3px";
  }
  if(this.value !== ''){
    joinPasswordInput.style.outline = "none";
    joinPasswordInput.style.opacity = 0.7;
    joinPasswordInput.style.borderWidth = "3px";
    joinPasswordInput.style.borderColor = '#B2E8F7';
  }
  joinPasswordCount++;
  console.log(joinPasswordCount);
};

function joinPasswordInputBlurFunction(){
 
  joinPasswordResult.innerText = "필수 입력 항목입니다.";
  joinPasswordResult.style.color = rgb(255, 119, 119);
  joinPasswordResult.style.fontSize = "12px";
  joinPasswordInput.style.borderColor =  rgb(255, 119, 119);
  joinPasswordInput.style.borderWidth = "1px";
  joinPasswordInput.style.marginBottom = "5px";
  joinPasswordParagraph.style.color =  rgb(255, 119, 119);
  if(this.value !== ''){
    joinPasswordInput.style.opacity = 0.7;
    joinPasswordInput.style.borderWidth = "1px";
    joinPasswordInput.style.borderColor = 'gray';
    joinPasswordParagraph.style.color =  'black';
    joinPasswordResult.innerText = " ";

  }

};

//비밀번호
const joinPasswordCheckInput = document.getElementById('join-passwordcheck-input');
const joinPasswordCheckResult = document.getElementById('join-passwordcheck-result');
const joinPasswordCheckParagraph = document.getElementById('join-passwordcheck-paragraph');

// 변수생성
let joinPasswordCheckCount = 0 ;
//패스워드박스 focus blur 처리 
joinPasswordCheckInput.addEventListener('focus', joinPasswordCheckInputFocusFunction);
joinPasswordCheckInput.addEventListener('blur',joinPasswordCheckInputBlurFunction);

//패스워드 박스 함수 처리 
function joinPasswordCheckInputFocusFunction(){
  
  if(joinPasswordCheckCount ===0 ){
   
    joinPasswordCheckInput.style.outline = "none";
    joinPasswordCheckInput.style.opacity = 0.7;
    joinPasswordCheckInput.style.borderWidth = "3px";
    joinPasswordCheckInput.style.borderColor = '#B2E8F7';
  }else{
    joinPasswordCheckInput.style.outline = "none";
    joinPasswordCheckInput.style.borderWidth = "3px";
    joinPasswordCheckInput.style.borderColor = "#FEB7B1";
    joinPasswordCheckInput.style.borderWidth = "3px";
  }
  if(this.value !== ''){
    joinPasswordCheckInput.style.outline = "none";
    joinPasswordCheckInput.style.opacity = 0.7;
    joinPasswordCheckInput.style.borderWidth = "3px";
    joinPasswordCheckInput.style.borderColor = '#B2E8F7';
  }
  joinPasswordCheckCount++;
  
};

function joinPasswordCheckInputBlurFunction(){
 
  joinPasswordCheckResult.innerText = "필수 입력 항목입니다.";
  joinPasswordCheckResult.style.color = rgb(255, 119, 119);
  joinPasswordCheckResult.style.fontSize = "12px";
  joinPasswordCheckInput.style.borderColor =  rgb(255, 119, 119);
  joinPasswordCheckInput.style.borderWidth = "1px";
  joinPasswordCheckInput.style.marginBottom = "5px";
  joinPasswordCheckParagraph.style.color =  rgb(255, 119, 119);
  if(this.value !== ''){
    joinPasswordCheckInput.style.opacity = 0.7;
    joinPasswordCheckInput.style.borderWidth = "1px";
    joinPasswordCheckInput.style.borderColor = 'gray';
    joinPasswordCheckParagraph.style.color =  'black';
    joinPasswordCheckResult.innerText = " ";

  }

};

//이름확인
const nameInput = document.getElementById('name-input');
const nameResult = document.getElementById('name-result');
const nameParagraph = document.getElementById('name-paragraph');

// 변수생성
let nameCount = 0 ;
//이름박스 focus blur 처리 
nameInput.addEventListener('focus', nameInputFocusFunction);
nameInput.addEventListener('blur',nameInputBlurFunction);

//이름 박스 함수 처리 
function nameInputFocusFunction(){
  
  if(nameCount ===0 ){
   
    nameInput.style.outline = "none";
    nameInput.style.opacity = 0.7;
    nameInput.style.borderWidth = "3px";
    nameInput.style.borderColor = '#B2E8F7';
  }else{
    nameInput.style.outline = "none";
    nameInput.style.borderWidth = "3px";
    nameInput.style.borderColor = "#FEB7B1";
    nameInput.style.borderWidth = "3px";
  }
  if(this.value !== ''){
    nameInput.style.outline = "none";
    nameInput.style.opacity = 0.7;
    nameInput.style.borderWidth = "3px";
    nameInput.style.borderColor = '#B2E8F7';
  }
  nameCount++;
  
};

function nameInputBlurFunction(){
 
  nameResult.innerText = "필수 입력 항목입니다.";
  nameResult.style.color = rgb(255, 119, 119);
  nameResult.style.fontSize = "12px";
  nameInput.style.borderColor =  rgb(255, 119, 119);
  nameInput.style.borderWidth = "1px";
  nameParagraph.style.color =  rgb(255, 119, 119);
  if(this.value !== ''){
    nameInput.style.opacity = 0.7;
    nameInput.style.borderWidth = "1px";
    nameInput.style.borderColor = 'gray';
    nameParagraph.style.color =  'black';
    nameResult.innerText = " ";

  }

};

//아이디
//닉네임 
const joinIdInput = document.getElementById('join-id-input');
const joinIdResult = document.getElementById('join-id-result');
const joinIdParagraph = document.getElementById('join-id-paragraph');
const joinIdDuplication = document.getElementsByClassName('join-id-button');

// 변수생성
let joinIdCount = 0 ;
//패스워드박스 focus blur 처리 
joinIdInput.addEventListener('focus', joinIdInputInputFocusFunction);
joinIdInput.addEventListener('blur',joinIdInputBlurFunction);

//패스워드 박스 함수 처리 
function joinIdInputInputFocusFunction(){
  if(joinIdCount ===0 ){
    joinIdInput.style.outline = "none";
    joinIdInput.style.borderWidth = "3px";
    joinIdInput.style.borderColor = '#B2E8F7';
    joinIdInput.style.opacity = 0.7;
  }else{
    joinIdInput.style.outline = "none";
    joinIdInput.style.borderWidth = "3px";
    joinIdInput.style.borderColor = "#FEB7B1";
    joinIdInput.style.borderWidth = "3px";
  }
  if(this.value !== ''){
    joinIdInput.style.outline = "none";
    joinIdInput.style.opacity = 0.7;
    joinIdInput.style.borderWidth = "3px";
    joinIdInput.style.borderColor = '#B2E8F7';
  }
  joinIdCount++;
}

function joinIdInputBlurFunction(){
 
  joinIdResult.innerText = "필수 입력 항목입니다.";
  joinIdResult.style.color = rgb(255, 119, 119);
  joinIdResult.style.fontSize = "12px";
  joinIdInput.style.borderColor =  rgb(255, 119, 119);
  joinIdInput.style.borderWidth = "1px";

  joinIdParagraph.style.color =  rgb(255, 119, 119);
  if(this.value !== ''){
    joinIdInput.style.opacity = 0.7;
    joinIdInput.style.borderWidth = "1px";
    joinIdInput.style.borderColor = 'gray';
    joinIdParagraph.style.color =  'black';
    joinIdResult.innerText = " ";

  }

}