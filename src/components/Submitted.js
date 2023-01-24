export default function Submitted(props) {
    return(
        <div className="Submitted-Card">
            <img src=".\images\illustration-thank-you.svg" width="150px"/>
            <p className="rating-p">You seleced {props.rating} out of 5</p>
            <h2> Thank You!</h2>
            <p>We appreciate you taking the time to give a rating. 
                If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}