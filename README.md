# Tasks App
Each task will have the following properties:

- Description (text)
- State (pending or completed)
- Editing state (normal or in edition).

In this app we have different actions represented by icons:

- The square icon to the left of the task description will allow us to mark that task as completed.
- If the task is completed, the icon will visually change and by pressing it again we can mark it as not completed (pending).
- The pencil icon will allow us to edit the task.
- While the trash basket one will allow us to remove it.
- When we press the edit icon, this icon along with the trash icon will change and allow us to confirm the task update or cancel the changes.

These actions will allow us to complete a CRUD with a couple of additional details.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
