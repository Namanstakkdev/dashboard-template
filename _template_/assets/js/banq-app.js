// $(document).ready(function () {

const accordionItems = document.querySelectorAll(".accordion-item");


const resetAccordions = (targetIndex) => {
    accordionItems.forEach((accordion, index) => {
        const accordionContent = accordion.querySelector(".bloc-body");
        const accordionTrigger = accordion.querySelector(".accordion-trigger");
        if (targetIndex != index) {
            accordion.classList.remove("is-active");
            accordionContent.style.height = 0;
            accordionTrigger.setAttribute("aria-expanded", "false");
        }
    });
};


const setBodyContentHeight = (index) => {
    const currentAccordion = accordionItems[index];
    const accordionContent = currentAccordion.querySelector(".bloc-body");
    const accordionTrigger = currentAccordion.querySelector(".accordion-trigger");

    if (currentAccordion.classList.contains("is-active")) {
        accordionContent.style.height = `${accordionContent.scrollHeight}px`;
        accordionTrigger.setAttribute("aria-expanded", "true");
    } else {
        accordionContent.style.height = 0;
        accordionTrigger.setAttribute("aria-expanded", "false");
    }
}

const toggleAccordion = (index) => {
    // resetAccordions(index);
    const currentAccordion = accordionItems[index];

    currentAccordion.classList.toggle("is-active");

    const accordionContent = currentAccordion.querySelector(".bloc-body");
    const accordionTrigger = currentAccordion.querySelector(".accordion-trigger");

    if (currentAccordion.classList.contains("is-active")) {
        accordionContent.style.height = `${accordionContent.scrollHeight}px`;
        accordionTrigger.setAttribute("aria-expanded", "true");
        // accordionTrigger.setAttribute("aria-expanded", "true");
    } else {
        accordionContent.style.height = 0;
        accordionTrigger.setAttribute("aria-expanded", "false");
    }
};

window.addEventListener("load", () => {

    accordionItems.forEach((accordion, index) => {
        const accordionTrigger = accordion.querySelector(".accordion-trigger");
        setBodyContentHeight(index);
        accordionTrigger.addEventListener("click", () => {
            toggleAccordion(index);
        });

    });
});



function showModal(e = null, modal) {
    e.preventDefault();
    modal.classList.add("shown");
}

function hideModal(modal) {
    modal.classList.remove("shown");
}

function hideModals() {
    Array.prototype.forEach.call(document.querySelectorAll('.custom-modal'), function (el) {
        el.classList.remove('shown');
    });
}


window.addEventListener("DOMContentLoaded", () => {
    // Handle modal events
    const addFactureBtn = document.getElementById("ajoutFacture");
    const addFactureModal = document.getElementById("addFactureModal");
    let closeAddFactureModalBtn = document.getElementById("closeAddFactureModalBtn");

    
    if (document.getElementById("ajoutFacture")) {
        addFactureBtn.addEventListener("click", (e) => {
            showModal(e, addFactureModal);
        });
    }

    closeAddFactureModalBtn.addEventListener("click", () => {
        hideModal(addFactureModal);
    });

    if (document.getElementById("payerFactureBtn")) {
        const payFactureBtn = document.getElementById("payerFactureBtn");
        const payFactureModal = document.getElementById("payFactureModal");
        const closePayFactureModalBtn = document.getElementById("closePayFactureModalBtn");

        payFactureBtn.addEventListener("click", (e) => {
            // e.preventDefault();
            showModal(e, payFactureModal);

        });

        closePayFactureModalBtn.addEventListener("click", (e) => {
            // e.preventDefault();
            hideModal(payFactureModal);
        });
    }

    Array.prototype.forEach.call(document.querySelectorAll('.custom-modal-backdrop'), function (el) {
        el.addEventListener('click', function (event) {
            const parent = el.parentNode;
            parent.classList.remove('shown');
        });
    });

    console.log(document.getElementsByClassName("pay-facture-btn").length);

    if (document.getElementsByClassName("add-facture-btn").length > 0) {
        const btnsAddFacture = document.getElementsByClassName("add-facture-btn")[0]
        const addFactureModal = document.getElementById("addFactureModal");
        btnsAddFacture.addEventListener("click", function (e) {
            // e.preventDefault();
            hideModals();
            showModal(e, addFactureModal);
        });
    }
    if (document.getElementsByClassName("pay-facture-btn").length > 0) {
        const btnsPayFacture = document.getElementsByClassName("pay-facture-btn")[0]
        const payFactureModal = document.getElementById("payFactureModal");
        btnsPayFacture.addEventListener("click", function (e) {
            // e.preventDefault();
            hideModals();
            showModal(e, payFactureModal);
        });
    }
});

// End of events modal
// });