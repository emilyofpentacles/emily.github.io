// Function to toggle project content visibility
function toggleDescription(header) {
    var projectContent = header.nextElementSibling;

    // Toggle the visibility of the project description
    if (projectContent.style.display === 'none' || projectContent.style.display === '') {
      projectContent.style.display = 'block';
    } else {
      projectContent.style.display = 'none';
    }
  }

  // Attach click event listeners to all project headers
  var projectHeaders = document.querySelectorAll('.project h3');
  for (var i = 0; i < projectHeaders.length; i++) {
    projectHeaders[i].addEventListener('click', function() {
      toggleDescription(this);
    });
  }