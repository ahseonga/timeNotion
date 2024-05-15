//rgb 재정의
function rgb(r, g, b) {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}




// 이미지 변경 테스트중 화난다 아아..아아..아아ㅏ..==============================

document.addEventListener("DOMContentLoaded", function() {
  // 이미지 변경 버튼 요소를 가져옵니다.
  let changeButton = document.querySelector('.edit-img-button-change');
  console.log(changeButton);
  // 파일 선택 input 요소를 가져옵니다.
  let fileInput = document.getElementById('file-input-img-change');
  console.log(fileInput);
  // 프로필 이미지 요소를 가져옵니다.
  let profileImage = document.getElementById('mypage-profile-img');
  console.log(profileImage);

  // 버튼에 클릭 이벤트를 추가하여 파일 선택 input을 클릭합니다.
  changeButton.addEventListener('click', function() {
    console.log(profileImage);
    // 사용자 상호작용을 유도하여 파일 선택 대화상자를 엽니다.
    if (fileInput) {
        fileInput.click();
        console.log(profileImage);
    }
});
console.log(profileImage);
  // 파일 선택 input에 change 이벤트를 추가하여 이미지를 변경합니다.
  // fileInput.addEventListener('change', function(e) {
  //     let file = e.target.files[0];
  //     if (file) {
  //         let reader = new FileReader();
  //         reader.readAsDataURL(file);
  //         console.log(reader.result);
  //         reader.onload = function() {
  //             profileImage.src = reader.result;
  //         }
  //     }
  // });
});

//나중에 보자 이미지 변경============================================











//비밀번호

const editPasswordInput = document.getElementById('edit-password-input');
const editPasswordResult = document.getElementById('edit-password-result');
const editPasswordParagraph = document.getElementById('edit-password-paragraph');

// 변수생성
let editPasswordCount = 0 ;
//패스워드박스 focus blur 처리 
editPasswordInput.addEventListener('focus', editPasswordInputFocusFunction);
editPasswordInput.addEventListener('blur',editPasswordInputBlurFunction);

//패스워드 박스 함수 처리 
function editPasswordInputFocusFunction(){
  if(editPasswordCount ===0 ){
    editPasswordInput.style.outline = "none";
    editPasswordInput.style.opacity = 0.7;
    editPasswordInput.style.borderWidth = "3px";
    editPasswordInput.style.borderColor = '#B2E8F7';
  }else{
    editPasswordInput.style.outline = "none";
    editPasswordInput.style.borderWidth = "3px";
    editPasswordInput.style.borderColor = "#FEB7B1";
    editPasswordInput.style.borderWidth = "3px";
  }
  if(this.value !== ''){
    editPasswordInput.style.outline = "none";
    editPasswordInput.style.opacity = 0.7;
    editPasswordInput.style.borderWidth = "3px";
    editPasswordInput.style.borderColor = '#B2E8F7';
  }
  editPasswordCount++;
}

function editPasswordInputBlurFunction(){
 
  editPasswordResult.innerText = "필수 입력 항목입니다.";
  editPasswordResult.style.color = rgb(255, 119, 119);
  editPasswordResult.style.fontSize = "12px";
  editPasswordInput.style.borderColor =  rgb(255, 119, 119);
  editPasswordInput.style.borderWidth = "1px";
  editPasswordInput.style.marginBottom = "5px";
  editPasswordParagraph.style.color =  rgb(255, 119, 119);
  if(this.value !== ''){
    editPasswordInput.style.opacity = 0.7;
    editPasswordInput.style.borderWidth = "1px";
    editPasswordInput.style.borderColor = 'gray';
    editPasswordParagraph.style.color =  'black';
    editPasswordResult.innerText = " ";

  }

}










//비밀번호 확인 


const editPasswordCheckInput = document.getElementById('edit-password-check-input');
const editPasswordCheckResult = document.getElementById('edit-password-check-result');
const editPasswordCheckParagraph = document.getElementById('edit-password-check-paragraph');

// 변수생성
let editPasswordCheckCount = 0 ;
//패스워드박스 focus blur 처리 
editPasswordCheckInput.addEventListener('focus', editPasswordCheckInputFocusFunction);
editPasswordCheckInput.addEventListener('blur',editPasswordCheckInputBlurFunction);

//패스워드 박스 함수 처리 
function editPasswordCheckInputFocusFunction(){
  if(editPasswordCheckCount ===0 ){
    editPasswordCheckInput.style.outline = "none";
    editPasswordCheckInput.style.borderWidth = "3px";
    editPasswordCheckInput.style.borderColor = '#B2E8F7';
    editPasswordCheckInput.style.opacity = 0.7;
  }else{
    editPasswordCheckInput.style.outline = "none";
    editPasswordCheckInput.style.borderWidth = "3px";
    editPasswordCheckInput.style.borderColor = "#FEB7B1";
    editPasswordCheckInput.style.borderWidth = "3px";
  }
  if(this.value !== ''){
    editPasswordCheckInput.style.outline = "none";
    editPasswordCheckInput.style.opacity = 0.7;
    editPasswordCheckInput.style.borderWidth = "3px";
    editPasswordCheckInput.style.borderColor = '#B2E8F7';
  }
  editPasswordCheckCount++;
}

function editPasswordCheckInputBlurFunction(){
 
  editPasswordCheckResult.innerText = "확인을 위해 비밀번호를 한 번 더 입력해주세요..";
  editPasswordCheckResult.style.color = rgb(255, 119, 119);
  editPasswordCheckResult.style.fontSize = "12px";
  editPasswordCheckInput.style.borderColor =  rgb(255, 119, 119);
  editPasswordCheckInput.style.borderWidth = "1px";
  editPasswordCheckInput.style.marginBottom = "5px";
  editPasswordCheckParagraph.style.color =  rgb(255, 119, 119);
  if(this.value !== ''){
    editPasswordCheckInput.style.opacity = 0.7;
    editPasswordCheckInput.style.borderWidth = "1px";
    editPasswordCheckInput.style.borderColor = 'gray';
    editPasswordCheckParagraph.style.color =  'black';
    editPasswordCheckResult.innerText = " ";

  }

}









//닉네임 


const editNicknameInput = document.getElementById('edit-nickname-input');
const editNicknameResult = document.getElementById('edit-nickname-result');
const editNicknameParagraph = document.getElementById('edit-nickname-paragraph');
const editNicknameDuplication = document.getElementsByClassName('edit-nickname-button');

// 변수생성
let editNicknameCount = 0 ;
//패스워드박스 focus blur 처리 
editNicknameInput.addEventListener('focus', editNicknameInputFocusFunction);
editNicknameInput.addEventListener('blur',editNicknameInputBlurFunction);

//패스워드 박스 함수 처리 
function editNicknameInputFocusFunction(){
  if(editNicknameCount ===0 ){
    editNicknameInput.style.outline = "none";
    editNicknameInput.style.borderWidth = "3px";
    editNicknameInput.style.borderColor = '#B2E8F7';
    editNicknameInput.style.opacity = 0.7;
  }else{
    editNicknameInput.style.outline = "none";
    editNicknameInput.style.borderWidth = "3px";
    editNicknameInput.style.borderColor = "#FEB7B1";
    editNicknameInput.style.borderWidth = "3px";
  }
  if(this.value !== ''){
    editNicknameInput.style.outline = "none";
    editNicknameInput.style.opacity = 0.7;
    editNicknameInput.style.borderWidth = "3px";
    editNicknameInput.style.borderColor = '#B2E8F7';
  }
  editNicknameCount++;
}

function editNicknameInputBlurFunction(){
 
  editNicknameResult.innerText = "필수 입력 항목입니다.";
  editNicknameResult.style.color = rgb(255, 119, 119);
  editNicknameResult.style.fontSize = "12px";
  editNicknameInput.style.borderColor =  rgb(255, 119, 119);
  editNicknameInput.style.borderWidth = "1px";
  editNicknameInput.style.marginBottom = "5px";
  editNicknameParagraph.style.color =  rgb(255, 119, 119);
  if(this.value !== ''){
    editNicknameInput.style.opacity = 0.7;
    editNicknameInput.style.borderWidth = "1px";
    editNicknameInput.style.borderColor = 'gray';
    editNicknameParagraph.style.color =  'black';
    editNicknameResult.innerText = " ";

  }

}

// HTMLCollection을 배열로 변환하여 forEach를 사용하여 각 요소에 이벤트 리스너를 추가합니다.
Array.from(editNicknameDuplication).forEach(button => {
  button.addEventListener('click', editNicknameDuplicationClickFunction);
});

function editNicknameDuplicationClickFunction() {
  console.log("클릭");
  editNicknameInput.style.opacity = 0.7;
  editNicknameInput.style.borderWidth = "1px";
  editNicknameInput.style.borderColor = 'gray';
  editNicknameParagraph.style.color = 'black';
  editNicknameResult.innerText = "사용가능한 닉네임입니다.";
  editNicknameResult.style.color = '#9CE1F7';

  // 값이 없으면
  if (editNicknameInput.value === '') {
      editNicknameResult.innerText = "필수 입력 항목입니다.";
      editNicknameResult.style.color = 'rgb(255, 119, 119)';
      editNicknameResult.style.fontSize = "12px";
      editNicknameInput.style.borderColor = 'rgb(255, 119, 119)';
      editNicknameInput.style.borderWidth = "1px";
      editNicknameInput.style.marginBottom = "5px";
      editNicknameParagraph.style.color = 'rgb(255, 119, 119)';
  }
}


//생년월일 

const editBirthResult = document.getElementById('edit-birth-result');
const editBirthParagraph = document.getElementById('edit-birth-paragraph');
const editBirthInput = document.getElementsByClassName('edit-birth-year');

for (let i = 0; i < editBirthInput.length; i++) {
  editBirthInput[i].addEventListener('blur', editBirthInputBlurFunction);
}

function editBirthInputBlurFunction() {
  console.log(this.value);

   if(this.value === ''){
    editBirthResult.innerText = " ";

  }else

  if(this.value >= 1900 && this.value <= 2024){
    editBirthResult.innerText = " ";

  }else{
    editBirthResult.style.fontSize = '12px';
      editBirthResult.innerText = "범위를 벗어났습니다. 다시 입력해주세요";
  }

};




//저장 버튼 

const editSaveButton = document.getElementsByClassName("edit-save-button");

// + 생년월일 월, 일 변수 생성
const editBirthMonthInput = document.getElementsByClassName("edit-birth-month");
const editBirthDayInput = document.getElementsByClassName("edit-birth-day");


for (let i = 0; i < editSaveButton.length; i++) {
  editSaveButton[i].addEventListener('click', editSaveButtonClickFunction);
}

//버튼을 클릭했을때 값이 입력되지않으면 빨간 표시가 뜨게 설정
function editSaveButtonClickFunction(){
  //비밀번호
  if(editPasswordInput.value ===''){
    console.log("값이 안들어있음");
    editPasswordResult.innerText = "필수 입력 항목입니다.";
    editPasswordResult.style.color = rgb(255, 119, 119);
    editPasswordResult.style.fontSize = "12px";
    editPasswordInput.style.borderColor =  rgb(255, 119, 119);
    editPasswordInput.style.borderWidth = "1px";
    editPasswordInput.style.marginBottom = "5px";
    editPasswordParagraph.style.color =  rgb(255, 119, 119);
  }
  //비밀번호 확인 
  if(editPasswordCheckInput.value === ''){
    editPasswordCheckResult.innerText = "확인을 위해 비밀번호를 한 번 더 입력해주세요..";
    editPasswordCheckResult.style.color = rgb(255, 119, 119);
    editPasswordCheckResult.style.fontSize = "12px";
    editPasswordCheckInput.style.borderColor =  rgb(255, 119, 119);
    editPasswordCheckInput.style.borderWidth = "1px";
    editPasswordCheckInput.style.marginBottom = "5px";
    editPasswordCheckParagraph.style.color =  rgb(255, 119, 119);
  }
  if(editPasswordCheckInput.value !== editPasswordInput.value){
    editPasswordCheckResult.innerText = "비밀번호와 일치하지 않습니다.";
    editPasswordCheckResult.style.color = rgb(255, 119, 119);
    editPasswordCheckResult.style.fontSize = "12px";
    editPasswordCheckInput.style.borderColor =  rgb(255, 119, 119);
    editPasswordCheckInput.style.borderWidth = "1px";
    editPasswordCheckInput.style.marginBottom = "5px";
    editPasswordCheckParagraph.style.color =  rgb(255, 119, 119);
  }
  //닉네임
  if(editNicknameInput.value === ''){
    editNicknameResult.innerText = "필수 입력 항목입니다.";
    editNicknameResult.style.color = rgb(255, 119, 119);
    editNicknameResult.style.fontSize = "12px";
    editNicknameInput.style.borderColor =  rgb(255, 119, 119);
    editNicknameInput.style.borderWidth = "1px";
    editNicknameInput.style.marginBottom = "5px";
    editNicknameParagraph.style.color =  rgb(255, 119, 119);
  }
  //생년월일 

  //년도
  for (let i = 0; i < editBirthInput.length; i++) {
    if(editBirthInput[i].value === ''){
      console.log("년도");
      editBirthResult.style.fontSize = '12px';
      editBirthResult.style.color = rgb(255, 119, 119);
      editBirthResult.innerText = "필수 입력 항목입니다.";
      // editBirthInput[i].style.borderColor = 'rgb(255, 119, 119)';
      // editBirthInput[i].style.borderWidth = "1px";
    }else{
      // editBirthResult.innerText = "";
      editBirthInput[i].style.borderColor = 'black';
    }
  }
  for (let i = 0; i < editBirthMonthInput.length; i++) {
    if (editBirthMonthInput[i].selectedIndex === 0) { // 선택된 옵션이 없는 경우
      editBirthResult.style.fontSize = '12px';
      editBirthResult.style.color = 'rgb(255, 119, 119)';
      editBirthResult.innerText = "필수 입력 항목입니다.";
      // editBirthMonthInput[i].style.borderColor = 'rgb(255, 119, 119)';
      // editBirthMonthInput[i].style.borderWidth = "1px";
    }else{
      editBirthMonthInput[i].style.borderColor = 'black';
    }
  }
  for (let i = 0; i < editBirthDayInput.length; i++) {
    if (editBirthDayInput[i].selectedIndex === 0) { // 선택된 옵션이 없는 경우
      editBirthResult.style.fontSize = '12px';
      editBirthResult.style.color = 'rgb(255, 119, 119)';
      editBirthResult.innerText = "필수 입력 항목입니다.";
      // editBirthDayInput[i].style.borderColor = 'rgb(255, 119, 119)';
      // editBirthDayInput[i].style.borderWidth = "1px";
    }else{
      editBirthDayInput[i].style.borderColor = 'black';
    }
  }

};