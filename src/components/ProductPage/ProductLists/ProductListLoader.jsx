import React from 'react';

const ProductListLoader = () => {
    return (
        <div className="w-full">
            {/* Table Header Skeleton */}
            <div className="hidden md:grid grid-cols-6 gap-4 mb-4 px-4 py-3 bg-white rounded-lg animate-pulse">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
            </div>

            {/* Product Items Skeleton */}
            <div className="space-y-4">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm animate-pulse">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            {/* Image Skeleton */}
                            <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>

                            {/* Content Skeleton */}
                            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="space-y-3">
                                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </div>

                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                </div>

                                <div className="space-y-3">
                                    <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="h-10 bg-gray-200 rounded w-24"></div>
                                    <div className="h-10 bg-gray-200 rounded w-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListLoader;
