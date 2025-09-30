// professor-create-course.js

// This script manages the display of the welcome message based on course availability
document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');
    const welcomeContainer = document.getElementById('create-courses');

    const hasCourses = courseList.querySelectorAll('.course-card').length > 0;

    if (hasCourses) {
        welcomeContainer.style.display = 'none';
    } else {
        welcomeContainer.style.display = 'block';}
});
