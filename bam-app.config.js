export default {
  "appManifest": {
    "permissions": [
      "showsPlayer:*",
      "callsWidget:*",
      "callsAgentTool:*"
    ],
    "src": {
      "type": "module",
      "url": "http://localhost:5173/main.js"
    },
    "showsPlayer": {
      "screens": [{
        "id": "start",
        "slot": "pre-enter",
      }]
    },
    "callsWidget": {
      "screens": [{
        "id": "start",
        "slot": "drop-in",
      }]
    },
  }
};
