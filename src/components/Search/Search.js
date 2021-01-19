import React from "react";
import { InputGroup, FormControl} from 'react-bootstrap'
import './Search.sass'
import Dropdown from "../Dropdown/Dropdown";
import {filter, show_dropdown} from "../../redux/actions";
import PropTypes from "prop-types";
const Search = ({dispatch}) => {
    const inputRef = React.useRef()
    const [inputValue, setInputValue] = React.useState('')
    const onChangeInput = () => {
        dispatch(filter(inputRef.current.value))
        dispatch(show_dropdown(inputRef.current.value))
        setInputValue(inputRef.current.value)
    }
    const onSearchBtn = () => {
        dispatch(filter(inputRef.current.value))
    }
    return (
        <InputGroup className="search mb-3">
            <button
                onClick={onSearchBtn}
                type="button" className="btn border search__btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
            <FormControl
                ref={inputRef}
                className='search__input position-relative'
                placeholder="Search by author..."
                onChange={onChangeInput}
                value={inputValue}
            />
            <Dropdown dispatch={dispatch} setInputValue={setInputValue} inputValue={inputValue}/>
        </InputGroup>
    )
}
Search.prototype = {
    dispatch: PropTypes.func
}
export default Search