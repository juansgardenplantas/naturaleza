
// ==========================================================
// JUAN'S GARDEN
// ==========================================================


// ==========================================================
// HEADER
// ==========================================================

const header =
    document.getElementById("header");


function actualizarHeader() {

    if (window.scrollY > 40) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    actualizarHeader
);


actualizarHeader();


// ==========================================================
// MENÚ MÓVIL
// ==========================================================

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener(
    "click",
    function () {

        const abierto =
            nav.classList.toggle(
                "active"
            );


        menuToggle.setAttribute(
            "aria-expanded",
            abierto
        );

    }
);


document
    .querySelectorAll(".menu a")
    .forEach(
        function (enlace) {

            enlace.addEventListener(
                "click",
                function () {

                    nav.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );


window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 900
        ) {

            nav.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


// ==========================================================
// BOTÓN VOLVER ARRIBA
// ==========================================================

const backToTop =
    document.getElementById(
        "backToTop"
    );


function actualizarBotonArriba() {

    if (
        window.scrollY > 500
    ) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );

    }

}


window.addEventListener(
    "scroll",
    actualizarBotonArriba
);


actualizarBotonArriba();


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ==========================================================
// FORMULARIO -> WHATSAPP
// ==========================================================

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const nombre =
            document
                .getElementById(
                    "nombre"
                )
                .value
                .trim();


        const telefono =
            document
                .getElementById(
                    "telefono"
                )
                .value
                .trim();


        const correo =
            document
                .getElementById(
                    "correo"
                )
                .value
                .trim();


        const servicio =
            document
                .getElementById(
                    "servicio"
                )
                .value;


        const mensaje =
            document
                .getElementById(
                    "mensaje"
                )
                .value
                .trim();


        if (
            nombre === "" ||
            telefono === ""
        ) {

            formMessage.style.display =
                "block";

            formMessage.textContent =
                "Por favor completa tu nombre y teléfono.";

            return;

        }


        let texto = "";

        texto +=
            "Hola Juan's Garden, quisiera solicitar una cotización.";

        texto +=
            "\n\n";

        texto +=
            "*Nombre:* " + nombre;

        texto +=
            "\n";

        texto +=
            "*Teléfono:* " + telefono;

        texto +=
            "\n";

        texto +=
            "*Correo:* " +
            (
                correo !== ""
                    ? correo
                    : "No indicado"
            );

        texto +=
            "\n";

        texto +=
            "*Servicio:* " +
            (
                servicio !== ""
                    ? servicio
                    : "No especificado"
            );

        texto +=
            "\n\n";

        texto +=
            "*Consulta:* " +
            (
                mensaje !== ""
                    ? mensaje
                    : "Quisiera recibir más información."
            );


        const url =

            "https://wa.me/51991063488" +

            "?text=" +

            encodeURIComponent(
                texto
            );


        formMessage.style.display =
            "block";

        formMessage.textContent =
            "Abriendo WhatsApp...";


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }
);
