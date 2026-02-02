import React, { useEffect, useState } from 'react';
import productService from '../../services/products.service';
import Layout from "../../components/admin/Layout";
import {
    Search,
    Filter,
    Plus,
    Edit,
    Trash2,
    DollarSign,
    Package,
    TrendingUp,
    MoreVertical,
    Eye,
    ShoppingCart
} from 'lucide-react';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    useEffect(() => {
        setLoading(true);
        productService.getAllProducts()
            .then(data => {
                setProducts(data);
                console.log(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Erreur lors du chargement des produits');
                setLoading(false);
            });
    }, []);

    const handleDelete = (productId) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            productService.deleteProduct(productId)
                .then(() => setProducts(products.filter(p => p.id !== productId)))
                .catch(err => alert('Erreur lors de la suppression'));
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <Layout>
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-600 font-medium">Chargement des produits...</p>
                    </div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="flex items-center justify-center h-screen">
                    <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-8 max-w-md">
                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Package className="w-8 h-8 text-rose-600" />
                        </div>
                        <p className="text-rose-600 font-semibold text-center text-lg">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 w-full px-4 py-2 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-colors"
                        >
                            Réessayer
                        </button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="p-8 space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-2">
                            Produits
                        </h1>
                        <p className="text-slate-600">Gérez votre catalogue de produits</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-200 hover:scale-105">
                        <Plus className="w-5 h-5" />
                        Ajouter un produit
                    </button>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                            <Package className="w-8 h-8 opacity-80" />
                            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-lg">Total</span>
                        </div>
                        <p className="text-3xl font-bold">{products.length}</p>
                        <p className="text-blue-100 text-sm">Produits</p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                            <TrendingUp className="w-8 h-8 opacity-80" />
                            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-lg">Active</span>
                        </div>
                        <p className="text-3xl font-bold">{Math.floor(products.length * 0.85)}</p>
                        <p className="text-emerald-100 text-sm">En stock</p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                            <ShoppingCart className="w-8 h-8 opacity-80" />
                            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-lg">Ventes</span>
                        </div>
                        <p className="text-3xl font-bold">1.2k</p>
                        <p className="text-orange-100 text-sm">Ce mois</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                            <DollarSign className="w-8 h-8 opacity-80" />
                            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-lg">Revenue</span>
                        </div>
                        <p className="text-3xl font-bold">€48.5k</p>
                        <p className="text-purple-100 text-sm">Total</p>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Rechercher un produit..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                            />
                        </div>

                        {/* Filter Button */}
                        <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors">
                            <Filter className="w-5 h-5" />
                            Filtres
                        </button>

                        {/* View Toggle */}
                        <div className="flex bg-slate-100 rounded-xl p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                                    viewMode === 'grid'
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-600'
                                }`}
                            >
                                Grille
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                                    viewMode === 'list'
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-600'
                                }`}
                            >
                                Liste
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-12 text-center">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Package className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Aucun produit trouvé</h3>
                        <p className="text-slate-600">Essayez de modifier vos critères de recherche</p>
                    </div>
                ) : (
                    <div className={`grid gap-6 ${
                        viewMode === 'grid'
                            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                            : 'grid-cols-1'
                    }`}>
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Product Image */}
                                <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden">
                                    <Package className="w-16 h-16 text-indigo-300" />
                                    <div className="absolute top-3 right-3 flex gap-2">
                                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
                                            <Eye className="w-4 h-4 text-slate-600" />
                                        </button>
                                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
                                            <Edit className="w-4 h-4 text-indigo-600" />
                                        </button>
                                    </div>
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-lg">
                                            En stock
                                        </span>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                        {product.description || 'Description du produit'}
                                    </p>

                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="text-xs text-slate-500">Prix</p>
                                            <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                                {product.unitPrice} DH
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-slate-500">Stock</p>
                                            <p className="text-lg font-semibold text-slate-900">
                                                {product.stock || Math.floor(Math.random() * 100)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2">
                                        <button className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                                            <Edit className="w-4 h-4" />
                                            Modifier
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl font-semibold transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Products;