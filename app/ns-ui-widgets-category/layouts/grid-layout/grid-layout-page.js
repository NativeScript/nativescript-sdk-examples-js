const GridLayout = require("tns-core-modules/ui/layouts/grid-layout").GridLayout;
const ItemSpec = require("tns-core-modules/ui/layouts/grid-layout").ItemSpec;
const Button = require("tns-core-modules/ui/button/").Button;

exports.onNavigatingTo = function (args) {
    const page = args.object;
    // >> grid-layout-code
    const myGrid = new GridLayout();
    // >> (hide)
    const button1 = new Button();
    button1.backgroundColor = "#0099CC";
    const button2 = new Button();
    button2.backgroundColor = "#FFFF66";
    const button3 = new Button();
    button3.backgroundColor = "#AA0078";
    const button4 = new Button();
    button4.backgroundColor = "#8C489F";
    const button5 = new Button();
    button5.backgroundColor = "#CCFFFF";
    const button6 = new Button();
    button6.backgroundColor = "#0099CC";
    // << (hide)
    // Add views to grid layout
    myGrid.addChild(button1);
    myGrid.addChild(button2);
    myGrid.addChild(button3);
    myGrid.addChild(button4);
    myGrid.addChild(button5);
    myGrid.addChild(button6);

    // Set row property on views
    GridLayout.setRow(button1, 0);
    GridLayout.setRow(button2, 0);
    GridLayout.setRow(button3, 0);
    GridLayout.setRow(button4, 1);
    GridLayout.setRow(button5, 2);
    GridLayout.setRow(button6, 3);

    // Set rowSpan property on views
    GridLayout.setRowSpan(button3, 2);
    GridLayout.setRowSpan(button4, 2);

    // Set column property on views
    GridLayout.setColumn(button1, 0);
    GridLayout.setColumn(button2, 1);
    GridLayout.setColumn(button3, 2);
    GridLayout.setColumn(button4, 0);
    GridLayout.setColumn(button5, 2);
    GridLayout.setColumn(button6, 0);

    // Set colSpan property on views
    GridLayout.setColumnSpan(button4, 2);
    GridLayout.setColumnSpan(button6, 3);

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
