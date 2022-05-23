import {useState} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Products from './components/Products/Products';
import { Button } from "antd";
import ProductForm from './components/ProductForm/ProductForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null)
  return (
    <div className="App">
      <Button 
        onClick={() => {
          setShowForm(!showForm);
          setEditProduct(null);
        }} 
        type="primary"
      >
        Add Product
      </Button>
      <ProductForm editProduct={editProduct} />
      <Products setEditProduct={setEditProduct} />
    </div>
  );
}

export default App;
