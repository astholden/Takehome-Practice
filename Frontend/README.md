# Frontend Takehome

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## JavaScript Framework Used
Project created by using `npm init vue@latest` (Vue.js + Vite)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Project Requirements 
```sh
- Create a wireframe using api from https://punkapi.com/documentation/v2
- Should have reuseable components
- Files / Folder Structure
    app/
    - src/
        - components/
        -- Card.vue
        -- TopHeader.vue
        -- Search.vue
    - App.vue
- Layout should be responsive
    - Phones to have one column
    - Tablets should have two columns
    - Desktops should have two columns
- CSS Requirements 
    - Grid Template
    - Montserrat 24px SemiBold - Page Title
    - Montserrate 20px Bold - Beer Title
    - Open Sans 16px Regular - Body Font
- Object schema to be used from punkapi
    - { name: name,
        tagline: tagline,
        image-url: image-url,
        description: description,
        food_pairing: food_pairing, (Desktop only)
        abv: abv, (Desktop only)
        ibu: ibu, (Desktop only)
        ph: ph (Desktop only)
     }
- Initial load of page should have unfiltered data and load 20 results at a time.
- Render a "LOAD MORE BEER" button if there are more than 20 results of beers.
    - Clicking on this button should load the next 20 beers available without forcing a fullscreen re-render

```
