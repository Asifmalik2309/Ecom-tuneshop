// app/(auth)/layout.tsx

export const metadata = {
  title: "Login / Signup",
  description: "Authenticate to access your account",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    
        <div>
          {children}
        </div>
      
  );
}