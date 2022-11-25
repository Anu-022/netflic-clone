const faqList = document.querySelectorAll('.faq-question');
console.log(faqList);
let plusIcon = document.querySelector(".plus-btn");
let closeIcon= document.querySelector(".close-btn");



function showAccordion(event) {
   let answer = event.currentTarget;
   let showdiv = answer.nextElementSibling;
   showdiv.classList.add('show-answer');
   if(!answer.classList.contains('show-a'))
   
   console.log(answer);
   answer.nextElementSibling.style.display ="block";
   console.log(answer.nextElementSibling);
   
}

faqList.forEach(list => {
  list.addEventListener('click', function(event) {
    let targetBtn =event.currentTarget;
    let showdiv = targetBtn.nextElementSibling;
    let icons = targetBtn.children;

    if(showdiv.style.display === 'none') {
      showdiv.style.display = 'block';
      icons[0].style.display = 'none';
      icons[1].style.display = 'block'
    } else {
      showdiv.style.display = 'none';
      icons[1].style.display = 'none'
      icons[0].style.display = 'block';
    }
  })

});
  
