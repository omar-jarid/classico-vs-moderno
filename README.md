# Statistica Studenti

Questo progetto è una semplice applicazione web che analizza una lista di studenti utilizzando le moderne funzionalità di JavaScript (ES6+). Permette di visualizzare e manipolare i dati degli studenti tramite un'interfaccia interattiva.

## Come funziona

Apri `index.html` in un browser. Premi il pulsante **Esegui Analisi** per vedere i risultati delle varie operazioni sugli studenti.

## Funzionalità principali

Nel file [`script.js`](script.js) sono presenti 7 step, ognuno dei quali mostra una caratteristica moderna di JavaScript:

1. **Valutazione del primo studente**  
   Viene valutato il voto del primo studente della lista. Se il voto è maggiore o uguale a 6, lo studente è promosso, altrimenti è bocciato.

2. **Spread Operator**  
   Vengono aggiunti due nuovi studenti all'array originale usando lo spread operator (`...`). Questo permette di creare una nuova lista senza modificare quella originale.

3. **Rest Operator**  
   Viene creata una funzione che raggruppa un numero variabile di nomi in un array, sfruttando il rest operator (`...`).

4. **Map**  
   Si genera una lista di stringhe che mostra nome e voto di ogni studente, utilizzando il metodo `map`.

5. **Filter**  
   Si filtra la lista per mostrare solo gli studenti presenti, usando il metodo `filter`.

6. **forEach**  
   Viene creata una lista HTML (`ul`) che mostra tutti gli studenti e la loro presenza, sfruttando `forEach` per generare ogni elemento della lista.

7. **Destructuring**  
   Si utilizza il destructuring degli oggetti per creare una funzione di presentazione che mostra nome, voto e presenza di ciascuno studente.

## Struttura del progetto

- [`index.html`](index.html): pagina principale
- [`css/style.css`](css/style.css): stile della pagina
- [`script.js`](script.js): logica dell'applicazione

## Requisiti

- Un browser moderno

---

Progetto didattico per mostrare le differenze tra JavaScript classico e moderno.