import React from 'react';
import Header from './header';
import Banner from './banner';
import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Content from './content';

const tocData = [
  { title: 'Beginner Guide to Product Management: Everything You Need to Know', id: 'beginner-guide-to-product-management' },
  { title: 'What is product management', id: 'product-management' },
  { title: 'Product Vs Project management ', id: 'product-vs-project' },
  { title: 'What are the roles in product management? ', id: 'roles-in-product-management' },
  { title: 'Major roles of product managers', id: 'major-roles-of-product-managers' },
  { title: 'What software tools does the product managers use to bring productivity in development of a product? ', id: 'software-tools-does-the-product' },
  { title: 'Which is the best tool for Product managers ?', id: 'tool-for-product-managers' },
  { title: 'What is Workfast.ai ?', id: 'workfast.ai' },
  { title: 'How Workfast.ai is most efficient software tool comparatively ?', id: 'software-tool-comparatively' },
];

export default function Articles3() {
  const navigate = useNavigate();
  const [items, setItems] = React.useState('');

  const scrollToSection = (id) => {
    setItems(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sectionTops = tocData.map(item => {
        const element = document.getElementById(item.id);
        return { id: item.id, top: element.getBoundingClientRect().top };
      });
      const visibleSection = sectionTops.find(section => section.top >= 0);
      if (visibleSection) {
        setItems(visibleSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col justify-start items-center w-full bg-[#010306] relative overflow-hidden gap-[30px] md:gap-[60px] lg:gap-[100px]'>
      <Header />
      <Banner />
      {/* <div className='flex w-[88%] mx-auto gap-[40px] relative h-full'>
        <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-[60%] overflow-y-auto'>
          <div id='breaking-barriers'><BreakinBarriers /></div>
          <div id='all-in-one'><AllInOne /></div>
          <div id='automation'><AiInteligence /></div>
          <div id='ai-intelligence'><AiInteligence /></div>
          <div id='email-calendar'><EmailCalender /></div>
          <div id='organisation'><Organisation /></div>
          <div id='daily-report'><DailyReport /></div>
          <div id='integration'><Integration /></div>
          <div id='workflow'><Workflow /></div>
          <div id='goal-project'><GoalProject /></div>
        </div>
        <aside className='fixed right-0 top-10 self-start w-[40%] p-[20px] rounded-[8px]'>
          <h3 className='text-[#FFFFFF] text-[26px] font-medium pl-[9px]'>Table of contents</h3>
          {tocData.map((item) => (
            <div
              key={item.id}
              className={`flex gap-[17px] items-center p-[9px] cursor-pointer ${item.id === items ? "bg-[#0F162F99]" : "bg-transparent" }`}
              onClick={() => scrollToSection(item.id)}
            >
              <img src={arrow} alt='arrow' />
              <h3 className='text-[#FFFFFF] text-[26px] font-medium'>{item.title}</h3>
            </div>
          ))}
        </aside>
      </div> */}
      <Content tocData={tocData} items={items} scrollToSection={scrollToSection} />
      <p className='text-[#E4E8EB] text-[26px] font-normal w-[88%] text-center'>As we conclude , it is not about the tool rather it is about the efficiency which delivers best for the product development and management. Workfast.ai gives the best all-in features where one does not to find a replacement. Since product managers need to connect all dots , it is very important for them to find a workable software to work productively.</p>
      <div className='flex flex-col gap-[48px] w-[88%] relative z-[1] mx-auto' id="footer">
        <div className='flex gap-[14px] items-center'>
          <img src="https://dz1x1c630cl14.cloudfront.net/webassets/articles.svg" alt='article' />
          <h3 className='text-[#FFFFFF] font-semibold text-[21px]'>Articles</h3>
        </div>
        <div className='flex gap-[28px] justify-between w-full'>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => { navigate('/blog/breaking-barriers-in-communication-collaboration-with-workfast.ai') }}>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/articles1.svg" alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Breaking Barriers in Communication and Collaboration with Workfast.ai</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg" alt='articles' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/top-7-ways-workfast.ai-can-revolutionise-your-project-management')}}>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/articles2.svg" alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Top 7 ways Workfast.ai can Revolutionise your project management</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg" alt='articles' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => { navigate('/blog/looking-for-a-new-platform-for-project-management') }}>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/articles4.svg" alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Looking for a new platform for project management? Discover Workfast.ai</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg" alt='articles' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
