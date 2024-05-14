const ageRangeBtn = document.querySelectorAll('.everyLife-btn-span button[type="button"]');
const everyLifeContent = document.querySelectorAll('.everyLife-contents');
console.log(everyLifeContent);

NodeList.prototype.filter = Array.prototype.filter;

for(let i = 0; i < ageRangeBtn.length; i++){
  ageRangeBtn[i].addEventListener('click', (e) =>{
    e.target.filter()
  })
}