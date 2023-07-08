# Buffers

## Creating buffers

The recommended way to create a buffer is `Buffer.alloc` method, it creates a buffer filled with zeroes.

If we use the `Buffer.allocUnsafe` we will create a Buffer from the unallocated memory, what means that it is not necessarily wiped properly, and it can be created with residual garbage.
