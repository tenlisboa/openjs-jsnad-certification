# Debugging and Diagnostics

You can use the `--inspect` flag to initiate the inspector, this will start a debugger server and listen on a default port `9229`, you can also specify a port using `--inspect=PORT` or `--inspect-port=PORT`.

So opening a chrome based browser and navigating to `chrome://inspect` will show you the inspector, you can also use the `node-inspect` module to open the inspector in a new chrome tab.

You can set breakpoints in your code using the `debugger` keyword, you can also use the `--inspect-brk` flag to break on the first line of the script.
