import React from 'react';

const events = [
  {
    id: 1,
    title: "Laser Tag",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus, unde sit, impedit iste temporibus asperiores neque.",
    imageURL: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    date: new Date(2024, 4, 15) // May 15, 2024
  },
  {
    id: 2,
    title: "Yoga Workshop",
    description: "A comprehensive yoga workshop for all levels, focusing on mindfulness and physical wellness.",
    imageURL: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    date: new Date(2024, 3, 10) // April 10, 2024
  },
  {
    id: 3,
    title: "Fitness Challenge",
    description: "Join our annual fitness challenge and push your limits with exciting group activities and competitions.",
    imageURL: "https://images.unsplash.com/photo-1518611507436-f9221403b3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    date: new Date(2024, 5, 20) // June 20, 2024
  }
];

const EventCard = () => {
  // Month names for text formatting
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Sort events by date in descending order (latest first)
  const sortedEvents = [...events].sort((a, b) => b.date - a.date);

  // Helper function to format date
  const formatDate = (date) => ({
    day: date.getDate(),
    month: monthNames[date.getMonth()],
    monthShort: monthNames[date.getMonth()].slice(0, 3),
    year: date.getFullYear()
  });

  return (
    <div className="space-y-4 md:grid md:grid-cols-[100px_1fr] md:gap-4 lg:grid-cols-[150px_1fr]">
      {sortedEvents.map((event) => {
        const formattedDate = formatDate(event.date);
        
        return (
          <React.Fragment key={event.id}>
            {/* Date Container */}
            <div className="hidden md:flex justify-end items-center">
              <div className="flex flex-col items-center bg-gray-100 p-2 rounded-lg">
                <span className="font-bold text-xl">{formattedDate.day}</span>
                <span className="text-sm">{formattedDate.monthShort}</span>
                <span className="text-xs">{formattedDate.year}</span>
              </div>
            </div>

            <div className="w-full">
              {/* Mobile Date (visible on small screens) */}
              <div className="md:hidden mb-2">
                <span className="text-sm font-medium">
                  {formattedDate.month} {formattedDate.day}, {formattedDate.year}
                </span>
              </div>

              <div className='flex flex-col gap-2 border p-4 border-black/50 md:flex-row lg:justify-between'>
                <div className="flex flex-col gap-2 flex-grow">
                  <h1 className="font-medium text-3xl uppercase">{event.title}</h1>
                  <p className="text-base lg:text-xl lg:max-w-[800px]">{event.description}</p>
                </div>
                
                <img 
                  className="w-full md:w-48 lg:w-64 lg:h-80 object-cover" 
                  src={event.imageURL} 
                  alt={`${event.title} event`} 
                />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default EventCard;