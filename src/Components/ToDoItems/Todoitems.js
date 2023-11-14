import './Todoitems.css';
const ToDOItems = (props)=>{
    const {items,deletItem} = props;
    let lengt = items.length;
    const listItems = lengt ?(items.map((item)=>{
        return(
        <div key={item.id} className="listCont"> 
            <span className='listCell son'>{item.id}</span>
            <span className='listCell son'>{item.name}</span>
            <span className='listCell son'>{item.age}</span>
            <span className='listCell son iconDel' onClick={()=>deletItem(item.id)}>&times;</span>
        </div>
        )
    })) : (<p className='para'>There isnot  item for deleting</p>)
    return (
        <div className='table'> 
            <div className='headTable'>
                <span className='listCell'>ID#</span>
                <span className='listCell'>Name</span>
                <span className='listCell'>Age</span>
                <span className='listCell'>Action</span>
                
            </div>
            {listItems}

           
        </div>
    )

}

export default ToDOItems;