export const MoodBoardItem = ({color, image, description}) => {
  return(
    <div 
      className="mood-board-item"
      style={{backgroundColor: color}}
    >
      <img 
        className="mood-board-image"
        src={image}
      />
      <h3
        className="mood-board-text"
      >{description}</h3>
    </div>
  )
}
export const MoodBoard = () => {
  const items = [
    {
      color: "brown",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "kekkonen"
    },
    {
      color: "purple",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "kekkonen"
    },
    {
      color: "burlywood",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "kekkonen"
    }
  ]
  const listItems = items.map(item =>
    <MoodBoardItem
      color={item.color}
      image={item.image}
      description={item.description}
    />
  )
  return(
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">  
        {listItems}
      </div>
    </div>
  )
}