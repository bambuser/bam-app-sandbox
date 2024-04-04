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
      }, {
        "id": "another",
        "slot": "pre-enter",
      }]
    },
    "callsWidget": {
      "screens": [{
        "id": "start",
        "slot": "drop-in",
      }, {
        "id": "another",
        "slot": "pre-media-permissions",
      }]
    },
  }
};
