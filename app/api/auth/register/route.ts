import { NextResponse } from 'next/server';

const users: { email: string; password: string }[] = [];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (users.find((user) => user.email === email)) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  users.push({ email, password });
  return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
}
