import todoItems from './components/ItemData';
import TodoItem from './components/TodoItem.js';
import './App.css';

function App(){
  const data = todoItems.map(function(x){
    return(
      <TodoItem
        key= {x.id}
        item={x.item}
        completion={x.completion}
      />
    )
  })
  return(
    <div className="container">
      {data}
    </div>
  )
}
export default App