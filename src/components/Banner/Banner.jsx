import "./Banner.scss"
const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper">
      <div className="textContainer">
        <h2>Mwaiwathu Chatha</h2>
        <h1> Web developer</h1>
        <div className="buttons">
          <button>See projects</button>
          <button>Lets connect!</button>
          
        </div>
        <img src="/scroll.png" alt="" />
      </div>
      <div className="imageContainer">
        <img src="/Mwai2.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Banner