import "tailwindcss";
import './globals.css';

export const metadata = {
  title: 'LLM Fine-tuning Platform',
  description: 'Fine-tune language models with H2O.ai LLM Studio and Dify.ai',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
