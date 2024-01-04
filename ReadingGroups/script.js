function toggleDate(dateId) {
    const allDateContents = document.querySelectorAll('.date-content');
    allDateContents.forEach(content => content.classList.remove('active'));

    const selectedDateContent = document.getElementById('date-' + dateId);
    selectedDateContent.classList.add('active');
}
