export default function (constructor: Function) {
	Object.seal(constructor)
	Object.seal(constructor.prototype)
}
