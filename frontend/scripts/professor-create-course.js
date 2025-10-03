// professor-create-course.js

// This script manages the display of the welcome message based on course availability
document.addEventListener('DOMContentLoaded', () => {
    const addActivities = document.getElementById('add-activities');
    const createCourses = document.getElementById('create-courses');
    const previewCourse = document.getElementById('preview-course');

    createCourses.style.display = 'block';
    addActivities.style.display = 'none';
    previewCourse.style.display = 'none';

    document.getElementById('create-course-btn').addEventListener('click', () => {

        const inputs = createCourses.querySelectorAll('input[required],textarea[required]');
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
                input.reportValidity(); // show browser's error popup
            }
        });

        if (allFilled) {
            addActivities.style.display = 'block';
            createCourses.style.display = 'none';
        }
    });

    document.getElementById('cancel-create-activity').addEventListener('click', () => {
        addActivities.style.display = 'none';
        createCourses.style.display = 'block';
    });

    document.getElementById('create-activity-btn').addEventListener('click', () => {
        const inputs = addActivities.querySelectorAll('input[required], textarea[required]');
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
                input.reportValidity(); // show browser's error popup
            }
        });

        if (allFilled) {
            addActivities.style.display = 'none';
            previewCourse.style.display = 'block';
        }
    });

});
