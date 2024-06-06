import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, publicationYear, fileFormat) {
        super(title, author, publicationYear);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value === 'string') {
            this._fileFormat = value;
        } else {
            console.log("Формат файлу повинен бути рядком");
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this._fileFormat}`);
    }

    static fromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.publicationYear, fileFormat);
    }
}