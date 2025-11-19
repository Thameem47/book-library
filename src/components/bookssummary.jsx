import React from "react";

const books = [
    { id: 'b1', title: 'The Silent Patient', author: 'Alex Michaelides', genre: 'Thriller', year: 2019 },
    { id: 'b2', title: 'Where the Crawdads Sing', author: 'Delia Owens', genre: 'Fiction', year: 2018 },
    { id: 'b3', title: 'Educated', author: 'Tara Westover', genre: 'Memoir', year: 2018 },
    { id: 'b4', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-help', year: 2018 },
    { id: 'b5', title: 'The Night Circus', author: 'Erin Morgenstern', genre: 'Fantasy', year: 2011 }
];

function booksummary() {
    const totalBooks = books.length;

    // Manually calculate most common genre
    const genreCounts = books.reduce((acc, b) => {
        acc[b.genre] = (acc[b.genre] || 0) + 1;
        return acc;
    }, {});

    let mostCommonGenre = '';
    let highestCount = 0;
    for (const [genre, count] of Object.entries(genreCounts)) {
        if (count > highestCount) {
            highestCount = count;
            mostCommonGenre = genre;
        }
    }

    return (
        <div className="book-summary">
            <h2>Collection Summary</h2>
            <p>Total books: {totalBooks}</p>
            <p>
                Most common genre: {mostCommonGenre} {highestCount > 0 ? `(${highestCount} ${highestCount === 1 ? 'book' : 'books'})` : ''}
            </p>
        </div>
    );
}

export default booksummary;