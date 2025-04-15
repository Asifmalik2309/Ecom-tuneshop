import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    console.log('Received login credentials:', email, password); // Debugging

    // Dummy user authentication logic (you should replace it with real authentication logic)
    if (email === 'test@example.com' && password === 'password123') {
      // Simulate a successful login
      return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    } else {
      // Return invalid credentials message
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error); // Debugging
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
