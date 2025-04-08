
      // Add click event listeners to navigation links
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();

          // Remove active class from all links
          document.querySelectorAll(".nav-link").forEach((item) => {
            item.classList.remove("active");
          });

          // Add active class to clicked link
          this.classList.add("active");

          // Here you would normally also load content for the selected section
          console.log(`Navigated to ${this.dataset.section}`);
        });
      });
