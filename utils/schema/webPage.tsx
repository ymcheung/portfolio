interface SchemaProps {
  name: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

function webPage({ name, description, datePublished, dateModified }: SchemaProps) {
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
