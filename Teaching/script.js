document.addEventListener('DOMContentLoaded', function() {
    const dateContents = document.querySelectorAll('.date-content');

    dateContents.forEach(function(content) {
        content.addEventListener('dblclick', function() {
            content.classList.toggle('active');
        });
    });
});
