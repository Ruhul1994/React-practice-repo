import Button from "./Button"

const user = {
    name: 'Hedgy Lamar',
    imageUrl: 'https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    imageSize: 90,
  };
  
  
function App() {
  return (
    <div className="w-out max-[20%]">
     <div>
        <h1>My First React App</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae tempora quibusdam magni doloremque quidem aliquam cupiditate voluptas maiores delectus sint dolore quos beatae optio nisi, aspernatur odio inventore error sed est nostrum animi. Quidem impedit culpa, quis possimus nihil amet labore neque optio nostrum vero harum veniam nemo hic delectus.</p>
        <Button/>
     </div>
     <div>
        <h2>{user.name}</h2>
        <img src={user.imageUrl} alt={user.name} width={user.imageSize} height={user.imageSize} className="rounded-[50%] border" />
     </div>
    </div>
  )
}

export default App
