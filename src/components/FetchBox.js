import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../useJsonFetch';


export default function FetchBox(props) {
	const [data, loading, error] = useJsonFetch(props.url, props.opts);
	return (
		<div className='component'>
			{loading && <div className='loading'>Loading ...</div>}
			{data && <div className='data'>Data:{data.status}</div>}
			{error && <div className='error'>Error: {error.message}</div>}
		</div>
	)
}

FetchBox.propTypes = {
	url: PropTypes.string,
	opts: PropTypes.string,
}