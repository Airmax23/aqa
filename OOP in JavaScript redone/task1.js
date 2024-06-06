import { Book } from './Book.js';
import { EBook } from './Ebook.js';

let book1 = new Book("Великий Гетсбі", "Ф. Скотт Фіцджеральд", 1925);
let book2 = new Book("1984", "Джордж Орвелл", 1949);
book1.printInfo();
book2.printInfo();

let ebook1 = new EBook("Гаррі Поттер і Філософський камінь", "Дж. К. Ролінг", 1997, "PDF");
ebook1.printInfo();

let oldestBook = Book.findOldestBook([book1, book2, ebook1]);
console.log("Найдавніша книга:");
oldestBook.printInfo();