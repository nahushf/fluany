import React from 'react'

const Either = props => props.when ? props.right : props.left;

export default Either
