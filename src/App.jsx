function App() {
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
      </div>
    </div>
  );
}

export default App;
