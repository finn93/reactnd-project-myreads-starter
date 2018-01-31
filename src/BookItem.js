import React, { Component } from 'react'
import PropTypes from 'prop-types'

const bookshelfs = [
	{name: 'Currently Reading', value: 'currentlyReading'},
	{name: 'Want to Read', value: 'wantToRead'},
	{name: 'Read', value: 'read'},
	{name: 'None', value: 'none'},
];

export default class BookItem extends Component {

	static propTypes = {
		// width: PropTypes.number,
		// height: PropTypes.number,
		backgroundImage: PropTypes.string,
		title: PropTypes.string,
		authors: PropTypes.array,
		bookshelf: PropTypes.string,
		changeShelf: PropTypes.func,
	};

	render() {
		const { backgroundImage, title, authors, bookshelf, changeShelf } = this.props;
		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 188,
							backgroundImage: `url(${backgroundImage})`
						}}
					/>
					<div className="book-shelf-changer">
						<select defaultValue={bookshelf} onChange={changeShelf()} >
							<option value="none" disabled>Move to...</option>
							{bookshelfs.map(n => (<option key={n.value} value={n.value}>{n.name}</option>))}
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors.join(', ')}</div>
			</div>
		);
	}

}
