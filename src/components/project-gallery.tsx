// File: src/components/project-gallery.tsx
import { useState } from 'react';
import projectsData from '@/data/projects.json';

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

    // Log the current state to debug
    console.log("Selected Year:", selectedYear);
    console.log("Year Projects:", yearProjects);

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
                            src={`/placements/${yearProjects.year}/${image.fullName}`}
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