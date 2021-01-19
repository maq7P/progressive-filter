import React from "react";
import './Dropdown.sass'
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {filter} from "../../redux/actions";
import colorIndex from "../../hoc/colorIndex";
const Dropdown = ({dispatch, setInputValue, inputValue}) => {
    const {listHint, indexesOf} = useSelector(({ data }) => data)
    const [activeItem, setActiveItem] = React.useState(0)

    const actionHint = (value, index) => {
        setActiveItem(index)
        dispatch(filter(value))
        setInputValue(value)
    }
    const moveItemActive = e => {
        if(e.key === 'ArrowDown' && activeItem < listHint.length - 1 && inputValue.length > 0) {
            const active = activeItem + 1
            setActiveItem(active)
        } else{
            setActiveItem(0)
        }
        if(e.key === 'ArrowUp' && activeItem > 0 && inputValue.length > 0){
            const active = activeItem - 1
            setActiveItem(active)
        }
    }
    const applyActiveItem = e => {
        if(e.key === 'Enter'){
            listHint.length
                ? actionHint(listHint[activeItem], activeItem)
                : actionHint(inputValue, 0)
        }
    }
    React.useEffect(() => {
        window.addEventListener('keydown', moveItemActive)
        window.addEventListener('keydown', applyActiveItem)
        return () => {
            window.removeEventListener('keydown', moveItemActive);
            window.removeEventListener('keydown', applyActiveItem);
        };
    })
    return (
        <div className='dropdown'>
            {listHint.length > 0 && indexesOf.length > 0
            ? listHint.map((name, i) =>
                    <div
                        key={name+i}
                        onClick={(e) => actionHint(e.target.textContent, i)}
                        className={`dropdown__item ${i === activeItem ? 'dropdown__item-active': null}`}>
                        {colorIndex(name, indexesOf.find(obj => obj.name === name).index, inputValue.length)}
                    </div>
                )
            : null}
        </div>
    )
}
Dropdown.propTypes = {
    dispatch: PropTypes.func,
    setInputValue: PropTypes.func,
    inputValue: PropTypes.string
}
export default Dropdown