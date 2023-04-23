// @ts-nocheck
import React, { useState, useEffect } from 'react';

import './categoriess.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function Categories() {
    const category = useSelector((state) => state.category.list);
    const user = useSelector((state) => state.user);

    return (
        <div className='containor-categories'>
            <h1 className='header-categories'>Categories : </h1>
            <div className='container'>
                {category.map(cat => (
                    <Link to={`/categories/${cat.slug}`} className='titl-article' key={cat.name}>
                        <div className='img-categories category-image-container' style={{ backgroundImage: `url(${cat.imageUrl})` }}>
                            <p className='category-name'> {cat.name} </p>
                        </div>
                    </Link>
                ))}
                {user && user.roleId === 2 && (
                    <Link to={`/admin`} className='admin-link'>
                        Admin
                    </Link>
                )}
            </div>
        </div>
    )
}