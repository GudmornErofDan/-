document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');

    if (password !== confirmPassword) {
      errorMessage.textContent = 'Пароли не совпадают';
      successMessage.textContent = '';
    } else {
      errorMessage.textContent = '';
      successMessage.textContent = 'Регистрация прошла успешно';

     
    }
  });