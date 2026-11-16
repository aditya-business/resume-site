import { ArrowUpRight, Clock } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/portfolioData';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

function BlogThumbnail({ theme }: { theme: BlogPost['previewTheme'] }) {
  if (theme === 'studio') {
    return (
      <div className="w-full h-full bg-[#1C2026] p-6 flex flex-col justify-between text-white">
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">
          <span>Print &amp; Type</span>
          <span className="text-[#FF014F]">01</span>
        </div>
        <div className="my-auto flex items-center justify-center">
          <div className="w-24 h-24 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center font-display font-bold text-2xl tracking-tight">
            Aa
          </div>
        </div>
        <div className="h-1.5 w-20 bg-[#FF014F] rounded" />
      </div>
    );
  }
  if (theme === 'code') {
    return (
      <div className="w-full h-full bg-[#15181E] p-6 flex flex-col justify-between text-white">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF014F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
        </div>
        <div className="space-y-2.5 my-auto font-mono text-xs text-slate-300">
          <div className="text-[#FF014F]">const system = createTokens();</div>
          <div className="text-slate-400">export function renderLayout()</div>
          <div className="h-2 w-2/3 bg-slate-700 rounded" />
        </div>
        <div className="h-1.5 w-14 bg-slate-600 rounded" />
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-[#1B1E24] p-6 flex items-center justify-center">
      <div className="w-28 h-36 rounded-2xl border border-white/15 bg-[#242830] p-3 flex flex-col justify-between">
        <div className="h-2 w-10 bg-[#FF014F] rounded" />
        <div className="h-14 rounded-lg bg-gradient-to-br from-[#FF014F]/80 to-[#20242C]" />
        <div className="space-y-1">
          <div className="h-1.5 w-full bg-slate-500 rounded" />
          <div className="h-1.5 w-2/3 bg-slate-600 rounded" />
        </div>
      </div>
    </div>
  );
}

export function BlogSection({ onSelectPost }: BlogSectionProps) {
  return (
    <section
      id="blog"
      className="scroll-mt-24 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="text-center mb-12 lg:mb-14">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#FF014F] mb-3">
          NOTES &amp; REFLECTIONS
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-[48px] text-[#3C3E41] tracking-tight">
          Student Notes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="group p-7 rounded-2xl neu-card flex flex-col justify-between"
          >
            <div>
              <button
                type="button"
                onClick={() => onSelectPost(post)}
                aria-label={`Read article: ${post.title}`}
                className="w-full aspect-[4/3] rounded-xl overflow-hidden block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <BlogThumbnail theme={post.previewTheme} />
              </button>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#FF014F]">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] text-[#3C3E41]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h3 className="mt-3">
                <button
                  type="button"
                  onClick={() => onSelectPost(post)}
                  className="text-left font-display font-semibold text-[20px] leading-[1.45] text-[#1E2125] hover:text-[#FF014F] transition-colors inline-flex items-start gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] rounded"
                >
                  <span>{post.title}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF014F]" />
                </button>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
