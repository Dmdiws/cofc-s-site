document.getElementById('forget_password').addEventListener('click', function() {
    document.getElementById('reset_passwordMenu').classList.toggle('show');
    document.getElementById('authorise_section').classList.toggle('show');
});

document.getElementById('reset_confirm').addEventListener('click', function() {
    document.getElementById('reset_passwordMenu').classList.toggle('show');
    document.getElementById('Confirm').classList.toggle('show');
});

document.getElementById('confirm_password_button').addEventListener('click', function() {
    document.getElementById('Confirm').classList.toggle('show');
    document.getElementById('reset').classList.toggle('show');
});

document.getElementById('final_confirm').addEventListener('click', function() {
    document.getElementById('reset').classList.toggle('show');
    document.getElementById('message').classList.toggle('show');
});