import Buttons from './Buttons'

const Header = ({currPage,setCurrPage}) => {
  return (
    <form onSubmit={(e)=>(e.preventDefault())}>
        <Buttons
            currPage = {currPage}
            buttonText="Users"
            setCurrPage = {setCurrPage}
        /> 
        <Buttons
            currPage = {currPage}
            buttonText="Posts"
            setCurrPage = {setCurrPage}
        /> 
        <Buttons
            currPage = {currPage}
            buttonText="Comments"
            setCurrPage = {setCurrPage}
        /> 
    </form>
  )
}

export default Header