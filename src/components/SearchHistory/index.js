import React from "react";
import Card from "../Card";
import "./style.css";

function SearchHistory(props) {
    return (
        <Card>
            <div className="card-body searchHistoryCard">
                <button
                    className="btn btn-link city"
                    value={props.searchInput}
                    onClick={props.handleClick}
                >
                    {props.searchInput}
                </button>
            </div>
        </Card>
    );
}

export default SearchHistory;