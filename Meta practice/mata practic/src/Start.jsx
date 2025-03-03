import Product from './Product';
function Start() {
  return (
    <div>
      <h1>Start the Map method:</h1>
      {Product().map(item => (
      <div key={item.id}>
        <h1>title: {item.title}</h1>
        <p>description: {item.description}</p>
        <img src={item.image} alt={item.alt}/>
        <h3>Price: {item.price}</h3>
      </div>
    ))}
    </div>
  );
}

export default Start;
