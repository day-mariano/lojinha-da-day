import { ProductList } from "./components/product-list";

function App() {
  return (
    <main className="flex justify-center">
      <div className="p-4 max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-4">Produtos</h2>
        <ProductList />
      </div>
    </main>
  );
}

export default App;
