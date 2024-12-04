import React, { useCallback, useState } from 'react'

function CommentsForm() {

const [formData, setformData] = useState({
    userName: "",
    remark: "",
    rating:"",
})

let handleForm=(event)=>{
    setformData((currData)=>{
        currData[event.target.name]  = event.target.value;
        return {...currData}
    })

}
let submitHandle = (event)=>{
event.preventDefault();
setformData({
    userName: "",
    remark: "",
    rating:"",

})
console.log(formData);

}

    

  return (
    <div>
        <h4>Give a Comment</h4>
        <form action="" onSubmit={submitHandle}>
            <input type="text" placeholder='User Name' value={formData.userName} onChange={handleForm} name='userName'/>
            <br /><br />
            <textarea name="remark" id="" value={formData.remark} onChange={handleForm}  >Remark </textarea>
            <br /> <br />
            <input type="number" placeholder='Rating'min={1} max={5} value={formData.rating} onChange={handleForm} name='rating' />
            <br /> <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CommentsForm