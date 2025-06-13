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

    // 4. Map
    log("Nomi e voti degli studenti", tutti.map(studente => `${studente.nome}: ${studente.voto}`));

    // 5. Filter
    log("Studenti presenti", tutti.filter(studente => studente.presente));

    // 6. forEach
    const ul = document.createElement("ul");

    tutti.forEach(studente => {
        const li = document.createElement("li");
        li.textContent = `${studente.nome} - ${studente.presente ? "✅" : "❌"}`;
        ul.appendChild(li);
    });

    out.appendChild(ul);

    // 7. Destructuring
    const presentaStudente = ({ nome, voto, presente }) => `Ciao, sono ${nome}, ho ${voto} e sono ${presente ? "presente" : "assente"}.`;
    log("Presentazione dello studente", tutti.map(studente => presentaStudente(studente)));
});

const popola = (lista) => {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = ""; // Pulisce la lista precedente
    lista.forEach(studente => {
        const li = document.createElement("li");
        li.textContent = `${studente.nome} - Voto: ${studente.voto} - Presente: ${studente.presente ? "✅" : "❌"}`;
        li.classList.toggle(studente.voto >= 6 ? "promosso" : "bocciato"); // Aggiunge la classe in base al voto
        studentList.appendChild(li);
    });
}

// Inizializza la lista degli studenti
const inizializzaListaStudenti = () => popola(studenti);

// Filtra la lista degli studenti escludendo il nome inserito
const filtraStudenti = (nome) => popola(studenti.filter(studente => studente.nome !== nome));

// Rimuovi uno studente dalla lista
const rimuoviStudente = () => {
    const nome = document.getElementById("student-name").value.trim();

    if (nome === "") {
        log("Errore", "Il nome dello studente non può essere vuoto.");
        return;
    }

    const index = studenti.findIndex(studente => studente.nome === nome);
    if (index !== -1) {
        filtraStudenti(nome);
        log("Studente rimosso", `Studente ${nome} rimosso con successo.`);
    } else { log("Errore", `Studente ${nome} non trovato.`); }
}

// Applica classi diverse a seconda che lo studente sia promosso o bocciato.
const applicaClassi = () => {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = ""; // Pulisce la lista precedente
    studenti.forEach(studente => {
        const li = document.createElement("li");
        li.textContent = `${studente.nome} - Voto: ${studente.voto} - Presente: ${studente.presente ? "✅" : "❌"}`;
        li.className = studente.voto >= 6 ? "promosso" : "bocciato"; // Aggiunge la classe in base al voto
        studentList.appendChild(li);
    });
}

inizializzaListaStudenti(); // Inizializza la lista degli studenti al caricamento della pagina