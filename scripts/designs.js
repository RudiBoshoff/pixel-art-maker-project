//Rudi Boshoff

// Structure
// 1. user selects Size. default = 1 x 1
// 2. user generates grid. max = 80 x 80
// 3. user selects color. default = black
// 4. user colors in blocks in table. on click event.
// repeat

// 1. User size input
$(".size-submit").on("click", function() {
  let numOfRows, numOfColumns;
  numOfRows = $(".input-height").val();
  numOfColumns = $(".input-width").val();
  makeGrid(numOfRows, numOfColumns);
  colorSelectedBlock();
  return false;
});

//2. Generate Grid using user input
function makeGrid(numOfRows, numOfColumns) {
  let gridHTML = "";
  const table = $(".pixel-canvas");
  const rowStart = "<tr>";
  const rowEnd = "</tr>";
  const columnContent = "<td></td>";

  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    let columns = "";
    for (let columnIndex = 0; columnIndex < numOfColumns; columnIndex++) {
      columns += columnContent;
    }
    gridHTML += rowStart + columns + rowEnd;
  }
  table.html(gridHTML);
}

// 3. User color input
let selectedColor = "black"; //default
$(".color-picker").on("change", function() {
  selectedColor = $(this).val();
});

// 4. User colors selected block
function colorSelectedBlock() {
  $(".pixel-canvas")
    .find("td")
    .click(function() {
      $(this).css("background-color", selectedColor);
    });
}
