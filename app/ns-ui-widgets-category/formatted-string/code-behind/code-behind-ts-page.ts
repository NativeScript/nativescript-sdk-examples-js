import {
    Button,
    EventData,
    Label,
    Page,
    StackLayout,
    TextField,
    TextView
} from "@nativescript/core";
// >> formatted-string-require-ts
import { FormattedString, Span } from "@nativescript/core";
// << formatted-string-require-ts
export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const container = <StackLayout>page.getViewById("container");
    // >> formatted-string-label-code-ts
    const label = new Label();

    const firstLabelSpan = new Span();
    firstLabelSpan.text = "Formatted String ";
    const secondLabelSpan = new Span();
    secondLabelSpan.text = "Label";

    const formattedStringLabel = new FormattedString();
    formattedStringLabel.spans.push(firstLabelSpan);
    formattedStringLabel.spans.push(secondLabelSpan);

    label.formattedText = formattedStringLabel;
    // << formatted-string-label-code-ts
    // >> formatted-string-button-code-ts
    const button = new Button();

    const formattedStringButton = new FormattedString();
    const firstButtonSpan = new Span();
    const secondButtonSpan = new Span();

    firstButtonSpan.text = "Formatted String ";
    secondButtonSpan.text = "Button";

    formattedStringButton.spans.push(firstButtonSpan);
    formattedStringButton.spans.push(secondButtonSpan);

    button.formattedText = formattedStringButton;
    // << formatted-string-button-code-ts
    // >> formatted-string-textfield-code-ts
    const textField = new TextField();

    const formattedStringTextField = new FormattedString();
    const firstTextFieldSpan = new Span();
    const secondTextFieldSpan = new Span();

    firstTextFieldSpan.fontSize = 15;
    firstTextFieldSpan.text = "Formatted String ";
    secondTextFieldSpan.text = "TextField";

    formattedStringTextField.spans.push(firstTextFieldSpan);
    formattedStringTextField.spans.push(secondTextFieldSpan);

    textField.formattedText = formattedStringTextField;
    // << formatted-string-textfield-code-ts
    // >> formatted-string-textview-code-ts
    const textView = new TextView();

    const formattedStringTextView = new FormattedString();
    const firstTextViewSpan = new Span();
    const secondTextViewSpan = new Span();

    firstTextViewSpan.fontSize = 15;
    firstTextViewSpan.text = "Formatted String ";
    secondTextViewSpan.text = "TextView";

    formattedStringTextView.spans.push(firstTextViewSpan);
    formattedStringTextView.spans.push(secondTextViewSpan);

    textView.formattedText = formattedStringTextView;
    // << formatted-string-textview-code-ts
    container.addChild(label);
    container.addChild(button);
    container.addChild(textField);
    container.addChild(textView);
}
