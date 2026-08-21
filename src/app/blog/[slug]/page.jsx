import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { blogPostsList } from '@/data/blogData';
import BlogDetailArticle from '@/components/blog/BlogDetailArticle';

export async function generateStaticParams() {
  return blogPostsList.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const post = blogPostsList.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsList
    .filter((p) => p.id !== post.id && (p.category === post.category || true))
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <BlogDetailArticle post={post} relatedPosts={relatedPosts} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
