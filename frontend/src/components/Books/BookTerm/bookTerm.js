import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category[0] + props.term.category.toLowerCase().substring(1)}</td>
            <td scope={"col"}>{props.term.author.name + " " + props.term.author.surname}</td>
            <td scope={"col"}>{props.term.availableCopies}</td>
            <td scope={"col"} className={"text-right"}>
                <Link className={"btn btn0info ml-2"} onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>Edit</Link>
                <a title={"MarkAsTaken"} className={"btn btn-warning"}
                   onClick={() => props.onMarkAsTaken(props.term.id)
                   }>Mark as Taken</a>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)
                   }>Delete</a>
            </td>
        </tr>
    )
}

export default bookTerm;