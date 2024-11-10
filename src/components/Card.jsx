import React, { useState } from 'react';
import { FaShareAlt, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

const HoverCard = () => {
  const cards = [
    {
      id: 1,
      image: "https://dummyimage.com/400x300",
      category: "food",
      title: "Helpful Tips for Working from Home as a Freelancer",
      description: "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu.",
      date: "7 AUGUST",
      readTime: "11 MINS READ",
      views: "3K VIEWS",
      socialIcons: [
        { 
          id: 'facebook',
          icon: FaFacebook, 
          color: 'bg-blue-600 hover:bg-blue-700', 
          delay: '150',
          label: 'Facebook'
        },
        { 
          id: 'twitter',
          icon: FaTwitter, 
          color: 'bg-blue-400 hover:bg-blue-500', 
          delay: '300',
          label: 'Twitter'
        },
        { 
          id: 'pinterest',
          icon: FaPinterest, 
          color: 'bg-red-600 hover:bg-red-700', 
          delay: '450',
          label: 'Pinterest'
        }
      ]
    },
    {
      id: 2,
      image: "https://dummyimage.com/400x300",
      category: "lifestyle",
      title: "10 Essential Tips for Better Work-Life Balance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      date: "9 AUGUST",
      readTime: "8 MINS READ",
      views: "2.5K VIEWS",
      socialIcons: [
        { 
          id: 'facebook',
          icon: FaFacebook, 
          color: 'bg-blue-600 hover:bg-blue-700', 
          delay: '150',
          label: 'Facebook'
        },
        { 
          id: 'twitter',
          icon: FaTwitter, 
          color: 'bg-blue-400 hover:bg-blue-500', 
          delay: '300',
          label: 'Twitter'
        },
        { 
          id: 'pinterest',
          icon: FaPinterest, 
          color: 'bg-red-600 hover:bg-red-700', 
          delay: '450',
          label: 'Pinterest'
        }
      ]
    }
  ];

  const [hoveredStates, setHoveredStates] = useState(
    Object.fromEntries(cards.map(card => [card.id, { isHovered: false, showSocialIcons: false }]))
  );

  const handleCardHover = (cardId, isEntering) => {
    setHoveredStates(prev => ({
      ...prev,
      [cardId]: { ...prev[cardId], isHovered: isEntering }
    }));
  };

  const handleShareHover = (cardId) => {
    setHoveredStates(prev => ({
      ...prev,
      [cardId]: { ...prev[cardId], showSocialIcons: true }
    }));
  };

  const handleShareLeave = (cardId) => {
    setTimeout(() => {
      setHoveredStates(prev => ({
        ...prev,
        [cardId]: { ...prev[cardId], showSocialIcons: false }
      }));
    }, 200);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map((card) => {
        const { isHovered, showSocialIcons } = hoveredStates[card.id];

        return (
          <div key={card.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <div 
              className="relative overflow-hidden group"
              onMouseEnter={() => handleCardHover(card.id, true)}
              onMouseLeave={() => {
                handleCardHover(card.id, false);
                handleShareLeave(card.id);
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              
              {/* Share Icons Container */}
              <div 
                className={`absolute transition-all duration-500 ease-in-out ${
                  isHovered ? 'bottom-4' : '-bottom-full'
                } right-4`}
              >
                {/* Main Share Button */}
                <div
                  className={`transition-all duration-300 ease-in-out absolute right-0 ${
                    showSocialIcons 
                      ? 'opacity-0 translate-x-2 pointer-events-none' 
                      : 'opacity-100 translate-x-0'
                  }`}
                  onMouseEnter={() => handleShareHover(card.id)}
                >
                  <button 
                    className="bg-teal-600 p-2 rounded-full text-white hover:bg-teal-700 transition-colors duration-300"
                    aria-label="Share"
                  >
                    <FaShareAlt size={20} />
                  </button>
                </div>

                {/* Social Icons */}
                <div
                  className={`transition-all duration-500 ease-in-out flex gap-2
                    ${showSocialIcons 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                  onMouseLeave={() => handleShareLeave(card.id)}
                >
                  {card.socialIcons.map((item) => (
                    <button
                      key={item.id}
                      aria-label={`Share on ${item.label}`}
                      className={`${item.color} p-2 rounded-full text-white 
                        transition-all duration-500 ease-in-out
                        transform
                        ${showSocialIcons 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-full opacity-0'
                        }
                      `}
                      style={{
                        transitionDelay: `${item.delay}ms`
                      }}
                    >
                      <item.icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4">
              <span className="text-blue-500 text-sm">{card.category}</span>
              <h2 className="text-xl font-bold mt-2">
                {card.title}
              </h2>
              <p className="text-gray-600 mt-2">
                {card.description}
              </p>
              <div className="mt-4 text-sm text-gray-500 flex gap-4">
                <span>{card.date}</span>
                <span>{card.readTime}</span>
                <span>{card.views}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HoverCard;
