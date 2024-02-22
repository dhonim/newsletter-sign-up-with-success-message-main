const formEl=document.querySelector('form')
const inputEl=document.querySelector('input')
const successCardEl=document.getElementById('success-card');
const signupCardEl=document.getElementById('sign-up-card');
const errorMsgEl=document.getElementById('error-msg');
const successCardBtnEl=document.querySelector('#success-card button');

successCardBtnEl.addEventListener("click",()=>{
signupCardEl.style='block'
successCardEl.classList.add('hidden');
inputEl.classList.remove('border-red-500', 'text-red-500', 'bg-red-200')
errorMsgEl.classList.add('hidden');
formEl.reset();
})


formEl.addEventListener("submit",(e)=>{
  e.preventDefault();
 
 const isValid=isValidEmail(inputEl.value);
 if(isValid){
  // console.log(successCardEl,signupCardEl,errorMsgEl);
  successCardEl.classList.remove('hidden');
  signupCardEl.style.display='none'
 }else{
  inputEl.required=true;
   inputEl.classList.add('border-red-500', 'text-red-500', 'bg-red-200')
   errorMsgEl.classList.remove('hidden');
 }
})

function isValidEmail(email) {
// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Test the email against the regex
return emailRegex.test(email);
}