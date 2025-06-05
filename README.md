# UnoCSS + Attributify strict mode issue (VSCode extension)

## Problem Statement

This repo demonstrates an issue where the **UnoCSS VSCode extension doesn't display CSS decorations** when using `presetAttributify` with `strict: true`.

## 🔧 Reproduction Steps

1. Clone this repo and install dependencies:

    ```bash
    pnpm install
    ```

2. Open in **VSCode** and ensure recommended extensions (UnoCSS, Astro) are installed

    > Verify the UnoCSS extension is enabled and has no output panel errors.

3. Open `src/pages/index.astro`

4. ⚠️ Observe that `@apply` class decorations are **missing**:

    ```css
    a {
      @apply border-b border-b-gray-300 hover:border-b-gray-600 transition;
    }
    ```

## 🔍 Workaround

5. Modify the UnoCSS config by changing:

    ```ts
    presetAttributify({
      strict: true
    })
    ```

    to:

    ```ts
    presetAttributify({
      strict: false
    })
    ```

6. Reload VSCode by pressing <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows) and selecting:

    ```
    > Reload Window
    ```

    The CSS decorations will now appear correctly ✅
