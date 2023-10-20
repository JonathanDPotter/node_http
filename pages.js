const home = `<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
  </head>
  <body>
    <header>
      <h1>Welcome to my node site!</h1>
      <nav>
        <ul>
          <li><a href="/about" class="link">learn more about me</a></li>
          <li><a href="/echo" class="link">see some request info</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <img
        src="https://i.pinimg.com/originals/2d/2b/17/2d2b17ee9b3c6e7900b3c74e1dc2e5f7.jpg"
        alt="computer"
      />
    </main>
    <footer>
      <span>2023 Jonathan Potter</span>
    </footer>
  </body>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    ul {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    li {
      list-style-type: none;
    }

    .link {
      color: yellow;
    }

    img {
      max-height: 60vh;
      margin: auto;
    }

    header {
      background-color: slategray;
      color: white;
      padding: 1rem;
      text-align: center;
    }

    main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    footer {
      background-color: slategrey;
      color: white;
      margin-top: auto;
      padding: 1rem;
    }

    body {
      height: 100vh;
      background-color: black;
      display: flex;
      flex-direction: column;
    }
  </style>
</html>
`;

const fourOhFour = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404</title>
</head>
<body>
  <p>404 not found</p>
  <a href="/">Go Home</a>
</body>

<style>
  body {
    min-height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 4rem;
  }

  a {
    color: white;
    font-size: 3rem;
  }
</style>
</html>`;

module.exports = { home, fourOhFour };