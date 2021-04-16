# Note-Taker/ 11-note-taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- [Repo](https://github.com/yondav/11-note-taker)
- [Deployed](https://serene-taiga-05477.herokuapp.com/)

## About / Synopsis

Note-Taker is a simple application for managing notes. The user has the ability to add new notes, save notes for future access, edit notes and delete notes.

---

## Table of contents

> - [Title / Repository Name](#title--repository-name)
>   - [About / Synopsis](#about--synopsis)
>   - [Table of contents](#table-of-contents)
>   - [Installation](#installation)
>   - [Usage](#usage)
>     - [UI](#ui)
>     - [Start Server](#start-server)
>   - [Test instructions](#test-instructions)
>   - [Author](#author)
>     - [Contact](#contact)
>   - [Contributing / Issues](#contributing--issues)
>     - [Contributing](#contributing)
>     - [Known Issues](#known-issues)
>     - [Reporting Issues](#reporting-issues)
>   - [License](#license)

---

## Installation

- Clone repo
- Open integrated terminal on the root directory
- Install dependencies

```
npm i
```

---

## Usage

> ### File Path
>
> - [root directory](https://github.com/yondav/11-note-taker)
>   - [db](https://github.com/yondav/11-note-taker/tree/main/db)
>     - [db.json](https://github.com/yondav/11-note-taker/blob/main/db/db.json)
>   - [_node_modules_](#installation)
>   - [public](https://github.com/yondav/11-note-taker/tree/main/public)
>     - [assets](https://github.com/yondav/11-note-taker/tree/main/public/assets)
>       - [css](https://github.com/yondav/11-note-taker/tree/main/public/assets/css)
>         - [style.css](https://github.com/yondav/11-note-taker/blob/main/public/assets/css/styles.css)
>       - [js](https://github.com/yondav/11-note-taker/tree/main/public/assets/js)
>         - [index.js](https://github.com/yondav/11-note-taker/blob/main/public/assets/js/index.js)
>     - [index.html](https://github.com/yondav/11-note-taker/blob/main/public/index.html)
>     - [notes.html](https://github.com/yondav/11-note-taker/blob/main/public/notes.html)
>   - [.gitignore](https://github.com/yondav/11-note-taker/blob/main/.gitignore)
>   - [package-lock.json](https://github.com/yondav/11-note-taker/blob/main/package-lock.json)
>   - [package.json](https://github.com/yondav/11-note-taker/blob/main/package.json)
>   - [README.md](https://github.com/yondav/11-note-taker/blob/main/README.md)
>   - [server.js](https://github.com/yondav/11-note-taker/blob/main/server.js)

---

### UI

The UI was provided to me as is aside from one provision in which I removed the `read-only` attribute from the note contents to enable the functionality needed after having added a `PATCH` route.

The user will be brought to a landing page where they can follow the `Get Started`. They will be redirected to the `/notes` route where they can add, edit and delete notes.

To add, click the new notes icon in the navbar and provide a title and text body to your note. Once you've added some text, a save icon will show up in the navbar. After clicking, your new note will be available in the list of saved notes in the side bar at the left of the page.

To edit, select a saved note from the sidebar, edit your title and/or text and click on the save icon to update.

To delete, select the red trash can icon next to the saved note.

---

### Start Server

If you've cloned the repo, you will need to start the server after installing dependencies.

```
npm start
```

Development environment url: `http://localhost:5000`

---

## Author

- <a href="https://yondav.us/">Yoni David</a>
- <a href="https://github.com/yondav">Github</a>

---

### Contact

Send emails to [yoni@yondav.us](mailto:yoni@yondav.us)

## Contributing / Issues

---

### Contributing

- Fork repo
- Make additions and changes on new, personalized branch
- Submit [pull request](https://github.com/yondav/11-note-taker/pulls)

---

### Known Issues

Currently no known issues.

---

### Reporting Issues

Report issues by selecting the [issues](https://github.com/yondav/11-note-taker/issues) tab and creating a new issue

---

## Licenses

- <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>

This README file was built with [README Generator](https://github.com/yondav/README-gen-09)

Copyright &copy; 2021, Yoni David
