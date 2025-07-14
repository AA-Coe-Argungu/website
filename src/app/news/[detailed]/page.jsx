'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaComments, FaArrowLeft, FaRegClock } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';

const NewsDetailPage = ({ params }) => {
  const router = useRouter();
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  
  // In a real app, you would fetch this data based on params.slug
  const article = {
    id: 1,
    title: 'College Announces New Computer Science Program',
    slug: 'new-computer-science-program',
    excerpt: 'The college is proud to announce a new Computer Science Education program starting next semester.',
    content: `
      <p>The Adamu Augie College of Education is expanding its curriculum with a new Computer Science Education program. This program will prepare students for the growing demand for computer-literate educators in Nigeria.</p>
      <p class="mt-4">The program will cover:</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Programming fundamentals</li>
        <li>Educational technology integration</li>
        <li>Computer systems and networking</li>
        <li>Software development for education</li>
      </ul>
      <p class="mt-4">According to the Provost, Prof. Aliyu Mohammed, "This program addresses the critical need for tech-savvy educators in our digital age. Graduates will be equipped to teach computer science at both primary and secondary levels."</p>
      <p class="mt-4">Applications for the new program will open on January 15, 2024, with the first cohort beginning studies in the 2024/2025 academic session.</p>
    `,
    category: 'academic',
    date: '2023-11-15',
    image: '/news/cs-program.jpg',
    comments: [
      { id: 1, name: 'John Musa', comment: 'This is great news! When will applications open?', date: '2023-11-16' },
      { id: 2, name: 'Admin', comment: 'Applications open January 15th, 2024.', date: '2023-11-16' },
      { id: 3, name: 'Amina Yusuf', comment: 'What are the entry requirements for this program?', date: '2023-11-17' },
    ]
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'ICT Department Upgrades Computer Labs',
      slug: 'ict-lab-upgrade',
      excerpt: 'The college has completed upgrades to all computer labs with new equipment.',
      category: 'academic',
      date: '2023-10-28',
      image: '/news/computer-lab.jpg'
    },
    {
      id: 3,
      title: 'Workshop on Digital Teaching Tools',
      slug: 'digital-teaching-workshop',
      excerpt: 'Faculty members participated in a 3-day workshop on modern teaching technologies.',
      category: 'academic',
      date: '2023-10-15',
      image: '/news/workshop.jpg'
    }
  ];

  const onCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please complete the CAPTCHA');
      return;
    }
    // In a real app, you would send this to your backend
    console.log('Comment submitted:', { name, email, comment });
    alert('Thank you for your comment! It will be reviewed before posting.');
    setComment('');
    setName('');
    setEmail('');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Article Header with Image */}
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex items-center justify-center text-white">
              <FaCalendarAlt className="mr-2" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to News
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </span>
              </div>
              
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaComments className="mr-2 text-blue-500" />
                Comments ({article.comments.length})
              </h2>

              {article.comments.length > 0 ? (
                <div className="space-y-6 mb-8">
                  {article.comments.map(comment => (
                    <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-gray-800">{comment.name}</h3>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 mb-8">No comments yet. Be the first to comment!</p>
              )}

              <form onSubmit={handleCommentSubmit}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Leave a Comment</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment *</label>
                  <textarea
                    id="comment"
                    rows="4"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                  disabled={!captchaVerified}
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Related News</h2>
              <div className="space-y-4">
                {relatedArticles.map(article => (
                  <a 
                    key={article.id} 
                    href={`/news/${article.slug}`}
                    className="block group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <FaRegClock className="mr-1" />
                          <span>
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Stay Updated</h2>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest news and events</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;