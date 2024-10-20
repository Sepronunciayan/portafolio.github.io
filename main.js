let Proyectos = document.getElementById("Proyectos");

Proyectos.addEventListener("click", () => {
    if (derechaViewport.style.display === "flex") {
        derechaViewport.style.display = "none";
        izquierdaViewport.style.display = "none";
        viewportSpy.style.display = "flex";
        
    } else {
        derechaViewport.style.display = "flex";
        izquierdaViewport.style.display = "flex";
        viewportSobreMi.style.display = "none";
        viewportContacto.style.display = "none";
        viewportSpy.style.display = "none";
    }
});

// -----------------------------------------------------------------------------

let sobreMi = document.getElementById("sobreMi");

sobreMi.addEventListener("click", () => {
    if (viewportSobreMi.style.display === "flex") {
        viewportSobreMi.style.display = "none";
        viewportSpy.style.display = "flex";
    } else {
        viewportSobreMi.style.display = "flex";
        viewportContacto.style.display = "none";
        derechaViewport.style.display = "none";
        izquierdaViewport.style.display = "none";
        viewportSpy.style.display = "none";
    }
});

// -----------------------------------------------------------------------------

let contacto = document.getElementById("contacto");

contacto.addEventListener("click", () => {
    if (viewportContacto.style.display === "flex") {
        viewportContacto.style.display = "none";
        viewportSpy.style.display = "flex";
    } else {
        viewportContacto.style.display = "flex";
        viewportSobreMi.style.display = "none";
        derechaViewport.style.display = "none";
        izquierdaViewport.style.display = "none";
        viewportSpy.style.display = "none";
    }
});

// -----------------------------------------------------------------------------

let Proyectos1 = document.getElementById("Proyectos1");

proyectos1.style.tra