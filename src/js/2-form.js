const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

 
form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value.trim();  
  saveToLocalStorage();  
});


const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

 
window.addEventListener('load', loadFromLocalStorage);

form.addEventListener('submit', (e) => {
  e.preventDefault();  

  if (formData.email === "" || formData.message === "") {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);  

  form.reset();  
  localStorage.removeItem(STORAGE_KEY);  
  formData.email = "";
  formData.message = "";
});