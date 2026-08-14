import "./globals.css";

export const metadata = {
  title: "সেবা বাজার | সারা বাংলাদেশের সেবা অনুরোধ প্ল্যাটফর্ম",
  description: "সারা বাংলাদেশের যেকোনো এলাকার প্রয়োজনীয় সেবা অনুরোধ করার সহজ প্ল্যাটফর্ম। কক্সবাজার থেকে যাত্রা শুরু।"
};

export default function RootLayout({ children }) {
  return <html lang="bn"><body>{children}</body></html>;
}