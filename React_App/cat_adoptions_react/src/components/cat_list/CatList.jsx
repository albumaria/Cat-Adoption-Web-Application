import React from "react";
import CatCard from "../cat_card/CatCard";
import "./CatList.css"

const CatList = ({ catList, startIndex, selectedCat, onCatSelect }) => {
    const catsToShow = catList.slice(startIndex, startIndex + 10);
    const placeholders = Array(10 - catsToShow.length).fill(null); // Fill empty spots with placeholders

    return (
        <div className="cat-list">
            {catsToShow.map((cat, index) => (
                <CatCard key={startIndex + index}
                         cat={cat}
                         isSelected={selectedCat === cat}
                         onSelect={() => onCatSelect(cat)}  // chain update
                />
            ))}
            {placeholders.map((_, index) => (
                <div key={`placeholder-${index}`} className="cat-placeholder" />
            ))}
        </div>
    );
};


export default CatList;
