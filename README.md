Purpose
========
If you simply want to write Kotlin/JS apps that use three.js, then please check out my [kotlin-three-js-starter](https://github.com/liorgonnen/kotlin-three-js-starter) repo.

If you want to generate your own external Kotlin/JS declarations for three.js, then you can use this repo.
It modifies some of the `d.ts` typescript types to work correctly with Dukat

I originally created a [modified version](https://github.com/liorgonnen/dukat) of Dukat in order to generate the external declarations, but Dukat is slowly getting better, so my current approach is to run Dukat (v0.5.7) on this repo like so:

```
dukat -d ./gen ./src/Three.d.ts
```


And then run this quick-and-dirty fix: 

(Create a simple Kotlin console app and drop in this code)

```
import java.io.File

fun main() {
    val externalsFolder = "./gen" // NOTE: PUT YOUR GENERATED FILES FOLDER HERE!

    val module = "@file:JsModule(\"three\")"
    val nonModule = "@file:JsNonModule"
    val suppress = "@file:Suppress(\"ABSTRACT_MEMBER_NOT_IMPLEMENTED\", \"VAR_TYPE_MISMATCH_ON_OVERRIDE\", \"INTERFACE_WITH_SUPERCLASS\", \"OVERRIDING_FINAL_MEMBER\", \"RETURN_TYPE_MISMATCH_ON_OVERRIDE\", \"CONFLICTING_OVERLOADS\", \"EXTERNAL_DELEGATION\", \"PackageDirectoryMismatch\")"
    val threePackage = "package three.js"

    val mainFile = "Three.module_three.kt"

    File(externalsFolder).listFiles()?.forEach { file ->
        println("Processing: ${file.name}")
        file.readText().let { fileContent ->
            val relevantContent = fileContent
                .replace("external open", "open external")
                .replace("ProgressEvent__0", "ProgressEvent") // We handle __0 classes later, but ProgressEvent doesn't have the type parameters, so we handle it separately
                .split("\n")
                .asSequence()
                .filterNot { it.contains(Regex("class \\w*__0\\b")) } // Remove all classes that end with __0 (e.g Mesh__0)
                .filterNot { it.startsWith("@file") }
                .filterNot { it.startsWith("package") }
                .filterNot { it.startsWith("import tsstdlib") }
                .map { it.replace("__0", "<dynamic, dynamic>") }
                .joinToString("\n")

            val finalContent = additionalOneOffProcessing(file.name, relevantContent)

            val finalFile = listOfNotNull(
                    module.takeIf { file.name != mainFile },
                    nonModule.takeIf { file.name != mainFile },
                    suppress, threePackage
            ).joinToString("\n") + "\n" + finalContent

            File(file.path).writeText(finalFile)
        }
    }

    File("$externalsFolder/three.js.module_three.kt").delete()
}

fun additionalOneOffProcessing(filename: String, fileContent: String) = when (filename.takeWhile { it != '.' }) {
    "ObjectLoader" -> fileContent.replace("load(", "<ObjectType: Object3D> load(")
    else -> fileContent
}
```

And finally, you want to copy the generated three.js files (and only those) to their target location:

```
find ./gen -iname "./gen/*.module_three.kt" -exec cp {} YOUR_TARGET_FOLDER_HERE \;
```
 
