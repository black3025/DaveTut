import {FaPlus} from "react-icons/fa";
import {useRef} from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef(); //commonly use for return focus in forms
  return (
   <form
        className="addForm"
        onSubmit={handleSubmit}
   
   >
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            ref = {inputRef}
            type="text" 
            id="addItem"
            placeholder="Add item"
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label="Add-item"
            onClick={()=>inputRef.current.focus()} //return focus to form after clicking
        >
            <FaPlus />
        </button>
   </form>
  )
}

export default AddItem