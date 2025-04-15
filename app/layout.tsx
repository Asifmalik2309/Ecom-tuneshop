// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'TuneShop',
  description: 'Music Store powered by Next.js 14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}