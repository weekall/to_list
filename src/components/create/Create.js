import React from "react";
import "./Create.css"
function Create(){
    return(
        <>
            <label className="create">Create</label>
            <form action="" method="">
               <div className="form-container">
                    <label>title</label>
                    <textarea type="text" name="title"></textarea>
               </div> 
               <div className="form-container">
                    <label>description</label>
                    <textarea type="text" name="description"></textarea>
                </div>
               <div class="form-container">
                    <label>priority</label>
                    <input name="prioroty" type="number"></input>
               </div>
            </form>
        </>
    )
}
export default Create;