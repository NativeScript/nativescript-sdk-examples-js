
The application module provides cross-platform application events tp handle different application states.
With the provided applicaiton events the user can handle launch, resume, suspend and exit states or provide logic
related to the screen orientation, uncaught errors and low memory events.

<snippet id='application-events-import'/>

Use the applicaiton method `on` to add event listeners.
<snippet id='application-events'/>

Use the applicaiton method `off` to remove the registered event listeners.
<snippet id='application-events-off'/>