// File: src/components/project-gallery.tsx
import { useState } from 'react';

// Manual project data definition with Flowbite images
const projectsData = {
  years: [
    {
      year: "2023",
      images: [
        {
          name: "Project 1",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
        },
        {
          name: "Project 2",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
        },
        {
          name: "Project 3",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
        },
        {
          name: "Project 4",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
        },
        {
          name: "Project 5",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
        }
      ]
    },
    {
      year: "2022",
      images: [
        {
          name: "Project 6",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
        },
        {
          name: "Project 7",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
        },
        {
          name: "Project 8",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
        },
        {
          name: "Project 9",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
        }
      ]
    },
    {
      year: "2021",
      images: [
        {
          name: "Project 10",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
        },
        {
          name: "Project 11",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
        },
        {
          name: "Project 1",
          fullName: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
        }
      ]
    }
  ]
};

const ProjectGallery = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(() => {
        // Find the most recent year in data, or use current year
        const years = projectsData.years.map(year => parseInt(year.year));
        return years.length > 0 ? Math.max(...years) : currentYear;
    });

    const [yearProjects, setYearProjects] = useState(() => {
        // Get the data for the initially selected year
        const yearData = projectsData.years.find(({ year }) => parseInt(year) === selectedYear);
        return yearData || (projectsData.years.length > 0 ? projectsData.years[0] : null);
    });

    const handleYearChange = (event: any) => {
        const year = parseInt(event.target.value);
        setSelectedYear(year);
        
        // Get the project data for selected year
        const yearData = projectsData.years.find(({ year: y }) => parseInt(y) === year);
        if (yearData) {
            setYearProjects(yearData);
        }
    };

    if (!yearProjects) {
        return <div>No projects found</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-end px-4">
                <select
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="block w-32 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {projectsData.years.map(({ year }) => (
                        <option key={year} value={parseInt(year)}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {yearProjects.images.map((image, index) => (
                    <div
                        key={`${selectedYear}-${index}`}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={image.fullName}
                            alt={image.name}
                            className="w-full h-64 object-cover rounded-lg"
                            loading="lazy"
                            onError={(e) => {
                                console.error("Image failed to load:", e);
                                // Fallback to a placeholder if image fails to load
                                e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                            }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{image.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            {yearProjects.images.length === 0 && (
                <div className="text-center py-8">
                    <p>No projects found for {selectedYear}</p>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;