import "./App.css";
import Board from "./components/board/Board";
import Header from "./components/layout/Header";
import Aside from "./components/layout/Aside";
import KanbanProvider from "./contexts/KanbanContext";

function App() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <KanbanProvider>
        <Aside />
        <main className="flex-1 flex flex-col min-h-0">
          <Header />
          <Board />
        </main>
      </KanbanProvider>
    </div>
  );
}

export default App;
