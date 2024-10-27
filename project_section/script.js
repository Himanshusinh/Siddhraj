
    document.addEventListener("DOMContentLoaded", function () {
        const commercialRadio = document.getElementById("commercial");
        const residentialRadio = document.getElementById("residential");
        const commercialSection = document.querySelector(".project_info_commercial");
        const residentialSection = document.querySelector(".project_info_residential");

        commercialRadio.addEventListener("change", function () {
            if (commercialRadio.checked) {
                commercialSection.style.display = "flex";
                residentialSection.style.display = "none";
            }
        });

        residentialRadio.addEventListener("change", function () {
            if (residentialRadio.checked) {
                residentialSection.style.display = "flex";
                commercialSection.style.display = "none";
            }
        });
    });

