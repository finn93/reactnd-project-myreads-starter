import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

export default class Bookshelf extends Component {

	static propTypes = {
		title: PropTypes.string,
		books: PropTypes.array,
	};

	render() {
		const { title, books } = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map(book => (
							<li key={book.id}>
								<BookItem
									backgroundImage={book.imageLinks.thumbnail}
									title={book.title}
									authors={book.authors}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}

}
