import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class HomePage extends Component {

	state = {
		allBooks: [],
		readingBooks: [],
		wantBooks: [],
		readBooks: [],
	};

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			console.log(books);
			this.setState({
				allBooks: books,
				readingBooks: books.filter((b) => b.shelf === 'currentlyReading'),
				wantBooks: books.filter((b) => b.shelf === 'wantToRead'),
				readBooks: books.filter((b) => b.shelf === 'read'),
			})
		})
	}

	_changeShelf = (e) => {
		  console.log(e.target.value);
	}

	render() {
		const { readingBooks, wantBooks, readBooks } = this.state;
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Bookshelf
							title={'Currently Reading'}
							books={readingBooks}
							changeShelf={this._changeShelf}
						/>
						<Bookshelf
							title={'Want to Read'}
							books={wantBooks}
						/>
						<Bookshelf
							title={'Read'}
							books={readBooks}
						/>
					</div>
				</div>
				<div className="open-search">
					<Link
						to={'/search'}
					>Add a book</Link>
				</div>
			</div>
		)
	}
}

export default HomePage
