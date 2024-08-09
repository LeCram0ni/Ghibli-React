import React, { useState, useEffect } from "react";

function QuoteGenerator() {
    const [quote, setQuote] = useState(""); // Zitat-Text
    const [author, setAuthor] = useState(""); // Zitat-Autor

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            const data = await response.json();

            setQuote(data.quote); // Aktualisieren des Zitats
            setAuthor(data.author); // Aktualisieren des Autors

        } catch (error) {
            console.error("Fehler beim Abrufen des Zitats:", error);
        }
    };

    useEffect(() => {
        fetchQuote(); // Abrufen eines Zitats beim ersten Laden der Komponente
    }, []);

    return (
        <div id="quote-container">
            <h1>Quote Generator</h1>
            <div id="quote-container-inner">
                <p id="quote">"{quote}"</p>
                <p><strong>- {author}</strong></p>
            </div>
            <button onClick={fetchQuote}>Neues Zitat generieren</button>
        </div>
    );
}

export default QuoteGenerator;
