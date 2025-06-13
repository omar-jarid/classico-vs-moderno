const studenti = [
    { nome: "Mario Rossi", voto: 8, presente: true },
    { nome: "Luigi Bianchi", voto: 5, presente: false },
    { nome: "Anna Verdi", voto: 9, presente: true },
    { nome: "Beatrice Neri", voto: 6, presente: true },
    { nome: "Carlo Blu", voto: 4, presente: true },
    { nome: "Davide Rosa", voto: 7, presente: false },
    { nome: "Elena Gialli", voto: 10, presente: true },
    { nome: "Federico Viola", voto: 3, presente: false },
    { nome: "Giorgia Azzurra", voto: 8, presente: true },
    { nome: "Lorenzo Marrone", voto: 2, presente: false },
    { nome: "Martina Rosa", voto: 6, presente: true },
    { nome: "Simone Nero", voto: 5, presente: true }
];

const btn = document.getElementById("run");
const out = document.getElementById("output");

function log(titolo, dato) {
    const h4 = document.createElement("h4");
    const pre = document.createElement("pre");
    h4.textContent = titolo;
    pre.textContent = JSON.stringify(dato, null, 2);
    out.append(h4, pre);
}

btn.addEventListener("click", () => {
    out.innerHTML = ""; // Pulisce l'output precedente

    // INSERIRE GLI STEP.
    // 1. Valuta il voto del primo studente: se voto >= 6, lo studente è promosso, altrimenti è bocciato.
    const primoStudente = studenti[0];
    const esitoPrimoStudente = primoStudente.voto >= 6 ? "Promosso" : "Bocciato";
    log("Esito del primo studente", `${primoStudente.nome} - Voto: ${primoStudente.voto} - Esito: ${esitoPrimoStudente}`);

    // 2. Spread
    const studente1 = { nome: "Giulia Rossi", voto: 7, presente: true };
    const studente2 = { nome: "Marco Bianchi", voto: 5, presente: false };
    const tutti = [...studenti, studente1, studente2];
    log("Classe aggiornata", tutti);

    // 3. Rest
    const raggruppaNomi = (...nomi) => nomi; 
    log("Raggruppamento nomi", raggruppaNomi("Mario", "Luigi", "Anna", "Beatrice", "Carlo", "Davide", "Elena", "Federico", "Giorgia", "Lorenzo", "Martina", "Simone"));
});