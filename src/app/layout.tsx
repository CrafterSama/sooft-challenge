import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import AuthDirective from '@/components/modules/auth/auth-directive';
import { Toaster } from '@/components/ui/toaster';
import ChakraProviders from '@/providers/chakra-provider';
import ReactQueryProvider from '@/providers/react-query-provider';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Manejo de Frases',
  description: 'Aplicación para gestionar frases',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReactQueryProvider>
          <AuthDirective>
            <ChakraProviders>
              <Toaster />
              {children}
            </ChakraProviders>
          </AuthDirective>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
