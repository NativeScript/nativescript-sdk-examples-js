NativeScript allows us to animate the properties of the element we want. 
Once we set the parameters of the animate method (like scale, rotate, duration, etc.), the set properties will be animated.

Animating various properties of a `View` (e.g. `Label` or any other UI element).
| JavaScript Property   | Value Description     |
|:----------------------|:----------------|
| `backgroundColor`     | Accepts hex value or `Color`. |
| `curve`               | Uses the `AnimationCurve` enumeration. |
| `delay`               | Delay in milliseconds. |
| `duration`            | Duration in milliseconds. |
| `iterations`          | Number of times to repeat the animation. |
| `opacity`             | Number value (0 - 1 where 0 is full opacity). |
| `rotate`              | Number value for degrees (0 - 360 degrees). |
| `scale`               | Object value `{ x:1, y:2 }` (1 = Original scale). |
| `translate`           | Object value `{ x:100, y:200 }` (Translate by given DIPs). |

The snippet below shows a test case where all the properties are used in single animation.
<snippet id='animation-properties'/>

When we need to animate taget view (or several views simultaneously) we can use the `Animation` class with `AnimationDefinition`. 
<snippet id='animation-target'/>

Cancelling animation via `cancel` method.
<snippet id='animation-cancel'/>