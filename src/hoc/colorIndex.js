const colorIndex = (name, index, count, color='yellow') => {
    const valid = (val) => {
        if(typeof val !== "number") {
            console.error(`${val} have to be string or number`)
        }
        return +val
    }
    index = valid(index)
    count = valid(count)

    if(typeof name === 'string'){
        const part_1 = name.slice(0, index)
        const part_2 = name.slice(index, index+ count)
        const part_3 = name.slice(index+count)
        return <div>{part_1}<span style={{color: 'yellow'}}>{part_2}</span>{part_3}</div>
    } else {
        return <div>{name}</div>
    }
}
export default colorIndex