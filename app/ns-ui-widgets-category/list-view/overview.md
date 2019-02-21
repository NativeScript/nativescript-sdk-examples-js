Using a ListView control inside NativeScript app requires some special attention due to the complexity of the NativeScript implementation of the component, with custom item templates, bindings and so on. 

The NativeScript modules provides a custom component which simplifies the way native ListView is used. 

<snippet id='require-list-view'/>
<snippet id='require-list-view-ts'/>

> Note: Using the `ListView` component inside a `ScrollView` or `ScrollView` inside the `ListView`'s items can lead to a poor user interface performance and can reflect the user experience. For avoiding those issues, we should specify the height explicitly for the ListView in the scenario when the ListView is nested in `ScrollView` and the `ScrollView`'s height - when the component is used inside the `ListView`. 
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
