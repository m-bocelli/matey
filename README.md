# Matey
## Desc.
A full-stack, easy-to-use, web app for managing shared household tasks with a group of mates (roommates). 

## API
<p>Matey is powered by a rich RESTful API which communicates with its Firebase Realtime Database via a service worker. Most endpoints are validated via a user bearer token and cannot be accessed externally unless said token is provided.</p>
<p>Some example endpoints include: </p>
<ul>
  <li>/users/:id</li>
  <li>/houses/:id</li>
  <li>/fish</li>
  <li>/tasks</li>
</ul>
<p>Most endpoints also offer optional, query parameters to streamline the data extraction process.</p>

## Technologies Used
* Front-end: - React
* Routing:  - NextJS for better page routing
* Back-end: - NodeJS Server with ExpressJS Framework was used for server and middleware
* Server Hosting: Render to host our server, which connects to the database
* Front-end Hosting: Vercel to host the front-end pages of our site
* Database: - We used Firebase to store things like user accounts, different houses that can hold any amount of users, tasks, tons of fish from the marketplace, and an inventory for each user

## Running the project locally
1. Clone the repository.
   ```bash
    git clone <repository_url>
   ```
3. CD into the project directory. If you cloned into your root directory, simply:
   ```bash
   cd budgeteers
   ```
5. CD into client.
   ```bash
   cd client
   ```
7. Install dependencies using npm.
   ```bash
   npm i
   ```
9. Run the client.
    ```bash
   npm run dev
   ```
11. Run the server.
    1. Open another terminal window and navigate back to the project, this time cd'ing into server.
    2. Install dependencies again, but in server.
    3. Obtain the ServiceAccount.json file from firebase. Ensure that it is located under server and not under its child directories.
    4. Run the server:
      ```bash
         npm run serve
      ```
12. Open the localhost port on your browser with both client and server running, and begin logging into the application using your google account.

### Pages 
The following are short descriptions of the utility of each page and their purpose in the greater context of our app.

## Dashboard
<p>Displays house name, housemates, and points leaderboard for your house if in you are in a house
and displays a manage house button otherwise on this page.</p>

## Manage House
<p>You can create a house and set its name or join a house via house key if not in a house. This key will be emailed to you via the EmailJS API. If you are
already in a house, you are able to leave your house or invite others to your house from this page.</p>

## Tasks
<p>You can create tasks, giving it a name, description, points its worth, and the day it's due. Once
a task is created, it is displayed on a calendar and can be completed by clicking on the task, and
clicking the complete button, giving you the points it is worth.</p>

## Fish Market
<p>Shows all the fish available to buy and their associated costs. Fish you buy can only be bought once
and will show up in your aquarium.</p>

## Aquarium
<p>Shows all the fish you own swimming around in aquarium. You can hover over a fish to highlight its name 
on the left or hover over the name of a fish to highlight the fish swimming around in the aquariam.</p>
