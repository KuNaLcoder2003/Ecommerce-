import React, { useState, useEffect } from 'react';
import { toast, Toaster } from "react-hot-toast"
// import { Trash2, Upload, Plus, BarChart2, Package, Tag, Home, Settings, LogOut } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import SidebarItem from './SidebarItem';
// import DashboardView from './DashboardView';
// import ProductsView from './ProductsView';
// import CategoriesView from './CategoriesView';
// import AnalyticsView from './AnalyticsView';


// Main Admin Dashboard Component
const AdminDashboard = ({setIsLoggedIn , setIsAdmin}) => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md' onClick={()=>{
            setIsAdmin(false);
            setIsLoggedIn(false);
            localStorage.removeItem('token');
            localStorage.removeItem('role')
          }}>Logout</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'products' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'orders' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white shadow rounded-lg">
          {activeTab === 'products' ? <ProductsPanel /> : <OrdersPanel />}
        </div>
      </main>
    </div>
  );
}

// Products Management Component
function ProductsPanel() {
  const [products, setProducts] = useState([]);

  const [showAddForm, setShowAddForm] = useState(false);
  // const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });
  useEffect(() => {
    try {
      fetch('https://ksecombe.onrender.com/api/v1/product/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token')
        }
      }).then(async (respone) => {
        const data = await respone.json();
        console.log(data);
        if (data.products) {
          setProducts(data.products);

        } else {
          toast.error(data.message);
        }
      })
    } catch (error) {
      toast.error(error);
    }
  }, [])

  const [newProductDetails, setNewProductDetails] = useState({
    product_name: "",
    category: '',
    price: '',
    quantity: '',
    description: '',
    images: [],

  })
  // Handle form input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewProduct(prev => ({ ...prev, [name]: value }));
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files)
    setNewProductDetails({ ...newProductDetails, images: [...newProductDetails.images, file] })
  };

  // Add new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('product_name', newProductDetails.product_name);
    formData.append('category', newProductDetails.category);
    formData.append('product_description', newProductDetails.description);
    formData.append('quantity', newProductDetails.quantity);
    formData.append('price', newProductDetails.price);
    newProductDetails.images.map(img => {
      formData.append('image', img);
    })
    try {
      fetch('https://ksecombe.onrender.com/api/v1/product', {
        method: 'POST',
        body: formData,
        headers: {
          authorization: localStorage.getItem('token')
        }
      }).then(async (response) => {
        const data = await response.json();
        if (data.data) {
          toast.success(data.message);
          setProducts([...products , data.data]);
          setNewProductDetails({
            product_name: "",
            category: '',
            price: '',
            quantity: '',
            description: '',
            images: [],
        
          })
          setShowAddForm(false);
        }
      })
    } catch (error) {
      toast.error(error);
    }
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="p-6">
      <Toaster />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Product Management</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add Product'}
        </button>
      </div>

      {/* Add Product Form */}
      {showAddForm && (
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="text-lg font-medium mb-4">Add New Product</h3>
          <form onSubmit={handleAddProduct}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={newProductDetails.product_name}
                  onChange={(e) => setNewProductDetails({
                    ...newProductDetails,
                    product_name: e.target.value
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                <input
                  type="text"
                  required
                  value={newProductDetails.category}
                  onChange={(e) => setNewProductDetails({
                    ...newProductDetails,
                    category: e.target.value
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                <input
                  type="number"
                  required
                  step="1"
                  value={newProductDetails.price}
                  onChange={(e) => setNewProductDetails({
                    ...newProductDetails,
                    price: e.target.value
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                <input
                  required
                  min="0"
                  value={newProductDetails.quantity}
                  onChange={(e) => setNewProductDetails({
                    ...newProductDetails,
                    quantity: e.target.value
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  required
                  value={newProductDetails.description}
                  onChange={(e) => setNewProductDetails({
                    ...newProductDetails,
                    description: e.target.value
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Image 1</label>
                <input
                  type="file"
                  required
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Image 2</label>
                <input
                  type="file"
                  required
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Image 3</label>
                <input
                  type="file"
                  required
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Image 4</label>
                <input
                  type="file"
                  required
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {
              products.length == 0 ? (null) : (
                products.map(product => (
                  <tr key={product._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.product_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Orders Panel Component
function OrdersPanel() {
  const [orders, setOrders] = useState([
    { id: 1001, customer: 'John Doe', date: '2025-04-01', total: 1299.97, status: 'Delivered' },
    { id: 1002, customer: 'Jane Smith', date: '2025-04-03', total: 699.99, status: 'Processing' },
    { id: 1003, customer: 'Mike Johnson', date: '2025-04-05', total: 149.99, status: 'Shipped' },
    { id: 1004, customer: 'Sarah Williams', date: '2025-04-07', total: 1849.98, status: 'Pending' }
  ]);

  // Status badge color based on order status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-purple-100 text-purple-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Order Management</h2>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};






// Stats Card Component

// Products View Component


// Categories View Component


// Analytics View Component


export default AdminDashboard;