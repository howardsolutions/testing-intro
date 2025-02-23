## Testing Fundamentals Course

Clone this repository and install the dependencies:

```bash
git clone https://github.com/stevekinney/introduction-to-testing.git
cd introduction-to-testing
npm install
```

## There are a few workshop notes:

1. Your test passed doesn't equal your code work. It just means your tests doesn't fail

2. Write test is not hard. There're only codes that hard to test.

3. Test Driven Development (TDD): Write the test first, then implement the function so the test passes.

4. TDD - It's hard to write code that's hard to test IF you start with the tests and make them pass.

## TESTING THE DOM:

The potential problem

Your test run in Node => Node isnt a browser 

This means it doesn't have any of the Browser APIs.

The DOM is one of those APIs.

This means that Node doesn't have the DOM.

This means you can't test the DOM from Node.

### Using DOM library

- Vitest supports 2 DOM lib: JSDOM and Happy DOM.

- HappyDOM is small and lightweight

- JSDOM is an industry standard but it's a heavier tool.

It probably doesn't matter which one you pick.

### Some Caveats: 

- It's still not a browser. 

- Running tests with `jsdom` can be a bit SLOWER. It's the cost of emulating browser stuff.

- You might still run into browser-specific issues. Just because something works in browser mode doesn't mean it'll work in ALL browsers.