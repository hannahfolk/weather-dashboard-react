import React from "react";
import { Row } from "../Grid";
import "./style.css";

function SearchForm(props) {
    return (
        <form>
            <label htmlFor="searchInput"><h5>Search for a City:</h5></label>
            <Row>
                <div className="col-9 col-sm-9" id="searchBar">
                    <input
                        type="text"
                        className="form-control"
                        name="searchInput"
                        id="searchInput"
                        onChange={props.handleInputChange}
                        value={props.searchInput}
                    />
                </div>
                <div className="col-3 col-sm-3" id="searchButton">
                    <button type="submit" className="btn btn-primary" id="searchIcon" onClick={props.handleFormSubmit}><i className="fas fa-search"></i></button>
                </div>
            </Row>
        </form>
    );
}

export default SearchForm;