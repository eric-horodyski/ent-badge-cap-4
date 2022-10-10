# Ionic Supported Plugins - Badge Android Issue

## Issue

When building the application, Gradle throws the following error:

```bash
 > Could not find method compile() for arguments [me.leolin:ShortcutBadger:1.1.22@aar] on object of type
   org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler.
```

## How to Reproduce

1. Pull down project
2. Run `npm install`
3. Run `npm run build && ionic cap add android`
4. Run `npx cap sync && npx cap run android`
