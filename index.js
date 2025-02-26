import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// GET route to return JSON response
app.get('/', (req, res) => {
  const response = {
    email: 'kazibweusama@gmail.com', 
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/kazibweyassin/API'
  };
  
  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
});
