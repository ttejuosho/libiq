import React from 'react'

const BookPreview = (props) => (
		<div className="BookPreview">
			<div>		
				{props.title}
			</div>
			
			<div>
				{props.dueDate}
				
			</div>
		</div>
	);

export default BookPreview;