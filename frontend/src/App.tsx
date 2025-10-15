import { useState, useEffect } from 'react'
import './App.css'

interface Item {
  id?: number
  name: string
  description?: string
  price: number
}

function App() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState<Item | null>(null)
  const [formData, setFormData] = useState<Item>({
    name: '',
    description: '',
    price: 0
  })

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

  // Fetch all items
  const fetchItems = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_URL}/api/items`)
      if (!response.ok) throw new Error('Failed to fetch items')
      const data = await response.json()
      setItems(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Create item
  const createItem = async (item: Item) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_URL}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
      if (!response.ok) throw new Error('Failed to create item')
      await fetchItems()
      closeModal()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Update item
  const updateItem = async (id: number, item: Item) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_URL}/api/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
      if (!response.ok) throw new Error('Failed to update item')
      await fetchItems()
      closeModal()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Delete item
  const deleteItem = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return
    
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_URL}/api/items/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Failed to delete item')
      await fetchItems()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingItem && editingItem.id) {
      updateItem(editingItem.id, formData)
    } else {
      createItem(formData)
    }
  }

  // Open modal for create/edit
  const openModal = (item?: Item) => {
    if (item) {
      setEditingItem(item)
      setFormData(item)
    } else {
      setEditingItem(null)
      setFormData({ name: '', description: '', price: 0 })
    }
    setShowModal(true)
  }

  // Close modal
  const closeModal = () => {
    setShowModal(false)
    setEditingItem(null)
    setFormData({ name: '', description: '', price: 0 })
  }

  // Load items on mount
  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>📦 Item Management System</h1>
        <p>Pro2future Assessment</p>
      </header>

      <main className="main">
        {error && (
          <div className="error-banner">
            <span>⚠️ {error}</span>
            <button onClick={() => setError(null)}>✕</button>
          </div>
        )}

        <div className="actions">
          <button 
            className="btn btn-primary" 
            onClick={() => openModal()}
            disabled={loading}
          >
            ➕ Add New Item
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={fetchItems}
            disabled={loading}
          >
            🔄 Refresh
          </button>
        </div>

        {loading && <div className="loader">Loading...</div>}

        <div className="items-grid">
          {items.length === 0 && !loading ? (
            <div className="empty-state">
              <p>No items found. Create your first item!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="item-card">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
                <p className="item-description">
                  {item.description || 'No description'}
                </p>
                <div className="item-actions">
                  <button 
                    className="btn btn-edit"
                    onClick={() => openModal(item)}
                    disabled={loading}
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    className="btn btn-delete"
                    onClick={() => item.id && deleteItem(item.id)}
                    disabled={loading}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingItem ? 'Edit Item' : 'Create New Item'}</h2>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Enter item name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter item description"
                  rows={3}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price *</label>
                <input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                  required
                  placeholder="0.00"
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Saving...' : editingItem ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
