question 1
Explain why do we want sometimes to use setImmediate instead of using setTimeout?
setTimeout runs in Timer phase, setImmediate runs in check phase. For example: If there's a case needs to run just before close phase, we can use setImmediate.

question 2

Explain the difference between process.nextTick and setImmediate?
A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.Highest priority than setImmediate.
All of the callbacks in next queue is drained out
Process.nextTick Natively provided by API
setImmediate and setTimeout is provided libuv
A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.Certain or remaining of the next iteration/next tick

question 3

Name 10 global modules/methods available in Node environment.
	Buffer
	Console
	 exports 
	global 
	module
	 process 
	require()
	 setImmediate()
	clearImmediate()
	 setInterval()
	clearInterval() 
	setTimeout()
	clearTimeout() 
	URL
	http


