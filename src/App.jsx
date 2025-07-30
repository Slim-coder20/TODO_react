import { useState } from "react";
// Génération d'IDs uniques pour les todos
import { nanoid } from "nanoid";
// Composant pour afficher chaque todo
import ListItem from "./components/ListItem";
function App() {
  // État pour la liste des todos
  const [todoList, setTodoList] = useState([
    { id: nanoid(8), content: "item1" },
    { id: nanoid(8), content: "item2" },
    { id: nanoid(8), content: "item3" },
  ]);



  // État pour l'input du formulaire
  const [todo, setTodo] = useState("");
  
  // État pour validation des Todos 
  const [showValidation, setshowValidation] = useState(false)
  
  // Supprime un todo par son ID
  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  // Ajoute un nouveau todo
  function handleSubmit(e) {
    if(todo === ""){
      setshowValidation(true)
      return
    }
    e.preventDefault();
    setTodoList([...todoList, { id: nanoid(), content: todo }]);
    setTodo("")
    setshowValidation(false); 
  }

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-amber-100 mb-4">La To-do List</h1>
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            id="todo-item"
            className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Entrez votre tâche..."
          />
          {showValidation && (
             <p className="text-red-400">
              Ajoouter d'abord du contenu à votre tâche 
             </p>
          )}
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Ajouter
          </button>
        </form>
        <ul>
          {/* On utilise cette condition pour afficher le message en cas ou y'aura plus d'items a afficher  */}
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">Pas d'items à afficher...</li>
          )}
           {/* Pour afficher les items dynamiquement via la méthode map en récupérant les ids */}
          {todoList.length && todoList.map(item => (
          <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
