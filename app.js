const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        const inactiveSvg = faq.querySelector(".inactive-svg");
        const activeSvg = faq.querySelector(".active-svg");

        faq.addEventListener('click', () => {
            faq.classList.toggle("active");

            // Cambiar el SVG según la presencia de la clase "active"
            // changes svg imagen
            
            if (faq.classList.contains("active")) {
                inactiveSvg.style.display = "none";
                activeSvg.style.display = "block";
            } else {
                inactiveSvg.style.display = "block";
                activeSvg.style.display = "none";
            }
        });
    });