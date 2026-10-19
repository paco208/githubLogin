const form = document.querySelector('#signup-form');
const socialButtons = document.querySelectorAll('.social');

const showUnavailable = () => {
    Swal.fire({
        icon: 'info',
        title: 'Sign up unavailable',
        text: 'This is a practice copy of the GitHub sign-up page, so creating an account is disabled.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#238636',
        background: '#151b23',
        color: '#e6edf3',
        iconColor: '#4493f8',
        width: 352
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    showUnavailable();

    form.reset();
});

socialButtons.forEach((button) => {
    button.addEventListener('click', showUnavailable);
});
