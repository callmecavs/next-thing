const frame = func => window.requestAnimationFrame(func)

export { frame }

const supportsImmediate = typeof window.setImmediate === 'function'

const next = supportsImmediate
  ? func => window.setImmediate(func)
  : func => window.setTimeout(func, 0)

const tick = func => next(func)

export { tick }

const supportsIdle = typeof window.requestIdleCallback === 'function'

const when = supportsIdle
  ? func => window.requestIdleCallback(func)
  : tick

const idle = func => when(func)

export { idle }
