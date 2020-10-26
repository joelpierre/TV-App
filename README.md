# TV Maze App

To view a live demo please visit here https://tv-maze-app.vercel.app

## App Stack
- NextJS (with a custom API)
- Jest + React Testing Library
- ESLint
- SASS using SASS Modules + Autoprefixer and PostCSS
- TypeScript (v4+)
- Webpack
- Circle CI
- LintStaged + Husky

## Schedule Listing Page

First page renders today's shows and there is pagination in order to see previous and upcoming schedules. The current day is the only day with the header as it is the home page, the other days would signify that the user "just wants to get the info", so I ensured that the content is immediately visible.

## Show Pages

Using getStaticProps and getStaticPaths we fetch and dynamically build today's (`new Date();`) show pages. read more on [Incremental Static Regeneration here](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)

## Custom API

In order to show how you can obfuscate API endpoints I created custom API endpoints. In some situations you may want to hide your "real" API calls, or you need to process something server side before passing it on to the end service. Using a similar folder structure to typical NextJS static & dynamic pages.

## Unit Testing

I used the old faithful test runner Jest + React Testing Library. It was my first time using RTL, and it differs massively from Enzyme (which I normally would use), but my testing approach didn't have to change drastically. (I also used snapshots... not a huge fan of them however in a team setting they really do have value).

## SASS Naming convention

I used SASS modules + BEM (Block element modifier). I have used many naming conventions however this one is my favourite and one I use on pretty much all projects.

## Other Notable mentions

#### TypeScript

TypeScript makes developing a dream, finding errors at compile time rather than build time, and the ability to type props, methods etc takes the guess work out. Creating this app I pre-made the interfaces for the API I was working with which meant developing the app was a breeze.

#### ESLint

Because who doesn't want to make sure they are sticking to some form of convention!? And who doesn't want their IDE to let them know they may have made a mistake with a shadowed variable or a variable name!? 😉

#### Lint Staged + Husky

Lint staged is perfect for every project, on commit and/or on push we can run commands dependent on file types etc. In this project I lint my ts/tsx files, and I also use imagemin to reduce the size of the image files added to the project so before I push anything to github I know it has passed a vast amount of checks.

#### Circle CI

In the event that someone `--no-verify`'s their git commit or git push to bypass the checks, I set this repo up with CircleCI. The workflow I created Lints the code, Runs the tests and builds the application. Great for when you need teams create PR's as the other members have confidence the apps structural integrity given the incoming changes. (it isn't all 100% however pretesting before even pushing to staging is always great).

# Extras
- Used Atomic design principles and created a component library to support this (atoms, molecules, organisms, templates etc).
- Image optimisations: Compressing images on git commit/push, lazy loading images via attribute. Ensuring that we don't have massive page shifts on load by rendering the correct image containers on an initial render.
- Used the font from the Sketch file.
- Responsive... tested on Desktop/Tablet/Mobile (and via the simulator app via XCode).
- Build pipeline and deployment using Vercel
- Custom 404 page

# Getting started

Install all dependencies - `npm i`  
Run in dev locally - `npm run dev`  
Run tests locally - `npm run test`  
Run tests in watch mode - `npm run test:watch`
