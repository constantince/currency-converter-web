import React from 'react';
import PropTypes from 'prop-types';
import './fastlist.css';
import TouchFeedBack from '../TouchFeedBack';
const FastList = ({data, renderRow}) => <ul className="fast-list">
    {data.map(list => <TouchFeedBack>
        {renderRow(list)}
    </TouchFeedBack>)}
</ul>;


FastList.prototype = {
    data: PropTypes.array
}

export default FastList;