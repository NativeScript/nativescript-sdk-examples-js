const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
  new link("Basics", "ns-ui-widgets-category/action-bar/basics/basics-page"),
  new link(
    "Code-Behind",
    "ns-ui-widgets-category/action-bar/code-behind/code-behind-page"
  ),
  new link(
    "Cutom title view",
    "ns-ui-widgets-category/action-bar/custom-title-view/custom-title-view-page"
  ),
  new link(
    "Setting app icon Android",
    "ns-ui-widgets-category/action-bar/setting-app-icon-android/setting-app-icon-android-page"
  ),
  new link(
    "Navigation button",
    "ns-ui-widgets-category/action-bar/navigation-button/navigation-button-page"
  ),
  new link(
    "Items",
    "ns-ui-widgets-category/action-bar/items-actionbar/items-actionbar-page"
  ),
  new link(
    "Hide/Show ActionBar",
    "ns-ui-widgets-category/action-bar/hide-show-actionbar/hide-show-actionbar-page"
  ),
  new link(
    "Hiding ActionItems",
    "ns-ui-widgets-category/action-bar/hiding-action-items/hiding-action-items-page"
  ),
  new link("Styling", "ns-ui-widgets-category/action-bar/styling/styling-page"),
  new link(
    "Creating SideDrawer button",
    "ns-ui-widgets-category/action-bar/creating-sidedrawer-button/creating-sidedrawer-button-page"
  )
];

const navigationLinksTsc = [
  new link(
    "Code-Behind",
    "ns-ui-widgets-category/action-bar/code-behind/code-behind-ts-page"
  ),
  new link(
    "Hide/Show ActionBar",
    "ns-ui-widgets-category/action-bar/hide-show-actionbar/hide-show-actionbar-ts-page"
  ),
  new link(
    "Hiding ActionItems",
    "ns-ui-widgets-category/action-bar/hiding-action-items/hiding-action-items-ts-page"
  ),
  new link(
    "Items",
    "ns-ui-widgets-category/action-bar/items-actionbar/items-actionbar-ts-page"
  ),
  new link(
    "Navigation button",
    "ns-ui-widgets-category/action-bar/navigation-button/navigation-button-ts-page"
  )
];

function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = new ListViewLinksModel({
    links: navigationLinks,
    actionBarTitle: args.context.title,
    showTypeScriptExamples: false,
    tsclinks: navigationLinksTsc
  });
}
exports.onNavigatingTo = onNavigatingTo;
