import {useState} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Products from './components/Products/Products';
import { Button } from "antd";
import ProductForm from './components/ProductForm/ProductForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="App">
      <Button 
        onClick={() => setShowForm(!showForm)} 
        type="primary"
      >
        Add Product
      </Button>
      {showForm && <ProductForm />}
      <Products />
    </div>
  );
}

export default App;
