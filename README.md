# MTR PA Monitor Simulation

This project simulates an MTR PA (Passenger Annoucement) Page for the SP1900 model. The simulation includes a webpage interface with a navigation bar and a panel for displaying content. Currently, the project supports 5 PA (Public Address) systems, but the navigation bar buttons are non-functional.

## Project Structure

The project is organized as follows:

```
MTR sidemon/
├── Client/
├── Server/
│   ├── index.html
│   ├── panel.html
│   ├── reset.css
│   ├── sound.js
│   ├── style.css
│   ├── Media/
│   │   ├── images/
│   │   └── sound/
│   └── Websocket Test/
│       ├── index.html
│       ├── index.js
│       └── server.js
└── package.json
```

### Key Files

- **Server/index.html**: Main entry point for the simulation. It includes an iframe that loads `panel.html`.
- **Server/panel.html**: Contains the content displayed in the iframe.
- **Server/style.css**: Styles for the webpage.
- **Server/sound.js**: Handles sound-related functionality.
- **Server/reset.css**: Resets default browser styles.
- **Server/Media/**: Contains media assets such as images and sound files.
- **Server/Websocket Test/**: Contains files for testing WebSocket functionality.

## Features

- **Responsive Design**: The main panel is centered and maintains a 5:4 aspect ratio.
- **Iframe Integration**: The `index.html` file loads `panel.html` in an iframe.
- **Media Support**: Includes placeholders for images and sound files.

## Limitations

- **Non-functional Navigation Bar**: The buttons on the navigation bar are currently non-functional.
- **Limited PA Systems**: Only 5 PA sounds are included in the simulation currently.

## How to Run

1. Clone the repository or download the project files.
2. Open `Server/index.html` in a web browser to view the simulation.
3. For WebSocket testing, navigate to the `Server/Websocket Test/` directory and follow the instructions in `server.js`.

## Future Improvements

- live time update.
- change train no, destination and next station.
- Implement functionality for the navigation bar buttons.
- Add more PA sound effect to the simulation.
- Connecting to the passenger side monitor by websocket so that the notification pops up on that screen.

## License

This project is licensed under the MIT License. See the LICENSE file for details.