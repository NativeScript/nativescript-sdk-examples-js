import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
  new Link("Usage", "ns-ui-widgets-category/action-bar/usage/usage-page"),
  new Link(
    "Code-Behind",
    "ns-ui-widgets-category/action-bar/code-behind/code-behind-page"
  ),
  new Link(
    "Cutom title view",
    "ns-ui-widgets-category/action-bar/custom-title-view/custom-title-view-page"
  ),
  new Link(
    "Setting app icon Android",
    "ns-ui-widgets-category/action-bar/setting-app-icon-android/setting-app-icon-android-page"
  ),
  new Link(
    "Items",
    "ns-ui-widgets-category/action-bar/items-actionbar/items-actionbar-page"
  ),
  new Link(
    "Hide/Show ActionBar",
    "ns-ui-widgets-category/action-bar/hide-show-actionbar/hide-show-actionbar-page"
  ),
  new Link(
    "Hiding ActionItems",
    "ns-ui-widgets-category/action-bar/hiding-action-items/hiding-action-items-page"
  ),
  new Link("Styling", "ns-ui-widgets-category/action-bar/styling/styling-page"),
  new Link(
    "Creating SideDrawer button",
    "ns-ui-widgets-category/action-bar/creating-sidedrawer-button/creating-sidedrawer-button-page"
  )
];

const navigationLinksTsc = [
  new Link("Usage", "ns-ui-widgets-category/action-bar/usage/usage-ts-page"),
  new Link(
    "Code-Behind",
    "ns-ui-widgets-category/action-bar/code-behind/code-behind-ts-page"
  ),
  new Link(
    "Hide/Show ActionBar",
    "ns-ui-widgets-category/action-bar/hide-show-actionbar/hide-show-actionbar-ts-page"
  ),
  new Link(
    "Hiding ActionItems",
    "ns-ui-widgets-category/action-bar/hiding-action-items/hiding-action-items-ts-page"
  ),
  new Link(
    "Items",
    "ns-ui-widgets-category/action-bar/items-actionbar/items-actionbar-ts-page"
  )
];

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = new ListViewLinksModel({
    links: navigationLinks,
    actionBarTitle: args.context.title,
    showTypeScriptExamples: false,
    tsclinks: navigationLinksTsc
  });
}

