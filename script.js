document.addEventListener("DOMContentLoaded", function() {
    // Get references to navigation buttons
    const aboutButton = document.getElementById("about-button");
    const skillsButton = document.getElementById("skills-button");
    const projectsButton = document.getElementById("projects-button");
    const hireButton = document.getElementById("hire-button");
    const hireMeButton = document.getElementById("hire-me-button");

    // Add event listeners to navigation buttons
    aboutButton.addEventListener("click", function() {
        showSection("education");
    });

    skillsButton.addEventListener("click", function() {
        showSection("skills");
    });

    projectsButton.addEventListener("click", function() {
        showSection("projects");
    });

    hireButton.addEventListener("click", function() {
        showSection("contact");
    });

    hireMeButton.addEventListener("click", function() {
        showSection("contact");
    });

    // Function to show specific section and hide others
    function showSection(sectionId) {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

   
});
