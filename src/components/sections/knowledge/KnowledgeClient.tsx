'use client';
import { useState } from 'react';
import { KnowledgeHero } from './KnowledgeHero';
import { KnowledgeFeatured } from './KnowledgeFeatured';
import { KnowledgeGrid } from './KnowledgeGrid';
import { KnowledgeNewsletter } from './KnowledgeNewsletter';
import { KnowledgeCTA } from './KnowledgeCTA';

export const KNOWLEDGE_CATEGORIES = [
  'Tất cả',
  'Lãnh đạo & Vận hành',
  'Ra quyết định',
  'Hệ điều hành cá nhân',
  'Đội ngũ & Nhân sự',
  'Tài chính & Đầu tư'
];

export function KnowledgeClient() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  return (
    <>
      <KnowledgeHero 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {activeCategory === 'Tất cả' ? (
        <>
          <KnowledgeFeatured />
          <KnowledgeGrid category="Mới nhất" headline="Bài viết mới nhất." />
        </>
      ) : (
        <>
          <KnowledgeGrid category={activeCategory} headline={`${activeCategory} – Bài viết`} />
        </>
      )}

      <KnowledgeNewsletter />
      <KnowledgeCTA />
    </>
  );
}
