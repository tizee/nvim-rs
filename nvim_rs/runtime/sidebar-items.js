initSidebarItems({"fn":[["channel","Create a bounded mpsc channel for communicating between asynchronous tasks, returning the sender/receiver halves."],["spawn","Spawns a new asynchronous task, returning a `JoinHandle` for it."],["stdin","Constructs a new handle to the standard input of the current process."],["stdout","Constructs a new handle to the standard output of the current process."]],"mod":[["oneshot","A channel for sending a single message between asynchronous tasks."]],"struct":[["BufReader","The `BufReader` struct adds buffering to any reader."],["BufWriter","Wraps a writer and buffers its output."],["Child","Representation of a child process spawned onto an event loop."],["ChildStdin","The standard input stream for spawned children."],["ChildStdout","The standard output stream for spawned children."],["Command","This structure mimics the API of [`std::process::Command`] found in the standard library, but replaces functions that create a process with an asynchronous variant. The main provided asynchronous functions are spawn, status, and output."],["Mutex","An asynchronous mutual exclusion primitive useful for protecting shared data"],["Receiver","Receive values from the associated `Sender`."],["Sender","Send values to the associated `Receiver`."],["Stdin","A handle to the standard input stream of a process."],["Stdout","A handle to the standard output stream of a process."],["TcpStream","A TCP stream between a local and a remote socket."],["UnixStream","A structure representing a connected Unix socket."]],"trait":[["AsyncRead","Read bytes from a source."],["AsyncReadExt","Read bytes from a source."],["AsyncWrite","Writes bytes asynchronously."],["AsyncWriteExt","Write bytes to a sink."]],"type":[["Result","A specialized `Result` type for I/O operations."]]});