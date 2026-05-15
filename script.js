function BuildGrid(){
    const Width = parseInt(document.getElementById("Width").value)
    var GridWidth = Width+2

    if (GridWidth%2 == 0){
        GridWidth+=1
    }

    var Grid = document.getElementById("Grid")
    var Text = ""

    for(var i = 0; i<GridWidth*GridWidth; i++){
        Text+="<div class='Cell'></div>"
    }

    Grid.innerHTML = Text+"<div id='Center'></div>"
    Grid.style.gridTemplateColumns = "repeat("+GridWidth+",1fr)"

    DrawCircle()
}

function DrawCircle(){
    const Width = parseInt(document.getElementById("Width").value)
    var GridCellsWidth = Width+2

    if (GridCellsWidth%2 == 0){
        GridCellsWidth+=1
    }

    const CellWidth = (100/GridCellsWidth)
    
    
    const Piece = (2*Math.PI)/(GridCellsWidth*20)
    const Circle = document.getElementById("Circle")
    const Pixels = document.getElementById("Pixels")

    var Positions = []

    Circle.innerHTML = ""

    for(var i = 0; i<=Width*40; i++){
        var Radians = i*Piece

        const X = Math.round(Math.cos(Radians)*Math.trunc(Width/2))
        const Y = Math.round(Math.sin(Radians)*Math.trunc(Width/2))

        if(!Positions.some(pos => pos.every((val, i) => val === [X,Y][i]))) {
            Positions.push([X,Y]);
        
        const PaintedCell = document.createElement("div")

        PaintedCell.classList.add("PaintedCell")

        PaintedCell.style.left = ((GridCellsWidth / 2 + X) * CellWidth) + "%"
        PaintedCell.style.top  = ((GridCellsWidth / 2 + Y) * CellWidth) + "%"
        PaintedCell.style.width = CellWidth+"%"
        PaintedCell.style.height = CellWidth+"%"

        Circle.appendChild(PaintedCell)
        }
    }
    Pixels.innerText = Positions.length+" pixels"

}

BuildGrid()