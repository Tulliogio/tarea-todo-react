import { useState } from "react";

const Cat = () => {
     const [cat, setCat] = useState({ name: 'Antonio', years: '5' })
     
     const handleClick = () => {
     //setCat({...cat, years: cat.years * 2})
          setCat((prev) => ({
               ...prev,years: cat.years + 1
          })
               
          )
}

     return (
          <>
               <h2>{cat.name} - {cat.years }</h2>
               <button onClick={handleClick} className="btn btn-dark mb-2">Update years</button>
          
          </>
     )
};

export default Cat;