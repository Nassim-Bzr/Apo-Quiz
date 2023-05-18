import React from 'react'
import { useLocation } from 'react-router-dom';

export default function SearchedPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
    console.log(searchResults)
  return (
    <div>
      <h1>Résultats de recherche</h1>
      {searchResults.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  )
}