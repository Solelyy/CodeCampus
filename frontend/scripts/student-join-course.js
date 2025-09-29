// js to nung searchbar,,,,, testing lang tol

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-courses");
    const courses = document.querySelectorAll(".course-card");

    // pag walang match na course upon entry ng shi
    const noResultMsg = document.createElement("p");
    noResultMsg.textContent = "No courses available.";
    noResultMsg.style.display = "none";
    noResultMsg.style.color = "#666";
    noResultMsg.style.fontStyle = "italic";
    noResultMsg.id = "no-result-message";

    // display kurso pag match
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

        // logic ng matching (pakicheck po kung gumagana)
        if (!found && input.trim() !== "") {
            noResultMsg.style.display = "block";
        } else {
            noResultMsg.style.display = "none";
        }
    });
});
