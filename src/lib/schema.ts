export const generateProjectSchema = (project: any) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: project.title,
  description: project.description,
  programmingLanguage: project.technologies,
  author: {
    "@type": "Person",
    name: "Adam Paterson",
    url: "https://www.adampaterson.co.uk",
  },
  datePublished: project.date,
  codeRepository: project.github,
});

export const generateBlogPostSchema = (post: any) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  author: {
    "@type": "Person",
    name: "Adam Paterson",
    url: "https://www.adampaterson.co.uk",
  },
  datePublished: post.publishDate,
  dateModified: post.updateDate,
  keywords: post.tags,
  image: post.image,
  url: `https://www.adampaterson.co.uk/blog/${post.slug}`,
});
