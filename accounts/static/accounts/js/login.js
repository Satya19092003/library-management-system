
    const openBtn = document.getElementById("openSignup");
    const modal = document.getElementById("signup");
    const closeBtn = document.getElementById("closeSignup");

    const openForgot = document.getElementById("openForgot");
    const model = document.getElementById("verify");
    const closeForgot = document.getElementById("closeForgot");

    openBtn.onclick = () => {
        modal.style.display = "flex";
    };

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };

    openForgot.onclick = () => {
        model.style.display = "flex";
    }

    closeForgot.onclick = () => {
        model.style.display = "none";
    }

    window.onclick = (e) => {
        if(e.target === model) {
            model.style.display = "none";
        }
    }
