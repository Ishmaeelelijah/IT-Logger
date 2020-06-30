import React from 'react'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logActions';

const LogItems = ({ log, deleteLog,setCurrent }) => {
  return (
    <li className='collection-item'>
        <div>
            <a href='#edit-log-modal' className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} > {log.message}</a> <br/>
            <span className='grey-text'>
             <span className='black-text'> ID #{log.id}</span> last updated by {''}<span className='black-text'>{log.tech}</span> om{''} <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
            </span>
            <a href='#!' className='secondary-content'>
              <i className='material-icons grey-text'>delete</i>
            </a>
        </div>
    </li>
  );
}

LogItems.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
    
}

export default  connect(
  null,
  { deleteLog, setCurrent}
)(LogItems);


