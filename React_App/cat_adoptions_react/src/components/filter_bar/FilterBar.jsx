import "./FilterBar.css"
import React from "react";

const FilterBar = ({ cat }) => {
    return (
        <div className="filter-bar">
            <svg width="100%" height="100%" viewBox="0 0 464 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="464" height="47" rx="20" fill="#FFD5D2"/>
                <path d="M446.827 11.9434C441.924 7.04051 433.975 7.04051 429.071 11.9434C425.031 15.9839 424.323 22.0919 426.942 26.8601L420.401 33.4022C420.221 33.5813 420.221 33.8719 420.401 34.051L424.719 38.3697C424.898 38.5487 425.189 38.5487 425.368 38.3697L431.91 31.8275C436.678 34.4465 442.786 33.7392 446.826 29.6984C451.73 24.7955 451.73 16.8463 446.827 11.9434ZM432.52 26.25C429.522 23.2517 429.522 18.3905 432.52 15.3922C435.518 12.394 440.38 12.394 443.378 15.3922C446.376 18.3905 446.376 23.2517 443.378 26.25C440.38 29.2482 435.518 29.2482 432.52 26.25Z" fill="#51294B"/>
            </svg>
        </div>
    );
};

export default FilterBar;

