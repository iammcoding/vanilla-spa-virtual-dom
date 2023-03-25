# vanilla-spa-virtual-dom
Simple Single-Page Application with Vanilla JavaScript and Virtual DOM

 
## How it Works

The application uses JavaScript to handle navigation and routing. When the user clicks on a link in the navigation bar, an event listener is triggered which updates the content based on the current route. The routes and their associated content are defined as functions and stored in an object. When a new route is accessed, the corresponding function is called, and the content is rendered to the page.

The virtual DOM is used to render the content to the actual DOM. The `render()` function takes a virtual DOM object and a container element and recursively creates and appends DOM elements to the container based on the object's properties.

## Usage

To use this code for your own single page app, simply clone or download the repository and modify the routes and associated content to fit your needs.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
