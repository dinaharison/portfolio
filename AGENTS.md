# Project agent guidelines

## TypeScript Best Practices

- Use strict type checking and strong typing.
- Prefer type inference when the type is obvious.
- Avoid `any`. Use `unknown` when the type is uncertain.

## Angular Architecture & Best Practices

- Always use standalone components, directives, and pipes. Standalone is the default, so omit `standalone: true` from the `@Component` decorator.
- Use native control flow (`@if`, `@for`, `@switch`) instead of structural directives such as `*ngIf` and `*ngFor`.
- Use signals (`signal()`, `computed()`, `linkedSignal()`) for local and reactive state. Reserve RxJS for asynchronous streams, event debouncing, or complex operators.
- Use `inject()` for dependency injection in services and components instead of constructor parameter injection.
- Separate smart (container) components, which handle data fetching and logic, from dumb (presentational) components, which render the UI via `@Input` and emit events via `@Output` or `output()`.
- Lazy-load all feature routes.
- Avoid `ngClass` and `ngStyle` when standard class or style bindings or Tailwind CSS suffice.

## Folder Structure Convention

Use a feature-based architecture.

- `/features/<feature-name>` contains the feature’s components, local state, and routes.
- `/core` contains singleton services, interceptors, and guards.
- `/shared` contains reusable UI components, pipes, and utility functions.

## Output Requirements

- Provide complete, concise code blocks.
- Include inline templates and styles unless a separate file is explicitly requested.
- Briefly explain key architectural decisions before or after the code.

## Commit Convention

- Commit each major change separately. Use a Conventional Commit prefix and a clear, imperative summary, for example `refactor: separate portfolio content from its presentation`.
