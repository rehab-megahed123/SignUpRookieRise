document.getElementById("uploadBox").addEventListener("click", function () {
    document.getElementById("logoUpload").click();
});

document.getElementById("browseBtn").addEventListener("click", function (e) {
    e.stopPropagation(); 
    document.getElementById("logoUpload").click();
});

const inputs = document.querySelectorAll(".custom-input");

inputs.forEach(input => {
    input.addEventListener("blur", () => {
        const errorMsg = input.nextElementSibling;

        if (input.value.trim() === "") {
            input.classList.add("error");
            errorMsg.textContent = "This field is required";
        } else {
            input.classList.remove("error");
            errorMsg.textContent = "";
        }
    });

    input.addEventListener("focus", () => {
        const errorMsg = input.nextElementSibling;
        input.classList.remove("error");
        errorMsg.textContent = "";
    });
});
