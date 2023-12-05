function Card(props) {
  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={"https://www.shutterstock.com/image-photo/web-development-coding-programming-internet-260nw-1141706672.jpg"+props.img} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;
