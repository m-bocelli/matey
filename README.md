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
