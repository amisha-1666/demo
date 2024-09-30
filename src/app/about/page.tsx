// src/app/about/page.tsx (About page)
import Head from 'next/head';
import Image from "next/image"; // Importing Next.js Image component for optimized images


export default function About() {
  return (
    <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                We are a forward-thinking company dedicated to providing
                top-notch solutions to meet your business needs.
              </p>
              <p>Our team of professionals is here to help you succeed.</p>
            </div>
            <div className="col-md-6 text-center">
              {/* Using Next.js Image component for optimized loading */}
              <Image
                src="/images/about-img.png"
                alt="About Us"
                width={500}
                height={300}
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
