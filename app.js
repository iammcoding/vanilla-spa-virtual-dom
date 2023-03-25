 // Define the routes
    const routes = {
      '/': home,
      '/about': about,
      '/contact': contact
    };

    // Define the content for each route
    function home() {
      const vDOM = {
        tag: 'div',
        children: [
          {
            tag: 'h1',
            text: 'Welcome to my single page app!'
          }
        ]
      };
      render(vDOM, document.getElementById('app'));
    }

    function about() {
      const vDOM = {
        tag: 'div',
        children: [
          {
            tag: 'h1',
            text: 'About'
          },
          {
            tag: 'p',
            text: 'This is my single page app.'
          }
        ]
      };
      render(vDOM, document.getElementById('app'));
    }

    function contact() {
      const vDOM = {
        tag: 'div',
        children: [
          {
            tag: 'h1',
            text: 'Contact'
          },
          {
            tag: 'p',
            text: 'Contact me at example@email.com'
          }
        ]
      };
      render(vDOM, document.getElementById('app'));
    }

    // Render the virtual DOM to the actual DOM
    function render(vDOM, container) {
      const element = document.createElement(vDOM.tag);
      if (vDOM.text) {
        element.appendChild(document.createTextNode(vDOM.text));
      }
      if (vDOM.children) {
        vDOM.children.forEach(child => {
          render(child, element);
        });
      }
      container.innerHTML = '';
      container.appendChild(element);
    }

    // Handle navigation and routing
    function router(event) {
      event.preventDefault();
      const currentRoute = event.target.getAttribute('href');
      const routeFunction = routes[currentRoute];
      routeFunction();
      history.pushState({}, '', currentRoute);
    }

    // Listen for navigation events and update the content
    const links = document.querySelectorAll('nav a');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', router);
    }
    window.addEventListener('popstate', router);

    // Set up initial state and render content
    history.pushState({}, '', '/');
    router({target: {getAttribute: () => '/'}});
