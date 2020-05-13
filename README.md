Purpose
========
If you simply want to write Kotlin/JS apps that use three.js, then please check out my [kotlin-three-js-starter](https://github.com/liorgonnen/kotlin-three-js-starter) repo.

If you want to generate your own external Kotlin/JS declarations for three.js, then you can use this repo.
It modifies some of the `d.ts` typescript types to work correctly with Dukat

Please note that you'll to use [this](https://github.com/liorgonnen/dukat) version of Dukat in order to generate the external declarations.

Ideally those changes shouldn't be necessary (Dukat should be doing all the work), but I didn't want to spend more time on this as the moment.
 
