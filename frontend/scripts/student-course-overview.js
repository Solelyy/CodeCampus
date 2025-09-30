const tabs = document.querySelectorAll('.course-tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active class to the clicked tab
    tab.classList.add('active');
  });
});
