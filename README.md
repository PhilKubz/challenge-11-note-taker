# 11 Express.js: Note Taker Application

As a busy individual, it is important to organize thoughts and keep track of tasks that need to be completed. The Note Taker application is designed to help you write and save notes.

The Note Taker application uses an Express.js back end and stores and retrieves note data from a JSON file.

## User Story

```md
AS a busy individual
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```



## Getting Started
### Prerequisites
To run the Note Taker application, you will need to have the following software installed on your local machine:

`Node.js`
`npm`
## Installation
To install the Note Taker application, follow these steps:

Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/PhilKubz/challenge-11-note-taker.git
Install the required dependencies:

Copy code
`npm install`
Usage
To use the Note Taker application, follow these steps:

Navigate to the directory where the Note Taker application is installed.

Start the application:

`npm start`

Open your web browser and go to http://localhost:3001 to view the application.

## Functionality
The Note Taker application has the following functionality:

On the landing page, click the "Get Started" button to go to the notes page.
On the notes page, existing notes are listed in the left-hand column.
To add a new note, enter a title and text in the fields on the right-hand side of the page.
When a new note is entered, a "Save" icon appears in the navigation at the top of the page.
Click the "Save" icon to save the new note.
When a note in the left-hand column is clicked, it appears in the right-hand column.
To add a new note, click the "Write" icon in the navigation at the top of the page.

### Future Functionality
To delete a note, click the red trash can icon next to the note in the left-hand column.
