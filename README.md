# Next.js and Typescript with React Testing Library and Jest

Last updated:2023/9/29

# Setup

- install all 6 devDependencies

```
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest
```

- and these to package.json

```
{
  "scripts":
  {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest --watch"
  }
}
```

- set up jest.config.js in root directory and these lines of code:

```
//ES6 import doesnot work so use common js although the official next doc suggests otherwise
//import nextJest from 'next/jest.js'
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset:'ts-jest',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
//export default createJestConfig(config)
module.exports = createJestConfig(config);
```

- Add jest.setup.js and add the following code:

```
import '@testing-library/jest-dom'
```

- To use eslint throughout the testing

```
npm i -D eslint-plugin-jest-dom eslint-plugin-testing-library
```

`.eslintrc.json`

```
{
  "extends": [
    "next/core-web-vitals",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}

```

- Create your first tests: Add `__test__` to your root directory and file index.test.js to start testing your components and functions.[Note here __test__ is a convention and while testing jest will automatically test this directory]

- run `npm test` in the CLI to test

# Notes

- Pattern for writing tests -> The Triple A Pattern
  - A-> Arrange
  - A-> Act
  - A-> Assert

```
  import { render, screen } from '@testing-library/react'
  import Home from '../pages/index'
  import '@testing-library/jest-dom'

  describe('Home', () => {
  it('renders a heading', () => {

      // ARRANGE
      render(<Home />)

      // ACT
      const heading = screen.getByRole('heading', {
        name: /welcome to next\.js!/i,
      })

      // ASSERT
      expect(heading).toBeInTheDocument()

    })
  })

```

-

# References

- [Next Docs](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library)

- [Video](https://www.youtube.com/watch?v=AS79oJ3Fcf0)
