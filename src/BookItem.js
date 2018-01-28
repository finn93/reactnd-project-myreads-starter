import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BookItem extends Component {

	static propTypes = {
		// width: PropTypes.number,
		// height: PropTypes.number,
		backgroundImage: PropTypes.string,
		title: PropTypes.string,
		authors: PropTypes.array,
	};

	render() {
		const { backgroundImage, title, authors } = this.props;
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
						<select>
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors.join(', ')}</div>
			</div>
		);
	}

}
