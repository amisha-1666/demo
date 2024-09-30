import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Validate the input fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Connect to the database
    const { db } = await connectToDatabase();

    // Insert the data into the "contacts" collection
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      message,
      date: new Date(),
    });

    // Return success message
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error inserting data:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
