import { useEffect, useRef, useState } from "react";
import classes from "./Banner.module.css";

const Banner = ({ dummy }) => {

const [currentIndex, setCurrentIndex] = useState(0)
const timeoutRef = useRef(null) 

// const buttonStyle = (i) => {
//   return 
// } 

useEffect(()=>{
  clearRefTime()

  // with timeout we are delayin in setting setCurrentIndex value and also assigning value to him
  timeoutRef.current = setTimeout(()=>
    setCurrentIndex((prevCurrentIndex) =>
      prevCurrentIndex === dummy.length - 1 ? 0 : currentIndex + 1
    ), 4000
  )
},[currentIndex, dummy.length])

// we are  clearing timeout on every click done by user on circle button 
const clearRefTime = () => {
  if(timeoutRef.current){
    clearTimeout(timeoutRef.current)
  }
}

  return (
    <div>
      <div className={classes.slideshow}>
        <div className={classes.slideshowslider}
        style={{transform: `translateX(${-currentIndex * 100}%)`}}>
        
          {/* by mapping dummy we get images and index */}
          {dummy.map((Imgs, i) => (
            <img className={classes.slide} key={i} src={Imgs.url} alt="images of banner" />
          ))}
        </div>
{/* here i create three button by mapping dummy with every index(i) i=0,1,2 */}
        {dummy.map((_, i) => (
          <div className={classes.button} style={{background:`${currentIndex === i ? "red": ""}`}} key={i} onClick={()=>{setCurrentIndex(i)}}/>
        ))}
      </div>
    </div>
  );
};

export default Banner;
