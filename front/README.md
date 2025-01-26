# Facebook Comment Information Displaying Front-End

This is a simple front-end built using [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [tailwindcss](https://tailwindcss.com/).

The aim of this solution is to fetch a list of comments from [Facebook's Graph API](https://developers.facebook.com/docs/graph-api/reference/live-video/comments/#Reading) for a video, and display them on the page.

There is a searchbox for fetching a specific video's comments (originally populated with the video ID defined in the test documentation.)

## How to Setup

### Requirements

- [Node.js (v14 or higher)](https://nodejs.org/)
- [npm (v6 or higher)](https://www.npmjs.com/)

### Installation

1. Clone the repo:

```sh
git clone https://github.com/THAnderson95/StreamS.git
```

2. Navigate to the project directory, and `npm install` the dependencies:

```sh
cd StreamS/front
npm install
```

### Environment Setup

The solution is already setup with a proxy within the [vite.config.ts](./vite.config.ts) file, pointing to `https://graph.facebook.com`.

There also need to be a `.env` setup in root directory `(front), with the following key:

```
VITE_FB_API_ACCESS_TOKEN=<your-api-access-token>
```

Replacing `<your-api-access-token>` with your actual token.

## Running the solution

To start the front-end, run the following:

```sh
npm run dev
```

The application will be available at the URL that's defined in the terminal (I.E. `http://localhost:5173`)
