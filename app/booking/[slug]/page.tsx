import React from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Booking Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default Page;
export async function generateStaticParams() {
  return [
    { slug: 'service-1' },
    { slug: 'service-2' },
    // Add more slugs here
  ];
}
