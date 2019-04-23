
The application module provides cross-platform application events to handle different application states.
With the provided application events the user can handle launch, resume, suspend and exit states or provide logic
related to the screen orientation, uncaught errors and low memory events.

Use the application method `on` to add event listeners.

### Launch Event
<snippet id='application-events-launch'/>
<snippet id='application-events-launch-ts'/>

### Suspend Event
<snippet id='application-events-suspend'/>
<snippet id='application-events-suspend-ts'/>

### Resume Event
<snippet id='application-events-resume'/>
<snippet id='application-events-resume-ts'/>

### Exit Event
<snippet id='application-events-exit'/>
<snippet id='application-events-exit-ts'/>

### Displayed Event
<snippet id='application-events-displayed'/>
<snippet id='application-events-displayed-ts'/>

### Low Memory Event
<snippet id='application-events-low-memory'/>
<snippet id='application-events-low-memory-ts'/>

### Orientation Changed Event
<snippet id='application-events-orientation'/>
<snippet id='application-events-orientation-ts'/>

### Uncaught Error Event
<snippet id='application-events-error'/>
<snippet id='application-events-error-ts'/>

### Unsubscribing Event Listener
Use the application method `off` to remove the registered event listeners.
<snippet id='application-events-off'/>
<snippet id='application-events-off-ts'/>
