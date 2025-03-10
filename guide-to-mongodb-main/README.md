
API Documentation Template
Overview
Welcome to the RESQ API. This API enables developers to manage user accounts with authentication and role-based access.
Base URL
https://api.example.com/api/v1
Features
Create, read, update, and delete users
Secure authentication via API keys
Rate limiting for fair usage
Error handling and validation
Authentication
This API requires authentication via an API key.
How to Authenticate
Sign up and get your API key from the API Dashboard.
Include the API key in the request headers:
Authorization: Bearer YOUR_API_KEY
Alternatively, you can pass the API key as a query parameter:
https://api.example.com/api/v1/users?api_key=YOUR_API_KEY
 Note: Always keep your API key secure and avoid exposing it in public repositories.
 
Endpoints
1. Get All Incidents
Retrieves a list of incidents.
Request:
GET /incidents
Headers:
Authorization: Bearer YOUR_API_KEY
Response:
{
  "incidents": [
    { "id": 1, "title": "Fire", "description": "Octopus wiring", "location": "Malusak, Boac, Marinduque", "status": "Open", "priority": "Low", "reportedBy": "Alaizza Alvero", "assignedTo": "BFP", "updatedAt": "June 9, 2024" },
    { "id": 2, "title": "Fire", "description": "Fire outbreak near barangay hall", "location": "Bahi, Gasan, Marinduque", "status": "In Progress", "priority": "Medium", "reportedBy": "Alaizza Alvero", "assignedTo": "BFP", "updatedAt": "April 9, 2024" },
    { "id": 3, "title": "Stabbing", "description": "Sudden attack of drunk individual", "location": "Daykitin, Buenavista, Marinduque", "status": "Resolved", "priority": "Low", "reportedBy": "Alaizza Alvero", "assignedTo": "PNP", "updatedAt": "March 8, 2023" }
  ]
}
Status Codes:
200 OK - Request successful
401 Unauthorized - Invalid API Key

2. Get Incidents by ID
Fetches details of a single incident.
Request:
GET /incident/{id}
Example Request:
GET /incident/1
Response:
{
  "id": 1,
  "title": "Fire",
  "description": "Octopus wiring",
  "location": "Malusak, Boac, Marinduque",
  "status": "Open",
  "priority": "Low",
  "reportedBy": "Alaizza Alvero",
  "assignedTo": "BFP",
  "updatedAt": "June 9, 2024"
}
Status Codes:
200 OK - Success
404 Not Found - User not found

3. Create Incidents 
Adds a new incident to the system.
Request:
POST /incident
Content-Type: application/json
Body:
{
  "title": "Flooding",
  "description": "Severe water accumulation due to heavy rainfall",
  "location": "Murallon, Boac, Marinduque",
  "status": "Open",
  "priority": "High",
  "reportedBy": "Maika Lupig",
  "assignedTo": "PDRRMO",
  "updatedAt": "March 10, 2025"
}
Response:
{
  "id": 4,
  "title": "Flooding",
  "description": "Severe water accumulation due to heavy rainfall",
  "location": "Murallon, Boac, Marinduque",
  "status": "Open",
  "priority": "High",
  "reportedBy": "Maika Lupig",
  "assignedTo": "PDRRMO",
  "updatedAt": "March 10, 2025"
}
Status Codes:
201 Created - User successfully created
400 Bad Request - Invalid input



4. Update an Incident
Modifies an existing incident’s details.
Request:
PUT /incident/{id}
Body:
{
  "title": "Flooding",
  "description": "Severe water accumulation due to heavy rainfall",
  "location": "Isok 2, Boac, Marinduque",
  "status": "Open",
  "priority": "High",
  "reportedBy": "Maika Lupig",
  "assignedTo": "PDRRMO",
  "updatedAt": "March 10, 2025"
}
Response:
{
  "id": 4,
  "title": "Flooding",
  “description”: “Severe water accumulation due to heavy rainfall”,
  “location”: “Isok 2, Boac, Marinduque”,
  "status": “Open”,
  “priority”: “High”, 
  “reportedBy”: “Maika Lupig”, 
  “assignedTo”: “PDRRMO”, 
  “updatedAt”: “March 10, 2025”
}
Status Codes:
200 OK - Updated successfully
400 Bad Request - Invalid data



5. Delete an Incident
Removes an incident from the system.
Request:
DELETE /incident/{id}
Response:
{
  "message": "Incident deleted successfully"
}
Status Codes:
200 OK - Incident deleted
404 Not Found - Incident does not exist
Error Handling
Common Error Responses
All error messages follow this format:
{
  "error": "Error message",
  "code": 400
}
Status Code
Meaning
Description
400
Bad Request
Invalid input data
401
Unauthorized
Invalid API key
403
Forbidden
No access rights
404
Not Found
Resource not found
500
Server Error
Internal API failure


Rate Limits
This API enforces rate limits to prevent misuse.
Plan
Requests per Minute
Free Plan
100 requests
Premium
1000 requests

Exceeding the limit returns:
{
  "error": "Too many requests",
  "code": 429
}

Changelog & Versioning
Changelog
v1.2.0 - Added rate limits
v1.1.0 - Added update user endpoint
v1.0.0 - Initial API release
Versioning
To ensure backward compatibility, include version numbers in API requests:
https://api.example.com/api/v1/users
Contact & Support
For API issues, contact our support team:
Email: support@gmail.com
API Dashboard: https://dashboard.example.com


