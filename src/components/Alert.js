import React from 'react'
import PropTypes from 'prop-types';

export default function Alert(props) {
  return (
    props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong>{props.alert.type}</strong>:{props.alert.msg}
     <button 
  type="button" 
  className="btn-close" 
  onClick={() => props.setAlert(null)} // close via React state
  aria-label="Close"
></button>
  </div>
  )
}
