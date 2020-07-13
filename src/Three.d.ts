// Added these types and interfaces so that we don't need to bring the entire dom .d.ts files with us
// That's already handled by Kotlin/JS
export type GLenum = number;
export type TypedArray = ArrayBufferView;

export interface AudioNode { }
export interface GainNode extends AudioNode{ }
export interface PannerNode extends AudioNode { }
export interface AudioContext { }
export interface AudioBuffer { }
export interface AudioBufferSourceNode { }
export interface MediaStream { }
export interface AnalyserNode { }
export interface ArrayLike<T> { }
export interface WebGL2RenderingContext { }
export interface ProgresssEvent { }

// All *Utils files are disabled since dukat doesn't handle namespaces correctly yet

// export { polyfills } from './polyfills';
export { WebGLMultisampleRenderTarget } from './renderers/WebGLMultisampleRenderTarget';
export { WebGLCubeRenderTarget } from './renderers/WebGLCubeRenderTarget';
export { WebGLRenderTarget } from './renderers/WebGLRenderTarget';
export { WebGLRenderer } from './renderers/WebGLRenderer';
export { WebGL1Renderer } from './renderers/WebGL1Renderer';
export { Shader } from './renderers/shaders/ShaderLib';
export { ShaderLib } from './renderers/shaders/ShaderLib';
export { UniformsLib } from './renderers/shaders/UniformsLib';
// export { UniformsUtils } from './renderers/shaders/UniformsUtils';
export { ShaderChunk } from './renderers/shaders/ShaderChunk';
export { FogExp2 } from './scenes/FogExp2';
export { Fog } from './scenes/Fog';
export { Scene } from './scenes/Scene';
export { Sprite } from './objects/Sprite';
export { LOD } from './objects/LOD';
export { InstancedMesh } from './objects/InstancedMesh';
export { SkinnedMesh } from './objects/SkinnedMesh';
export { Skeleton } from './objects/Skeleton';
export { Bone } from './objects/Bone';
export { Mesh } from './objects/Mesh';
export { LineSegments } from './objects/LineSegments';
export { LineLoop } from './objects/LineLoop';
export { Line } from './objects/Line';
export { Points } from './objects/Points';
export { Group } from './objects/Group';
export { VideoTexture } from './textures/VideoTexture';
export { DataTexture } from './textures/DataTexture';
export { DataTexture3D } from './textures/DataTexture3D';
export { CompressedTexture } from './textures/CompressedTexture';
export { CubeTexture } from './textures/CubeTexture';
export { CanvasTexture } from './textures/CanvasTexture';
export { DepthTexture } from './textures/DepthTexture';
export { Texture } from './textures/Texture';

// export { Geometries } from './geometries/Geometries'; // Replaced by the following batch:
export { WireframeGeometry } from './geometries/WireframeGeometry';
export { ParametricGeometry } from './geometries/ParametricGeometry';
export { TetrahedronGeometry } from './geometries/TetrahedronGeometry';
export { OctahedronGeometry } from './geometries/OctahedronGeometry';
export { IcosahedronGeometry } from './geometries/IcosahedronGeometry';
export { DodecahedronGeometry } from './geometries/DodecahedronGeometry';
export { PolyhedronGeometry } from './geometries/PolyhedronGeometry';
export { TubeGeometry } from './geometries/TubeGeometry';
export { TorusKnotGeometry } from './geometries/TorusKnotGeometry';
export { TorusGeometry } from './geometries/TorusGeometry';
export { TextGeometry } from './geometries/TextGeometry';
export { SphereGeometry } from './geometries/SphereGeometry';
export { SphereBufferGeometry } from './geometries/SphereGeometry';
export { RingGeometry } from './geometries/RingGeometry';
export { PlaneGeometry } from './geometries/PlaneGeometry';
export { LatheGeometry } from './geometries/LatheGeometry';
export { ShapeGeometry } from './geometries/ShapeGeometry';
export { ExtrudeGeometry } from './geometries/ExtrudeGeometry';
export { EdgesGeometry } from './geometries/EdgesGeometry';
export { ConeGeometry } from './geometries/ConeGeometry';
export { CylinderGeometry } from './geometries/CylinderGeometry';
export { CircleGeometry } from './geometries/CircleGeometry';
export { BoxGeometry } from './geometries/BoxGeometry';

// export { Materials } from './materials/Materials'; // Replaced by the following batch:
export { ShadowMaterial } from './materials/ShadowMaterial';
export { SpriteMaterial } from './materials/SpriteMaterial';
export { RawShaderMaterial } from './materials/RawShaderMaterial';
export { ShaderMaterial } from './materials/ShaderMaterial';
export { PointsMaterial } from './materials/PointsMaterial';
export { MeshPhysicalMaterial } from './materials/MeshPhysicalMaterial';
export { MeshStandardMaterial } from './materials/MeshStandardMaterial';
export { MeshPhongMaterial } from './materials/MeshPhongMaterial';
export { MeshToonMaterial } from './materials/MeshToonMaterial';
export { MeshNormalMaterial } from './materials/MeshNormalMaterial';
export { MeshLambertMaterial } from './materials/MeshLambertMaterial';
export { MeshDepthMaterial } from './materials/MeshDepthMaterial';
export { MeshDistanceMaterial } from './materials/MeshDistanceMaterial';
export { MeshBasicMaterial } from './materials/MeshBasicMaterial';
export { MeshMatcapMaterial } from './materials/MeshMatcapMaterial';
export { LineDashedMaterial } from './materials/LineDashedMaterial';
export { LineBasicMaterial } from './materials/LineBasicMaterial';
export { Material } from './materials/Material';

export { AnimationLoader } from './loaders/AnimationLoader';
export { CompressedTextureLoader } from './loaders/CompressedTextureLoader';
export { DataTextureLoader } from './loaders/DataTextureLoader';
export { CubeTextureLoader } from './loaders/CubeTextureLoader';
export { TextureLoader } from './loaders/TextureLoader';
export { ObjectLoader } from './loaders/ObjectLoader';
export { MaterialLoader } from './loaders/MaterialLoader';
export { BufferGeometryLoader } from './loaders/BufferGeometryLoader';
export { LoadingManager } from './loaders/LoadingManager';
export { ImageLoader } from './loaders/ImageLoader';
export { ImageBitmapLoader } from './loaders/ImageBitmapLoader';
export { FontLoader } from './loaders/FontLoader';
export { FileLoader } from './loaders/FileLoader';
export { Loader } from './loaders/Loader';
export { LoaderUtils } from './loaders/LoaderUtils';
export { Cache } from './loaders/Cache';
export { AudioLoader } from './loaders/AudioLoader';
export { SpotLightShadow } from './lights/SpotLightShadow';
export { SpotLight } from './lights/SpotLight';
export { PointLight } from './lights/PointLight';
export { RectAreaLight } from './lights/RectAreaLight';
export { HemisphereLight } from './lights/HemisphereLight';
export { DirectionalLightShadow } from './lights/DirectionalLightShadow';
export { DirectionalLight } from './lights/DirectionalLight';
export { AmbientLight } from './lights/AmbientLight';
export { LightShadow } from './lights/LightShadow';
export { Light } from './lights/Light';
export { AmbientLightProbe } from './lights/AmbientLightProbe';
export { HemisphereLightProbe } from './lights/HemisphereLightProbe';
export { LightProbe } from './lights/LightProbe';
export { StereoCamera } from './cameras/StereoCamera';
export { PerspectiveCamera } from './cameras/PerspectiveCamera';
export { OrthographicCamera } from './cameras/OrthographicCamera';
export { CubeCamera } from './cameras/CubeCamera';
export { ArrayCamera } from './cameras/ArrayCamera';
export { Camera } from './cameras/Camera';
export { AudioListener } from './audio/AudioListener';
export { PositionalAudio } from './audio/PositionalAudio';

// Not needed. Declard above
//export { AudioContext } from './audio/AudioContext';

export { AudioAnalyser } from './audio/AudioAnalyser';
export { Audio } from './audio/Audio';
export { VectorKeyframeTrack } from './animation/tracks/VectorKeyframeTrack';
export { StringKeyframeTrack } from './animation/tracks/StringKeyframeTrack';
export { QuaternionKeyframeTrack } from './animation/tracks/QuaternionKeyframeTrack';
export { NumberKeyframeTrack } from './animation/tracks/NumberKeyframeTrack';
export { ColorKeyframeTrack } from './animation/tracks/ColorKeyframeTrack';
export { BooleanKeyframeTrack } from './animation/tracks/BooleanKeyframeTrack';
export { PropertyMixer } from './animation/PropertyMixer';
export { PropertyBinding } from './animation/PropertyBinding';
export { KeyframeTrack } from './animation/KeyframeTrack';
// export { AnimationUtils } from './animation/AnimationUtils';
export { AnimationObjectGroup } from './animation/AnimationObjectGroup';
export { AnimationMixer } from './animation/AnimationMixer';
export { AnimationClip } from './animation/AnimationClip';
export { AnimationAction } from './animation/AnimationAction';
export { Uniform } from './core/Uniform';
export { InstancedBufferGeometry } from './core/InstancedBufferGeometry';
export { BufferGeometry } from './core/BufferGeometry';
export { Geometry } from './core/Geometry';
export { InterleavedBufferAttribute } from './core/InterleavedBufferAttribute';
export { InstancedInterleavedBuffer } from './core/InstancedInterleavedBuffer';
export { InterleavedBuffer } from './core/InterleavedBuffer';
export { InstancedBufferAttribute } from './core/InstancedBufferAttribute';
export { BufferAttribute } from './core/BufferAttribute';
export { Int8Attribute } from './core/BufferAttribute';
export { Uint8Attribute } from './core/BufferAttribute';
export { Uint8ClampedAttribute } from './core/BufferAttribute';
export { Uint8ClampedAttribute } from './core/BufferAttribute';
export { Int16Attribute } from './core/BufferAttribute';
export { Uint16Attribute } from './core/BufferAttribute';
export { Int32Attribute } from './core/BufferAttribute';
export { Uint32Attribute } from './core/BufferAttribute';
export { Float32Attribute } from './core/BufferAttribute';
export { Float64Attribute } from './core/BufferAttribute';
export { Int8BufferAttribute } from './core/BufferAttribute';
export { Uint8BufferAttribute } from './core/BufferAttribute';
export { Uint8ClampedBufferAttribute } from './core/BufferAttribute';
export { Int16BufferAttribute } from './core/BufferAttribute';
export { Uint16BufferAttribute } from './core/BufferAttribute';
export { Int32BufferAttribute } from './core/BufferAttribute';
export { Uint32BufferAttribute } from './core/BufferAttribute';
export { Float32BufferAttribute } from './core/BufferAttribute';
export { Float64BufferAttribute } from './core/BufferAttribute';
export { Face3 } from './core/Face3';
export { Object3D } from './core/Object3D';
export { Raycaster } from './core/Raycaster';
export { Layers } from './core/Layers';
export { EventDispatcher } from './core/EventDispatcher';
export { DirectGeometry } from './core/DirectGeometry';
export { Clock } from './core/Clock';
export { QuaternionLinearInterpolant } from './math/interpolants/QuaternionLinearInterpolant';
export { LinearInterpolant } from './math/interpolants/LinearInterpolant';
export { DiscreteInterpolant } from './math/interpolants/DiscreteInterpolant';
export { CubicInterpolant } from './math/interpolants/CubicInterpolant';
export { Interpolant } from './math/Interpolant';
export { Triangle } from './math/Triangle';
// export { MathUtils } from './math/MathUtils';
export { Spherical } from './math/Spherical';
export { Cylindrical } from './math/Cylindrical';
export { Plane } from './math/Plane';
export { Frustum } from './math/Frustum';
export { Sphere } from './math/Sphere';
export { Ray } from './math/Ray';
export { Matrix4 } from './math/Matrix4';
export { Matrix3 } from './math/Matrix3';
export { Box3 } from './math/Box3';
export { Box2 } from './math/Box2';
export { Line3 } from './math/Line3';
export { Euler } from './math/Euler';
export { Vector4 } from './math/Vector4';
export { Vector3 } from './math/Vector3';
export { Vector2 } from './math/Vector2';
export { Quaternion } from './math/Quaternion';
export { Color } from './math/Color';
export { SphericalHarmonics3 } from './math/SphericalHarmonics3';
export { ImmediateRenderObject } from './extras/objects/ImmediateRenderObject';
export { SpotLightHelper } from './helpers/SpotLightHelper';
export { SkeletonHelper } from './helpers/SkeletonHelper';
export { PointLightHelper } from './helpers/PointLightHelper';
export { HemisphereLightHelper } from './helpers/HemisphereLightHelper';
export { GridHelper } from './helpers/GridHelper';
export { PolarGridHelper } from './helpers/PolarGridHelper';
export { DirectionalLightHelper } from './helpers/DirectionalLightHelper';
export { CameraHelper } from './helpers/CameraHelper';
export { BoxHelper } from './helpers/BoxHelper';
export { Box3Helper } from './helpers/Box3Helper';
export { PlaneHelper } from './helpers/PlaneHelper';
export { ArrowHelper } from './helpers/ArrowHelper';
export { AxesHelper } from './helpers/AxesHelper';
// export { Curves } from './extras/curves/Curves';
export { Shape } from './extras/core/Shape';
export { Path } from './extras/core/Path';
export { ShapePath } from './extras/core/ShapePath';
export { Font } from './extras/core/Font';
export { CurvePath } from './extras/core/CurvePath';
export { Curve } from './extras/core/Curve';

export { ArcCurve } from './extras/curves/ArcCurve';
export { CatmullRomCurve3 } from './extras/curves/CatmullRomCurve3';
export { CubicBezierCurve } from './extras/curves/CubicBezierCurve';
export { CubicBezierCurve3 } from './extras/curves/CubicBezierCurve3';
export { EllipseCurve } from './extras/curves/EllipseCurve';
export { LineCurve } from './extras/curves/LineCurve';
export { LineCurve3 } from './extras/curves/LineCurve3';
export { QuadraticBezierCurve } from './extras/curves/QuadraticBezierCurve';
export { QuadraticBezierCurve3 } from './extras/curves/QuadraticBezierCurve3';
export { SplineCurve } from './extras/curves/SplineCurve';

// export { ImageUtils } from './extras/ImageUtils';
// export { ShapeUtils } from './extras/ShapeUtils';
export { PMREMGenerator } from './extras/PMREMGenerator';
export { WebGLBufferRenderer } from './renderers/webgl/WebGLBufferRenderer';
export { WebGLCapabilities } from './renderers/webgl/WebGLCapabilities';
export { WebGLClipping } from './renderers/webgl/WebGLClipping';
export { WebGLExtensions } from './renderers/webgl/WebGLExtensions';
export { WebGLGeometries } from './renderers/webgl/WebGLGeometries';
export { WebGLIndexedBufferRenderer } from './renderers/webgl/WebGLIndexedBufferRenderer';
export { WebGLInfo } from './renderers/webgl/WebGLInfo';
export { WebGLLights } from './renderers/webgl/WebGLLights';
export { WebGLObjects } from './renderers/webgl/WebGLObjects';
export { WebGLProgram } from './renderers/webgl/WebGLProgram';
export { WebGLPrograms } from './renderers/webgl/WebGLPrograms';
export { WebGLProperties } from './renderers/webgl/WebGLProperties';
export { WebGLRenderLists } from './renderers/webgl/WebGLRenderLists';
export { WebGLShader } from './renderers/webgl/WebGLShader';
export { WebGLShadowMap } from './renderers/webgl/WebGLShadowMap';
export { WebGLState } from './renderers/webgl/WebGLState';
export { WebGLTextures } from './renderers/webgl/WebGLTextures';
export { WebGLUniforms } from './renderers/webgl/WebGLUniforms';
//export { constants } from './constants';

//export as namespace THREE;
