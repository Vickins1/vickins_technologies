import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase  from '../../../lib/mongodb';
import transporter from '../../../lib/nodemailer';

// Define the contact interface
export interface IContact {
  name: string;
  email: string;
  phone?: string;
  services: string[];
  message: string;
  createdAt: Date;
}

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    const db = await connectToDatabase();
    const collection = db.collection('contacts');

    // Parse and validate request body
    const body: IContact = await request.json();

    if (!body.name || !body.email || body.services.length === 0 || !body.message) {
      console.error('Validation failed:', { body });
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(body.email)) {
      console.error('Invalid email format:', { email: body.email });
      return NextResponse.json({ message: 'Please enter a valid email' }, { status: 400 });
    }

    // Validate message length
    if (body.message.length > 500) {
      console.error('Message too long:', { length: body.message.length });
      return NextResponse.json(
        { message: 'Message cannot be more than 500 characters' },
        { status: 400 }
      );
    }

    // Prepare contact data
    const contactData: IContact = {
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      services: body.services,
      message: body.message,
      createdAt: new Date(),
    };

    console.log('Saving contact to MongoDB:', {
      name: contactData.name,
      email: contactData.email,
      services: contactData.services,
    });

    // Insert into MongoDB
    const result = await collection.insertOne(contactData);

    if (!result.acknowledged) {
      console.error('Failed to save contact to MongoDB:', { result });
      return NextResponse.json({ message: 'Failed to save contact' }, { status: 500 });
    }

    console.log('Contact saved successfully:', { id: result.insertedId });

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
        <p><strong>Services:</strong> ${body.services.join(', ')}</p>
        <p><strong>Message:</strong> ${body.message}</p>
        <hr>
        <p>Submitted on: ${new Date().toLocaleString()}</p>
      `,
    };

    console.log('Sending email notification to:', process.env.EMAIL_USER);
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json({ message: 'Contact saved and email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/contact:', {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}