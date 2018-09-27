NativeScript allows us to animate the properties of the element we want. 
Once the parameters of the animate method are set (e.g. `scale`, `rotate`, `duration`, etc.), the properties will be animated.

NativeScript lets you animate the following properties:

`opacity`
`backgroundColor`
`translateX` and `translateY`
`scaleX` and `scaleY`
`rotate`

In every animation, you can control the following properties:

`duration`: The length of the animation.
`delay`: The amount of time to delay starting the animation.
`iterations`: Specifies how many times the animation should be played.
`curve`: The speed curve of the animation. Available options are defined below.

Property values:  

| JavaScript Property   | Value Description             |
|:----------------------|:------------------------------|
| `backgroundColor`     | Accepts hex or `Color` value. |
| `curve`               | Timing funciton that uses the `AnimationCurve` enumeration. |
| `delay`               | Delay the animation start in milliseconds. |
| `duration`            | Duration of animation in milliseconds. |
| `iterations`          | Number of times to repeat the animation. |
| `opacity`             | Number value (0 - 1 where 0 is full opacity). |
| `rotate`              | Number value for degrees (0 - 360 degrees). |
| `scale`               | Object value `{ x:1, y:2 }` (1 = Original scale). |
| `translate`           | Object value `{ x:100, y:200 }` (Translate by given DIPs). |


The first example will change the background color of a `view` from "red" to "green". 
<snippet id='animating-background-color'/>
<snippet id='animating-background-color-ts'/>

The following example shows a test case where all the properties are used in single animation.
<snippet id='animation-properties'/>
<snippet id='animation-properties-ts'/>

By default, an animation moves with a linear speed without acceleration or deceleration. This might look unnatural and different from the real world where objects need time to reach their top speed and can't stop immediately. The animation curve (sometimes called an easing or timing function) is used to give animations an illusion of inertia. It controls the animation speed by modifying the fraction of the duration. NativeScript comes with a number of predefined animation curves defined in [`AnimationCurve` enumeration](https://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve).

- `linear`: The simplest animation curve is linear. It maintains a constant speed while the animation is running.
- `easeIn`: The ease-in curve causes the animation to begin slowly, and then speed up as it progresses. 
- `easeOut`: An ease-out curve causes the animation to begin quickly, and then slow down as it completes.
- `easeInOut`: An ease-in ease-out curve causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- `spring`: A spring animation curve causes an animation to produce a spring (bounce) effect. 

In NativeScript, the animation curve is represented by the `AnimationCurve` enumeration and can be specified with the curve property of the animation.
<snippet id='using-animation-curve-enum'/>
<snippet id='using-animation-curve-enum-ts'/>

[Experiment with the different animation timing functions in the NativeScript Playground](https://play.nativescript.org/?template=play-tsc&id=RE7NqF&v=53)

It is easy to create your own animation curve by passing in the X and Y components of two control points of a cubic Bezier curve. 
Using Bezier curves is a common technique to create smooth curves in computer graphics and they are widely used in vector-based drawing tools. 
The values passed to the cubicBezier method control the curve shape. The animation speed will be adjusted based on the resulting path.

For help finding the cubicBezier values you need for your custom animation timing function, use the visual tools on [cubic-bezier.com](http://cubic-bezier.com). 
Once you find an animation path you like, simply copy and paste the cubic bezier values and paste them in the AnimationCurve.cubicBezier function. 
There should be four numbers (X,Y coordinates for each of the two points in the animation).

<snippet id='creating-cubic-bezier'/>
<snippet id='creating-cubic-bezier-ts'/>

To animate a target view (or to create a complex animation for multiple views/layouts) we can an array of `AnimationDefinition` and pass it to the `Animation` constructor.
Using the `target` proerty in the definition, allows us full control of the animation object via code.
<snippet id='animation-target'/>
<snippet id='animation-target-ts'/>

Cancelling an animation via the `cancel` method.
<snippet id='animation-cancel'/>
<snippet id='animation-cancel-ts'/>