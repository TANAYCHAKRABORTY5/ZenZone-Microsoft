import React from "react";

function Sorting() {
  return (
    <div id="sorting">
      <select class="filter" id="priceSort">
        <option value="---">SORT BY PRICE</option>
        <option value="lth">Low → High</option>
        <option value="htl">High → Low</option>
      </select>

      <select class="filter" id="nameSort">
        <option value="---">SORT BY NAME</option>
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
      </select>
    </div>
  );
}

export default Sorting;
