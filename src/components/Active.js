export default function Active(props){
    function submit(){
        console.log('clicked')
    }


    return (
        <div className="Active-Card">
            <img src="./images/star.svg" className="star-img"/>
            <h1 className="Active-heading"> How did we do?</h1>
            <p>Please let us know how we did with out support request. 
                All feedback is appreciated to 
                help us improve our offering!</p>
            <ul className="ratings"> 
                <li>
                    <button onClick={(event) => props.getRating(event, event.target.innerText)} className="individual-rating">1</button></li>
                <li>
                    <button onClick={(event) => props.getRating(event, event.target.innerText)} className="individual-rating">2</button></li>
                <li>
                    <button onClick={(event) => props.getRating(event, event.target.innerText)} className="individual-rating">3</button></li>
                <li>
                    <button onClick={(event) => props.getRating(event, event.target.innerText)} className="individual-rating">4</button></li>
                <li>
                    <button onClick={(event) => props.getRating(event, event.target.innerText)} className="individual-rating">5</button></li>
            </ul>
            <button className="Submit-Btn" onClick={props.getSubmit}>SUBMIT</button>
        </div>
    )
}