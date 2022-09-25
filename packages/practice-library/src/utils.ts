const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const getSlug = (str: string) => {
  const slug = slugify(str);
  return slug === '-' ? '' : slug;
};
