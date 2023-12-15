# Matey
## Desc.
A full-stack, easy-to-use, web app for roommate management.
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

## Dashboard
<p>Displays house name, housemates, and points leaderboard for your house if in you are in a house
and displays a manage house button otherwise on this page.</p>

## Manage House
<p>You can create a house and set its name or join a house via house key if not in a house. If you are
alread in a house, you are able to leave your house or invite others to your house from this page.</p>

## Tasks
<p>You can create tasks, giving it a name, description, points its worth, and the day it's due. Once
a task is created, it is displayed on a calendar and can be completed by clicking on the task, and
clicking the complete button, giving you the points it is worth.</p>

## Fish Market
<p>Shows all the fish available to buy and their associated costs. Fish you buy can only be bought once
and will show up in your aquariam.</p>

## Aquariam
<p>Shows all the fish you own swimming around in aquariam. You can hover over a fish to highlight its name 
on the left or hover over the name of a fish to highlight the fish swimming around in the aquariam.</p>
