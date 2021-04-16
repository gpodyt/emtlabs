import axios from '../custom-axios/axios';

const LibraryService = {
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        })
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        })
    },
    markBookAsTaken: (id) => {
    return axios.put(`/books/taken/${id}`);
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    getAuthor: (id) => {
        return axios.get(`/authors/${id}`);
    },
    getCountry: (id) => {
        return axios.get(`/countries/${id}`);
    }
}

export default LibraryService;