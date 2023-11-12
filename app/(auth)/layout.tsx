import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "QuillQuest - The Ultimate Forum for University",
  description:
    "QuillQuest is a platform where university students and faculties can connect, share, and learn from each other. Whether you need academic advice, research collaboration, or just want to have fun, QuillQuest is the place for you. Join the community today and discover the benefits of QuillQuest.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
