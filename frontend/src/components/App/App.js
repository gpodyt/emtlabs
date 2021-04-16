import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Authors from "../Authors/authors";
import Countries from "../Countries/countries";
import BookList from "../Books/BookList/bookList";
import Header from "../Header/header"
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit"
import LibraryService from "../../repository/libraryRepository";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            authors: [],
            books: [],
            countries: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                   <div className={"container"}>
                       <Route path={"/authors"} exact render={() => <Authors authors={this.state.authors}/>}/>
                       <Route path={"/countries"} exact render={() => <Countries countries={this.state.countries}/>}/>
                       <Route path={"/books/add"} exact render={() => <BookAdd authors={this.state.authors} onAddBook={this.addBook}/>}/>
                       <Route path={"/books/edit/:id"} exact render={() => <BookEdit authors={this.state.authors} onEditBook={this.editBook} book={this.state.selectedBook}/>}/>
                       <Route path={"/books"} exact render={() => <BookList books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook} onMarkAsTaken={this.markBookAsTaken}/>}/>
                       <Redirect to={"/books"}/>
                   </div>
                </main>
            </Router>
        )
    }

    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadCountries = () => {
        LibraryService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    addBook = (name, category, author, availableCopies) => {
        LibraryService.addBook(name, category, author, availableCopies)
            .then(() => {this.loadBooks();})
    }

    getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        LibraryService.editBook(id, name, category, author, availableCopies)
            .then(() => {this.loadBooks();})
    }

    markBookAsTaken = (id) => {
        LibraryService.markBookAsTaken(id)
            .then(() => {
                this.loadBooks();
            })
    }

    componentDidMount(){
        this.loadAuthors();
        this.loadCountries();
        this.loadBooks();
    }
}

export default App;
