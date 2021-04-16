import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

const BookEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "", category: "", author:  0, availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== "" ? formData.category : props.book.category;
        const author = formData.author !== 0 ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, author, availableCopies);
        history.push("/books");

    }


    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book Title</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {(() => {
                                switch(props.book.category){
                                    case "NOVEL":
                                        return <Fragment><option selected value="NOVEL">Novel</option>
                                            <option value="THRILLER">Thriller</option>
                                            <option value="HISTORY">History</option>
                                            <option value="FANTASY">Fantasy</option>
                                            <option value="BIOGRAPHY">Biography</option>
                                            <option value="CLASSICS">Classics</option>
                                            <option value="DRAMA">Drama</option>'</Fragment>;
                                    case "THRILLER":
                                        return <Fragment><option value="NOVEL">Novel</option>
                                            <option selected value="THRILLER">Thriller</option>
                                            <option value="HISTORY">History</option>
                                            <option value="FANTASY">Fantasy</option>
                                            <option value="BIOGRAPHY">Biography</option>
                                            <option value="CLASSICS">Classics</option>
                                            <option value="DRAMA">Drama</option>'</Fragment>;
                                    case "HISTORY":
                                        return <Fragment><option value="NOVEL">Novel</option>
                                            <option value="THRILLER">Thriller</option>
                                            <option selected value="HISTORY">History</option>
                                            <option value="FANTASY">Fantasy</option>
                                            <option value="BIOGRAPHY">Biography</option>
                                            <option value="CLASSICS">Classics</option>
                                            <option value="DRAMA">Drama</option>'</Fragment>;
                                    case "FANTASY":
                                        return <Fragment><option value="NOVEL">Novel</option>
                                            <option value="THRILLER">Thriller</option>
                                            <option value="HISTORY">History</option>
                                            <option selected value="FANTASY">Fantasy</option>
                                            <option value="BIOGRAPHY">Biography</option>
                                            <option value="CLASSICS">Classics</option>
                                            <option value="DRAMA">Drama</option>'</Fragment>;
                                    case "BIOGRAPHY":
                                        return <Fragment><option value="NOVEL">Novel</option>
                                            <option value="THRILLER">Thriller</option>
                                            <option value="HISTORY">History</option>
                                            <option value="FANTASY">Fantasy</option>
                                            <option selected value="BIOGRAPHY">Biography</option>
                                            <option value="CLASSICS">Classics</option>
                                            <option value="DRAMA">Drama</option>'</Fragment>;
                                    case "CLASSICS":
                                        return <Fragment><option value="NOVEL">Novel</option>
                                            <option value="THRILLER">Thriller</option>
                                            <option value="HISTORY">History</option>
                                            <option value="FANTASY">Fantasy</option>
                                            <option value="BIOGRAPHY">Biography</option>
                                            <option selected value="CLASSICS">Classics</option>
                                            <option value="DRAMA">Drama</option>'</Fragment>;
                                    case "DRAMA":
                                        return <Fragment><option value="NOVEL">Novel</option>
                                            <option value="THRILLER">Thriller</option>
                                            <option value="HISTORY">History</option>
                                            <option value="FANTASY">Fantasy</option>
                                            <option value="BIOGRAPHY">Biography</option>
                                            <option value="CLASSICS">Classics</option>
                                            <option selected value="DRAMA">Drama</option>'</Fragment>
                                }
                            })()}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                if (props.book.author !== undefined
                                && props.book.author.id === term.id)
                                    return <option selected={props.book.author.id} value={term.id}>{term.name + " " + term.surname}</option>
                                else
                                    return <option value={term.id}>{term.name + " " + term.surname}</option>
                            }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               min={0}
                               key={props.book.availableCopies}
                               defaultValue={props.book.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default BookEdit;