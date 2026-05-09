import React from 'react';
import { Helmet } from 'react-helmet-async';

const SizeGuide: React.FC = () => {
  const topsSizes = [
    { size: 'S', chest: '36-38"', length: '27"', shoulder: '17"' },
    { size: 'M', chest: '38-40"', length: '28"', shoulder: '18"' },
    { size: 'L', chest: '40-42"', length: '29"', shoulder: '19"' },
    { size: 'XL', chest: '42-44"', length: '30"', shoulder: '20"' },
    { size: 'XXL', chest: '44-46"', length: '31"', shoulder: '21"' },
  ];

  const bottomsSizes = [
    { size: '28', waist: '28"', inseam: '30"', hip: '36"' },
    { size: '30', waist: '30"', inseam: '31"', hip: '38"' },
    { size: '32', waist: '32"', inseam: '32"', hip: '40"' },
    { size: '34', waist: '34"', inseam: '32"', hip: '42"' },
    { size: '36', waist: '36"', inseam: '32"', hip: '44"' },
  ];

  return (
    <>
      <Helmet>
        <title>Size Guide | UNVLD</title>
        <meta name="description" content="Find your perfect fit with the UNVLD size guide. Measurements for tops, bottoms, and outerwear." />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-display mb-8">Size Guide</h1>

        <div className="max-w-4xl space-y-12">
          {/* How to Measure */}
          <section>
            <h2 className="text-xl font-semibold mb-4">How to Measure</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground mb-2">Chest</h3>
                <p>Measure around the fullest part of your chest, keeping the tape parallel to the floor.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Waist</h3>
                <p>Measure around your natural waistline, where you typically wear your pants.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Hip</h3>
                <p>Measure around the fullest part of your hips, about 8" below your waist.</p>
              </div>
            </div>
          </section>

          {/* Tops */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Tops & Outerwear</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-medium">Size</th>
                    <th className="text-left py-3 font-medium">Chest</th>
                    <th className="text-left py-3 font-medium">Length</th>
                    <th className="text-left py-3 font-medium">Shoulder</th>
                  </tr>
                </thead>
                <tbody>
                  {topsSizes.map(row => (
                    <tr key={row.size} className="border-b border-border">
                      <td className="py-3 font-medium">{row.size}</td>
                      <td className="py-3 text-muted-foreground">{row.chest}</td>
                      <td className="py-3 text-muted-foreground">{row.length}</td>
                      <td className="py-3 text-muted-foreground">{row.shoulder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Note: Our oversized styles are designed with extra room. Size down for a more fitted look.
            </p>
          </section>

          {/* Bottoms */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Bottoms</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-medium">Size</th>
                    <th className="text-left py-3 font-medium">Waist</th>
                    <th className="text-left py-3 font-medium">Inseam</th>
                    <th className="text-left py-3 font-medium">Hip</th>
                  </tr>
                </thead>
                <tbody>
                  {bottomsSizes.map(row => (
                    <tr key={row.size} className="border-b border-border">
                      <td className="py-3 font-medium">{row.size}</td>
                      <td className="py-3 text-muted-foreground">{row.waist}</td>
                      <td className="py-3 text-muted-foreground">{row.inseam}</td>
                      <td className="py-3 text-muted-foreground">{row.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Still Unsure */}
          <section className="bg-secondary/30 p-8 text-center">
            <h2 className="text-xl font-semibold mb-3">Still Unsure?</h2>
            <p className="text-muted-foreground mb-4">
              Our team is happy to help you find your perfect fit. Reach out with your measurements.
            </p>
            <a
              href="mailto:fit@unvld.com"
              className="inline-flex items-center text-sm font-medium underline underline-offset-4"
            >
              fit@unvld.com
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default SizeGuide;
