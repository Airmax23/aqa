export class Book {
    constructor(title, author, publicationYear) {
        this._title = title;
        this._author = author;
        this._publicationYear = publicationYear;
    }

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

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value === 'string') {
            this._author = value;
        } else {
            console.log("Автор повинен бути рядком");
        }
    }

    get publicationYear() {
        return this._publicationYear;
    }

    set publicationYear(value) {
        if (Number.isInteger(value) && value > 0) {
            this._publicationYear = value;
        } else {
            console.log("Рік видання повинен бути позитивним цілим числом");
        }
    }

    printInfo() {
        console.log(`Назва: ${this._title}, Автор: ${this._author}, Рік видання: ${this._publicationYear}`);
    }

    static findOldestBook(books) {
        return books.reduce((oldest, book) => oldest.publicationYear < book.publicationYear ? oldest : book);
    }
}