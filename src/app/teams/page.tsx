// src/app/about/page.tsx (About page)
import Head from 'next/head';
import Image from "next/image"; // Importing Next.js Image component for optimized images


export default function About() {
  return (
    <section id="services" className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Team</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <Image
              src="/images/client-1.jpg"
              alt="Service 1"
              width={350}
              height={200}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                We build responsive, modern, and user-friendly websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <Image
              src="/images/client-2.jpg"
              alt="Service 2"
              width={350}
              height={200}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">SEO Optimization</h5>
              <p className="card-text">
                Our SEO services will help you rank higher in search
                engines.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <Image
              src="/images/client-1.jpg"
              alt="Service 3"
              width={350}
              height={200}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Digital Marketing</h5>
              <p className="card-text">
                Grow your online presence with our expert marketing
                strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
