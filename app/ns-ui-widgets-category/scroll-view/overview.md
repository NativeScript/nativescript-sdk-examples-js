The ScrollableView component allows you to display a scrollable area in your application, which has content that is larger than its bounds.
The ScrollView has an `orientation` property, which allows you to set different orientations to the view:

The possible values of `orientation` are:
 - `horizontal`
 - `vertical`
 
It is possible to handle the `scroll` event of the View by binding to the ScrollView’s `scroll` event.

<snippet id='search-bar-require'/>
<snippet id='search-bar-import'/>

<snippet id='require-list-view'/>
<snippet id='require-list-view-ts'/>

> Note: Using `ScrollView` in `ScrollView`, `ListView` in a `ScrollView` or `ScrollView` in the `ListView`'s items can lead to a poor user interface performance and can reflect the user experience. For avoiding those issues, we should specify the height explicitly for the `ListView` in the scenario when the `ListView` is nested in `ScrollView`, the `ScrollView`'s height - when the component is used inside the `ListView` and the child ScrollView's height in `ScrollView` in `ScrollView` scenario. 
Example 1 (`ListView` in `ScrollView`): 
```XML
<ScrollView>
    <StackLayout>
        <ListView height="150" items="{{ myTitles }}">
                <ListView.itemTemplate>
                    <!-- ....... -->
                </ListView.itemTemplate>
        </ListView>
    </StackLayout>
</ScrollView>
```
Example 2 (`ScrollView` in `ListView`): 
```XML
<ListView items="{{ myTitles }}">
	<ListView.itemTemplate>
		<StackLayout class="list-group-item">
			<ScrollView height="150" >
                <!-- ....... -->
            </ScrollView>
		</StackLayout>
	</ListView.itemTemplate>
</ListView>
```
Example 3 (`ScrollView` in `ScrollView`): 
```XML
<ScrollView>
    <StackLayout>
        <ScrollView height="150" >
            <!-- ....... -->
        </ScrollView>
    </StackLayout>
</ScrollView>
```
