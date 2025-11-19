import React from "react";
import BookCard from "./bookcard";

const books = [
    {
        id: 'b1',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        genre: 'Thriller',
        year: 2019,
        cover: '/assets/covers/silent-patient.jpg',
        summary: 'A shocking psychological thriller about a woman who stops speaking after a violent act.'
    },
    {
        id: 'b2',
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        genre: 'Fiction',
        year: 2018,
        cover: '/assets/covers/crawdads.jpg',
        summary: 'A coming-of-age murder mystery set in the marshes of North Carolina.'
    },
    {
        id: 'b3',
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Memoir',
        year: 2018,
        cover: '/assets/covers/educated.jpg',
        summary: 'A memoir about a woman who grows up in a survivalist family and seeks an education.'
    },
    {
        id: 'b4',
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-help',
        year: 2018,
        cover: '/assets/covers/atomic-habits.jpg',
        summary: 'Practical strategies to form good habits, break bad ones, and master tiny behaviors.'
    },
    {
        id: 'b5',
        title: 'The Night Circus',
        author: 'Erin Morgenstern',
        genre: 'Fantasy',
        year: 2011,
        cover: '/assets/covers/night-circus.jpg',
        summary: 'A phantasmagorical novel centered on a magical competition between two young illusionists.'
    }
];

function booklist() {
    return (
        <div className="books-list">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );

}

export default booklist;
