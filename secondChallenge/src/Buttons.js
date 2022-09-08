
const Buttons = ({buttonText,setCurrPage,currPage}) => {
  return (
        <button
            className={currPage === buttonText ? "selected" : "" }
            onClick={()=>setCurrPage(buttonText)}
            type="submit"
        >
            {buttonText}
        </button>
  )
}

export default Buttons