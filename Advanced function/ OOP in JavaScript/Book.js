export class Book {
    constructor(title, author, publicationYear) {
        this._title = title;
        this._author = author;
        this._publicationYear = publicationYear;
    }

    // Геттери та сеттери
    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value === 'string') {
            this._title = value;
        } else {
            console.log("Назва повинна бути рядком");
        }
    }

    // Інші геттери та сеттери...

    printInfo() {
        console.log(`Назва: ${this._title}, Автор: ${this._author}, Рік видання: ${this._publicationYear}`);
    }

    static findOldestBook(books) {
        return books.reduce((oldest, book) => oldest._publicationYear < book._publicationYear ? oldest : book);
    }
}




