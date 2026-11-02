const form = document.querySelector('#form form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    Swal.fire({
        icon: 'info',
        title: 'Password reset unavailable',
        text: 'This is a practice copy of the GitHub password reset page, so sending a reset email is disabled.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#238636',
        background: '#151b23',
        color: '#e6edf3',
        iconColor: '#4493f8',
        width: 352
    });

    form.reset();
});
