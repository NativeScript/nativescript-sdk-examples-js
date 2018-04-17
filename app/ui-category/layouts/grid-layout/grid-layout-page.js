const GridLayout = require("tns-core-modules/ui/layouts/grid-layout").GridLayout;
const ItemSpec = require("tns-core-modules/ui/layouts/grid-layout").ItemSpec;
const Button = require("tns-core-modules/ui/button/").Button;

exports.onNavigatingTo = function (args) {
    const page = args.object;
    // >> grid-layout-code
    const myGrid = new GridLayout();
    
    // >> (hide)
    const btn1 = new Button();
    btn1.backgroundColor = "#0099CC";
    const btn2 = new Button();
    btn2.backgroundColor = "#FFFF66";
    const btn3 = new Button();
    btn3.backgroundColor = "#AA0078";
    const btn4 = new Button();
    btn4.backgroundColor = "#8C489F";
    const btn5 = new Button();
    btn5.backgroundColor = "#CCFFFF";
    const btn6 = new Button();
    btn6.backgroundColor = "#0099CC";
    // << (hide)
    // Add views to grid layout
    myGrid.addChild(btn1);
    myGrid.addChild(btn2);
    myGrid.addChild(btn3);
    myGrid.addChild(btn4);
    myGrid.addChild(btn5);
    myGrid.addChild(btn6);

    // Set row property on views
    GridLayout.setRow(btn1, 0);
    GridLayout.setRow(btn2, 0);
    GridLayout.setRow(btn3, 0);
    GridLayout.setRow(btn4, 1);
    GridLayout.setRow(btn5, 2);
    GridLayout.setRow(btn6, 3);

    // Set rowSpan property on views
    GridLayout.setRowSpan(btn3, 2);
    GridLayout.setRowSpan(btn4, 2);

    // Set column property on views
    GridLayout.setColumn(btn1, 0);
    GridLayout.setColumn(btn2, 1);
    GridLayout.setColumn(btn3, 2);
    GridLayout.setColumn(btn4, 0);
    GridLayout.setColumn(btn5, 2);
    GridLayout.setColumn(btn6, 0);

    // Set colSpan property on views
    GridLayout.setColumnSpan(btn4, 2);
    GridLayout.setColumnSpan(btn6, 3);

    // Create columns specification (e.g. columns=""100, *, auto"")
    // ItemSpec second argumenter is of type GridUnitType ("pixel, "star", "auto")
    const firstColumn = new ItemSpec(100, "pixel");
    const secondColumn = new ItemSpec(1, "star");
    const thirdColumn = new ItemSpec(1, "auto");

    // Create rows specification (e.g. rows=""*, *, *, *"")
    // ItemSpec second argumenter is of type GridUnitType ("pixel, "star", "auto")
    const firstRow = new ItemSpec(1, "star");
    const secondRow = new ItemSpec(1, "star");
    const thirdRow = new ItemSpec(1, "star");
    const forthRowq = new ItemSpec(1, "star");

    myGrid.addColumn(firstColumn);
    myGrid.addColumn(secondColumn);
    myGrid.addColumn(thirdColumn);

    myGrid.addRow(firstRow);
    myGrid.addRow(secondRow);
    myGrid.addRow(thirdRow);
    myGrid.addRow(forthRowq);
    // << grid-layout-code

    page.content = myGrid;
};
