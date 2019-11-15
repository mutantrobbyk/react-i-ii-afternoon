import React from "react";
import "../App.css";

export default class Card extends React.Component {
  render() {
      let person = this.props.person
      let dataSheet = this.props.dataSheet
      let index = this.props.index
      console.log(person)
    return (
      <div className='content'>
        <p className="id">
          {person.id}/{dataSheet.length}
        </p>
        <p className="firstName">
          {person.name.first} {person.name.last}
        </p>
        <p className="country">
          <span>From:</span> {person.country}
        </p>
        <p className="title">
          <span>Job Title:</span> {person.title}
        </p>
        <p className="employer">
          <span>Employer:</span> {person.employer}
        </p>
        <ol className="movies">
          <span>Favorite Movies:</span>
          <li>{person.favoriteMovies[0]}</li>
          <li>{person.favoriteMovies[1]}</li>
          <li>{person.favoriteMovies[2]}</li>
        </ol>
      </div>
    );
  }
}
