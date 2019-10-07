### Scroll Event

Using `scroll` event to track the scroll position via `scrollX` and `scrollY` from `ScrollEventData`.

<snippet id='scroll-event-xml'/>
<snippet id='scroll-view-event-code'/>
<snippet id='scroll-view-event-code-ts'/>

### Performance Tips

Using `ScrollView` in `ScrollView`, `ListView` in a `ScrollView` or `ScrollView` in the `ListView`'s items can lead to a poor user interface performance and can reflect the user experience. For avoiding those issues, we should specify the height explicitly for the `ListView` in the scenario when the `ListView` is nested in `ScrollView`, the `ScrollView`'s height - when the component is used inside the `ListView` and the child ScrollView's height in `ScrollView` in `ScrollView` scenario. 
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