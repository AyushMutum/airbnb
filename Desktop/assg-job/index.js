
// search filter

const search = document.querySelector(".input-group input"),
  table_rows = document.querySelectorAll("tbody tr");

search.addEventListener("input", searchTable);

function searchTable() {
  const searchTerm = search.value.trim().toLowerCase();

  table_rows.forEach((row) => {
    const rowData = row.textContent.toLowerCase();
    const isVisible = rowData.includes(searchTerm);
    row.style.display = isVisible ? "table-row" : "none";
  });
}




// sidebar hamburger
document.getElementById("hamburger-btn").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  var hamburger = document.getElementById("hamburger-btn");
  var cross = document.getElementById("cross");

  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    hamburger.classList.add("open");
    cross.style.display = "block";
  } else {
    sidebar.style.display = "none";
    hamburger.classList.remove("open");
    cross.style.display = "none";
  }
});


// sidebar cross
document.getElementById("cross").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  var hamburger = document.getElementById("hamburger-btn");
  var cross = document.getElementById("cross");

  sidebar.style.display = "none"; 
  hamburger.classList.remove("open");
  cross.style.display = "none"; 
})




