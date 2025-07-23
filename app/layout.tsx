// app/layout.tsx
//import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap import
import './globals.css'; // ✅ Your global styles
import '../components/BootstrapClient'; // Adjust the path based on file structure
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'My App',
  description: 'A Bootstrap-powered Next.js app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
