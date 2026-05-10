function BuildGrid(){
    const Width = parseInt(document.getElementById("Width").value)
    const GridWidth = Width+2
    const CellWidth = 100/GridWidth

    var Grid = document.getElementById("Grid")
    var Text = ""

    for(var i = 0; i<GridWidth*GridWidth; i++){
        Text+="<div class='Cell'></div>"
    }

    Grid.innerHTML = Text+"<div id='Center'></div>"
    Grid.style.gridTemplateColumns = "repeat("+GridWidth+",1fr)"
}

BuildGrid()