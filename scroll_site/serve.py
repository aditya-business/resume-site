#!/usr/bin/env python3
"""Serve this folder on localhost and open it in the default browser."""
import http.server, socketserver, webbrowser, os, sys, threading

os.chdir(os.path.dirname(os.path.abspath(__file__)))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

socketserver.ThreadingTCPServer.allow_reuse_address = True
socketserver.ThreadingTCPServer.daemon_threads = True

for port in range(PORT, PORT + 20):
    try:
        httpd = socketserver.ThreadingTCPServer(("127.0.0.1", port), Handler)
        break
    except OSError:
        continue
else:
    sys.exit("No free port found")

url = f"http://localhost:{port}"
print(f"\n  Scroll animation running at  {url}\n  Press Ctrl+C to stop.\n")
threading.Timer(0.6, lambda: webbrowser.open(url)).start()
try:
    httpd.serve_forever()
except KeyboardInterrupt:
    pass
