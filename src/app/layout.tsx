// Importing the Bootstrap CSS for styling throughout the website.
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the Navbar and Footer components from the components folder.
// These components will be displayed on every page.
import Navbar from '../components/Navbar';  // Corrected the path
import Footer from '../components/Footer';  // Corrected the path

// Importing the global CSS styles for custom website styling.
// This will apply styles defined in globals.css to the entire application.
import '../app/globals.css';

// Defining the metadata for the website.
// This metadata will be used for setting the page's title and description, which helps in SEO.
export const metadata = {
  title: 'My Next.js Website',               // The title that will appear in the browser tab.
  description: 'Simple website with Home, About, Services, and Contact pages',  // Description for the website, useful for SEO.
};

// The RootLayout component defines the structure for all pages in the application.
// The { children } prop will be used to display the specific content for each page.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The <html> element defines the root of the HTML document.
    // The lang attribute specifies the language of the page content (English in this case).
    <html lang="en">
      
      {/* The <body> element contains the main content of the document. */}
      <body>
        {/* The Navbar component is displayed at the top of every page. */}
        <Navbar />

        {/* The <main> element is a semantic tag that wraps the main content of each page.
            The {children} prop will render the content of the specific page being displayed. */}
        <main>{children}</main>

        {/* The Footer component is displayed at the bottom of every page. */}
        <Footer />
      </body>
    </html>
  );
}
