import './Transection-style.css'
import Item from './Item.js'

const Transection = (props) => {
    //destructuring props to extract items from it
    //items is a property recieve from App.js
    const {items} = props;

    return (
        <div>
            <ul className = 'item-list'>
                {items.map(item => <Item {...item} key={item.id}/>)}
            </ul>
            
        </div>
    )}

    export default Transection