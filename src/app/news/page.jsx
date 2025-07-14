'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { FaCalendarAlt, FaComments, FaArrowRight, FaSearch, FaRegClock } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

// Mock data for news and events
const newsData = {
  categories: [
    { id: 1, name: 'Academic', slug: 'academic' },
    { id: 2, name: 'Events', slug: 'events' },
    { id: 3, name: 'Sports', slug: 'sports' },
    { id: 4, name: 'Announcements', slug: 'announcements' },
  ],
  articles: [
    {
      id: 1,
      title: 'College Announces New Computer Science Program',
      slug: 'new-computer-science-program',
      excerpt: 'The college is proud to announce a new Computer Science Education program starting next semester.',
      content: 'The Adamu Augie College of Education is expanding its curriculum with a new Computer Science Education program. This program will prepare students for the growing demand for computer-literate educators in Nigeria. The program will cover programming fundamentals, educational technology, and computer systems.',
      category: 'academic',
      date: '2023-11-15',
      image: '/news/cs-program.jpg',
      comments: [
        { id: 1, name: 'John Musa', comment: 'This is great news! When will applications open?', date: '2023-11-16' },
        { id: 2, name: 'Admin', comment: 'Applications open January 15th, 2024.', date: '2023-11-16' },
      ]
    },
    {
      id: 2,
      title: 'Annual Sports Week Schedule Released',
      slug: 'sports-week-2023',
      excerpt: 'The schedule for this year\'s inter-departmental sports competition is now available.',
      content: 'The college administration has released the schedule for the 2023 Annual Sports Week. Events will include football, athletics, volleyball, and table tennis competitions between departments. The opening ceremony will feature a parade of athletes and a keynote address by renowned sports administrator Alhaji Yusuf Bello.',
      category: 'sports',
      date: '2023-11-10',
      image: '/news/sports-week.jpg',
      comments: []
    },
    // Add more articles...
  ]
};

const NewsPage = ({ params }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [activeCategory, setActiveCategory] = useState(params?.slug ? newsData.categories.find(c => c.slug === params.slug)?.id : null);

  // Handle CAPTCHA verification
  const onCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  // Handle comment submission
  const handleCommentSubmit = (e, articleId) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please complete the CAPTCHA');
      return;
    }
    // In a real app, you would send this to your backend
    console.log(`Comment submitted for article ${articleId}:`, { name, email, comment });
    alert('Thank you for your comment! It will be reviewed before posting.');
    setComment('');
    setName('');
    setEmail('');
  };

  // Filter articles based on search term and category
  const filteredArticles = newsData.articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !activeCategory || article.category === newsData.categories.find(c => c.id === activeCategory)?.slug;
    return matchesSearch && matchesCategory;
  });

  // If we're viewing a single article (slug provided)
  if (params?.slug && params.slug !== 'categories') {
    const article = newsData.articles.find(a => a.slug === params.slug);
    if (!article) return <div>Article not found</div>;

    const relatedArticles = newsData.articles
      .filter(a => a.category === article.category && a.id !== article.id)
      .slice(0, 3);

    return (
      <div className="bg-gray-50">
        <PageHero img={article.image} title={article.title} description={`Published: ${new Date(article.date).toLocaleDateString()}`} />
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Article Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {newsData.categories.find(c => c.slug === article.category)?.name}
                  </span>
                  <span className="mx-2">•</span>
                  <FaCalendarAlt className="mr-1" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaComments className="mr-2 text-blue-500" />
                  Comments ({article.comments.length})
                </h3>

                {article.comments.length > 0 ? (
                  <div className="space-y-4 mb-8">
                    {article.comments.map(comment => (
                      <div key={comment.id} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-800">{comment.name}</h4>
                          <span className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700">{comment.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 mb-8">No comments yet. Be the first to comment!</p>
                )}

                <form onSubmit={(e) => handleCommentSubmit(e, article.id)}>
                  <h4 className="font-bold text-gray-800 mb-4">Leave a Comment</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                    <textarea
                      id="comment"
                      rows="4"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <ReCAPTCHA
                      sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your actual key
                      onChange={onCaptchaChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    disabled={!captchaVerified}
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar with related articles */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related News</h3>
                <div className="space-y-4">
                  {relatedArticles.length > 0 ? (
                    relatedArticles.map(article => (
                      <Link key={article.id} href={`/news/${article.slug}`} className="block group">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                              {article.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <FaRegClock className="mr-1" />
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">No related articles found</p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {newsData.categories.map(category => (
                    <li key={category.id}>
                      <Link 
                        href={`/news/categories/${category.slug}`}
                        className={`flex items-center justify-between px-3 py-2 rounded-md ${activeCategory === category.id ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                      >
                        <span>{category.name}</span>
                        <FaArrowRight className="text-xs opacity-70" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main news listing page
  return (
    <div className="bg-gray-50">
      <PageHero img="/news-hero.jpg" title="News & Events" description="Stay updated with the latest happenings at our college" />
      
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${!activeCategory ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
            >
              All News
            </button>
            {newsData.categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/news/${article.slug}`} className="block">
                <div className="relative h-48 w-full">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">Read More</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                      {newsData.categories.find(c => c.slug === article.category)?.name}
                    </span>
                    <span className="mx-2">•</span>
                    <FaCalendarAlt className="mr-1 text-xs" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Read more</span>
                    <FaArrowRight className="ml-2 text-sm" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full mb-4">
              <FaSearch className="text-gray-500 text-3xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No news found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {activeCategory 
                ? `We couldn't find any news in the ${newsData.categories.find(c => c.id === activeCategory)?.name} category. Try a different category.`
                : 'We couldn\'t find any news matching your search. Try different keywords.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;