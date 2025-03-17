import React from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      <h1>Booking Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
};

export default Page;