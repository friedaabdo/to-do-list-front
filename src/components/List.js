import React, {useState,useEffect} from 'react'

const List = (props) => {
 const [list, setList] = useState([])
const getList = () => {
    fetch(props.url + '/lists/')
    .then(res => res.json())
    .then(data => setList(data))
}
useEffect(() => {
    getList()
},[])

console.log('list',list)
    return(
<p>list:</p>

    )
}

export default List