import colorNames from 'colornames';

const Input = ({color, setColor, setHexValue, setIsDarkText, isDarkText}) => {
      return (
        <form onSubmit={(e)=>(e.preventDefault())}>
            <label htmlFor="color">Add Color Name:</label>
            <input
                id = "color"   
                type="text"
                placeholder="Add color name" 
                autoFocus
                required
                value = {color}
                onChange={(e)=>{
                    setColor(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            />
            <button 
                onClick={()=>setIsDarkText(!isDarkText)}
            > 
                Turn text to {isDarkText ? "White" : "Black"}
            </button>
        </form>
  )
}

export default Input