class user {
  constructor(name, lastname, pets, books) {
    this.name = name;
    this.lastname = lastname;
    this.pets = pets || [];
    this.books = books || [];
  }

  getFullName() {
    return console.log(
      `El nombre completo del usuario es ${this.name} ${this.lastname} `
    );
  }

  addMascota(newPet) {
    this.pets.push(newPet);
    return this.pets;
  }

  countMascota() {
    return console.log(`La cantidad de mascotas es ${this.pets.length}`);
  }

  addBooks(title, author) {
    this.books.push({ title: title, author: author });
  }

  getBooksName() {
    const bookName = [];
    this.books.map((book) => bookName.push(book.title));
  }
}

const usuario = new user(
  "Roberto",
  "Giordano",
  ["Gato", "Jirafa"],
  [{ title: "El señor de los anillos", autor: "J.R.R Tolkien" }]
);

usuario.getFullName();
usuario.addMascota("Perro");
console.log(usuario.pets);
usuario.countMascota();
usuario.addBooks("IT", "Stephen King");
usuario.getBooksName();
