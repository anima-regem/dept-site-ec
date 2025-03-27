import { useState } from 'react';
import { Trophy, BookOpen, Award, Star } from 'lucide-react';

// Comprehensive achievement data structure with optional images
const achievementData = {
  years: [
    {
      year: "2023",
      studentAchievements: [
        {
          title: "National Level Technical Symposium Winner",
          description: "First place in Electronics Design Competition",
          date: "November 2023",
          image: "../src/assets/achievments/'24 s7.jpg",
          icon: "trophy"
        },
        {
          title: "Research Paper Presentation",
          description: "Selected to present research at International Conference",
          date: "September 2023",
          // No image intentionally
          icon: "book"
        }
      ],
      facultyAchievements: [
        {
          title: "Best Research Paper Award",
          description: "Received at National Conference on Communication Technologies",
          date: "November 2023",
          // No image intentionally
          icon: "award"
        },
        {
          title: "Innovation Grant Received",
          description: "Secured major research funding from national agency",
          date: "September 2023",
          image: "https://via.placeholder.com/400x300?text=Faculty+Achievement",
          icon: "star"
        }
      ]
    },
    {
      year: "2022",
      studentAchievements: [
        {
          title: "Hackathon Champions",
          description: "Won top prize in state-level technology hackathon",
          date: "June 2022",
          // No image intentionally
          icon: "trophy"
        },
        {
          title: "International Robotics Competition",
          description: "Secured second place in international robotics challenge",
          date: "December 2022",
          image: "https://via.placeholder.com/400x300?text=Student+Achievement",
          icon: "star"
        }
      ],
      facultyAchievements: [
        {
          title: "Research Grant Milestone",
          description: "Completed significant research project with national recognition",
          date: "June 2022",
          // No image intentionally
          icon: "award"
        },
        {
          title: "Distinguished Researcher Award",
          description: "Recognized for outstanding contributions to the field",
          date: "December 2022",
          image: "https://via.placeholder.com/400x300?text=Faculty+Achievement",
          icon: "book"
        }
      ]
    }
  ]
};

const AchievementGallery = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(() => {
        const years = achievementData.years.map(year => parseInt(year.year));
        return years.length > 0 ? Math.max(...years) : currentYear;
    });

    const [selectedCategory, setSelectedCategory] = useState<'student' | 'faculty'>('student');

    const [yearAchievements, setYearAchievements] = useState(() => {
        const yearData = achievementData.years.find(({ year }) => parseInt(year) === selectedYear);
        return yearData || (achievementData.years.length > 0 ? achievementData.years[0] : null);
    });

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const year = parseInt(event.target.value);
        setSelectedYear(year);
        
        const yearData = achievementData.years.find(({ year: y }) => parseInt(y) === year);
        if (yearData) {
            setYearAchievements(yearData);
        }
    };

    // Icon mapping
    const getIcon = (iconName: string) => {
        const iconProps = {
            size: 48,
            className: "text-blue-600 mb-4"
        };

        switch(iconName) {
            case 'trophy': return <Trophy {...iconProps} />;
            case 'book': return <BookOpen {...iconProps} />;
            case 'award': return <Award {...iconProps} />;
            case 'star': return <Star {...iconProps} />;
            default: return <Star {...iconProps} />;
        }
    };

    const renderAchievementCards = (achievements: any[]) => {
        return achievements && achievements.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                    >
                        {/* Conditional rendering for image or icon */}
                        {achievement.image ? (
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.src = "https://via.placeholder.com/400x300?text=Achievement+Image";
                                }}
                            />
                        ) : (
                            <div className="w-full h-48 bg-blue-50 flex items-center justify-center">
                                {getIcon(achievement.icon)}
                            </div>
                        )}
                        
                        <div className="p-4">
                            <h3 className="font-semibold text-blue-800 text-lg mb-2">
                                {achievement.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                                {achievement.description}
                            </p>
                            <span className="text-sm text-gray-500 font-medium">
                                {achievement.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-8 bg-gray-100 rounded-lg">
                <p className="text-gray-600 text-xl">No achievements found</p>
            </div>
        );
    };

    if (!yearAchievements) {
        return <div>No achievements found</div>;
    }

    return (
        <div className="container mx-auto space-y-6 p-4">
            <div className="flex justify-between items-center mb-6">
                {/* Category Selector - Left Side */}
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setSelectedCategory('student')}
                        className={`px-4 py-2 rounded-md transition-all ${
                            selectedCategory === 'student' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Student Achievements
                    </button>
                    <button
                        onClick={() => setSelectedCategory('faculty')}
                        className={`px-4 py-2 rounded-md transition-all ${
                            selectedCategory === 'faculty' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Faculty Achievements
                    </button>
                </div>

                {/* Year Selector - Right Side */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">Year:</span>
                    <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="block w-32 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {achievementData.years.map(({ year }) => (
                            <option key={year} value={parseInt(year)}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Achievements Display */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                    {selectedCategory === 'student' ? 'Student Achievements' : 'Faculty Achievements'}
                </h3>
                {selectedCategory === 'student'
                    ? renderAchievementCards(yearAchievements.studentAchievements)
                    : renderAchievementCards(yearAchievements.facultyAchievements)
                }
            </div>
        </div>
    );
};

export default AchievementGallery;