# C++ Knowledge Park

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-2ea44f?style=for-the-badge&logo=github)](https://yevheniimalin.github.io/cpp-learning-park/)
![Exercises](https://img.shields.io/badge/exercises-60-4f46e5?style=for-the-badge)
![Languages](https://img.shields.io/badge/languages-5-f59e0b?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-0891b2?style=for-the-badge)

An interactive browser-based game for learning C++ through detailed explanations, repetition and practical coding exercises.

![C++ Knowledge Park preview](assets/preview.jpg)

## About the project

C++ Knowledge Park turns an introductory C++ course into a visual learning route. Each station explains a core concept, breaks syntax into understandable pieces and provides ten coding exercises with instant feedback.

The project is designed for complete beginners. For example, the first lesson explains not only `std::cout`, but also the purpose of `<<`, double quotation marks, semicolons and newline characters.

## Features

- English interface by default, with instant language switching
- 60 coding exercises across 6 learning stations
- 10 exercises per topic for deliberate repetition
- Detailed syntax explanations with code breakdowns
- A task-specific “Before you code” explanation for all 60 exercises
- In-browser C++ editor with task-specific starter code
- Instant validation and actionable hints
- Line-and-column diagnostics for misspelled C++ words and missing symbols
- A dedicated program-output console after every code check
- Task instructions positioned directly beside the editor
- The next-task button unlocks only after a successful solution
- Protected global and per-program progress resets with translated Yes/No confirmation dialogs
- Progress stored locally in the browser
- Responsive design for desktop and mobile devices
- Interface and lesson content in five languages:
  - English
  - Finnish
  - Ukrainian
  - Russian
  - Thai

## Curriculum

| Station | Topic | Practice |
| --- | --- | ---: |
| 1 | Program structure and output | 10 exercises |
| 2 | Variables, types and arithmetic | 10 exercises |
| 3 | Conditions and loops | 10 exercises |
| 4 | Functions and return values | 10 exercises |
| 5 | References and pointers | 10 exercises |
| 6 | Classes, objects and methods | 10 exercises |

## Technology

- HTML5
- Modern CSS
- Vanilla JavaScript
- Canvas animation
- Browser `localStorage`
- GitHub Pages

No build step, package manager or external dependency is required.

## Run locally

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/YevheniiMalin/cpp-learning-park.git
cd cpp-learning-park
```

For a local development server, you can use Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Validation model

The browser trainer checks the expected structure and logic of each solution. It does not compile or execute arbitrary C++ programs, so it can provide immediate beginner-friendly feedback without a backend server.

## License

This project is available under the [MIT License](LICENSE).

## Author

Created by [Yevhenii Malin](https://github.com/YevheniiMalin).
