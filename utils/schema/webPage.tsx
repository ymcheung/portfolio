interface schemaProps {
  name: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

function webPage({ name, description, datePublished, dateModified }: schemaProps) {
  const schema = {
    '@type': 'WebPage',
    name,
    description,
    datePublished,
    dateModified
  }

  return schema;
};

export { webPage };
