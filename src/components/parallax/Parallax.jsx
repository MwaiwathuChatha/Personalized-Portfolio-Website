
import "./parallax.scss"






// eslint-disable-next-line react/prop-types
const Parallax = ({type}) => {
    //ka cheat sheet ka parallax effect 
    //you can copy and paste this in any component and 
    //freely add the effect to any element
  


  return (
    <div className="parallax" 
    
    style={{
        background:
        type==="services"
        ? "linear-gradient(180deg,#1a2639,#5e63b6)"
        : "linear-gradient(180deg,#1a2639,#5e63b6)"
        }}> 
        <h1>{type==="services"
        ?"Services offered"
        :"Tech Stack"}
        </h1>
        <div className="mountains">

        </div>
        <div className="planets" >

        </div>
        <div className="stars">

        </div>
    </div>
  )
}

export default Parallax;