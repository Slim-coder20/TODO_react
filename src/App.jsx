import { useState } from "react";
// importation de la librarie nanoid pour génerer des ids pour nos todolist //
import { nanoid } from "nanoid";
// importation du composant listItem 
import ListItem from "./components/ListItem";
function App() {
  const [todoList, setTodoList] = useState([
    {id: nanoid(8),content: "item1"},
    {id: nanoid(8),content: "item2"},
    {id: nanoid(8),content: "item3"}
  ]);



  // cette fonction nous servira de supprimer les todoslist // 

  function deleteTodo(id){
   setTodoList(todoList.filter(todo => todo.id !== id))
  }
  
  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do List</h1>
        <form className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            type="text"
            id="todo-item"
            className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Entrez votre tâche..."
          />
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Ajouter
          </button>
        </form>
        <ul>
          {/* On utilise cette condition avec l'operation short-circuit  pour afficher le message en cas ou y'aura plus d'items a afficher  */}
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">Pas d'items à afficher...</li>
          )}
           {/* Pour afficher les items dynamiquement via la méthode map en récupérant les ids */}
          { todoList.length > 0 && todoList.map(item => (
          <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
