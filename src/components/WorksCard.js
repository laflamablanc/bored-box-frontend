function WorksCard (props) {
  return(
    <div className="works-card">
      <img src={props.card.img} alt={props.card.title}/>
      <h3> {props.card.title} </h3>
      <p> {props.card.text} </p>
    </div>
  )
}

export default WorksCard
