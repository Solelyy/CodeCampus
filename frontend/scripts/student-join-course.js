//PS. chatgpt generated 
// js to nung searchbar
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-courses");
    const courses = document.querySelectorAll(".course-card");

    // if walang match na course upon entry
    const noResultMsg = document.createElement("p");
    noResultMsg.textContent = "No courses available.";
    noResultMsg.style.display = "none";
    noResultMsg.style.color = "#666";
    noResultMsg.style.fontStyle = "italic";
    noResultMsg.id = "no-result-message";

    // display course if match
    const container = document.querySelector(".joined-courses-container");
    container.parentNode.insertBefore(noResultMsg, container.nextSibling);

    searchInput.addEventListener("keyup", () => {
        const input = searchInput.value.toLowerCase();
        let found = false;

        courses.forEach(course => {
            const title = course.querySelector("h3").textContent.toLowerCase();
            const author = course.querySelector(".course-info p").textContent.toLowerCase();

            if (title.includes(input) || author.includes(input)) {
                course.style.display = "block";
                found = true;
            } else {
                course.style.display = "none";
            }
        });

        // logic ng matching
        if (!found && input.trim() !== "") {
            noResultMsg.style.display = "block";
        } else {
            noResultMsg.style.display = "none";
        }
    });
});

//function nung button sa overlay
document.addEventListener("DOMContentLoaded", () => {
    const joinBtn = document.getElementById("join-course-btn");
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("join-modal");
    const submitBtn = document.getElementById("join-course-submit");
    const courseCodeInput = document.getElementById("course-code");

//button ng overlay (Join Private Course)
    joinBtn.addEventListener("click", () => {
        overlay.style.display = "block";
        modal.style.display = "block";
    });

//click outside overlay para magclose
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        modal.style.display = "none";
    });

//reserved para sa code input
    submitBtn.addEventListener("click", () => {
        const code = courseCodeInput.value.trim();
        if (code) {
            alert(`You entered code: ${code}`); 
            //error misij
        } else {
            alert("Please enter a course code.");
        }
    });
});
