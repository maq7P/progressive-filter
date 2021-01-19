import React from 'react'
import { Card } from 'react-bootstrap'
import './Item.sass'
// utils
import {ucFirst} from '../../utils'
// type if recived props
import PropTypes from 'prop-types';

const Item = ({showItem, user}) => {
    const {title, body} = showItem
    return (
        <Card className='card' text={'primary'}>
            <Card.Body className='card__body'>
                <Card.Title className='card__title'>{ucFirst(title)}</Card.Title>
                <Card.Text className='card__text'>{ucFirst(body)}</Card.Text>
                <Card.Text className='card__auth'>{user[0] && user[0].name}</Card.Text>
            </Card.Body>
        </Card>
    )
}
Item.propTypes = {
    items: PropTypes.objectOf(PropTypes.any),
}
export default Item
