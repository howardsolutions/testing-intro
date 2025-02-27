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

## Test Doubles

### Faking It, Mocking and Spying

If a unit test is supposed to where we test something in isolation?

Then HOW do we make sure it's actually isolated

### SOMETIMES 

- You want to test a BUILT IN function was called with the CORRECT ARGUMENTS.

- You dont want randomness to break your test... randomly

- You'd prefer NOT to make actual network requests to your server.

- You work with TIME and the time is changing

### PUTTING THINGS BACK

#### Leave no trace.

- Clear: You've created some complex mock logic, you're retracing steps, clearning call history to test cleanly.

- Reset: You made a mess with return values or .mockImplementation - and now you just want to start over without rebuilding the mock.

- Restore: You DONE mocking, want to reinstate the original functionality, and walk away like nothing ever happened.

- `vi.clearAllMocks` : clear out the HISTORY of calls and RETURN values on the SPIES, but does NOT reset them to their default implementation. 

- `vi.resetAllMocks` : call `.mockReset()` on all the spies. It will REPLACE ANY MOCK IMPLEMENTATIONS WITH AN EMPTY FUNCTION.

- `vi.clearAllMocks` : call `.mockResotore()` on each and every mock. This one RERTURNS the World to its ORIGINAL STATE.

### Mock and Spies

- Mock: a function that you plan on just being a placeholder for something elses.

- Spies: Keep what you have before then wraps in some abilities to have some introspection on that. 

Spying is just letting the inital things happen.

Mock is replacing with ur own behavior.