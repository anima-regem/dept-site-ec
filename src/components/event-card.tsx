import React from 'react';

const events = [
  {
    id: 1,
    title: "Laser Tag",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus, unde sit, impedit iste temporibus asperiores neque.",
    imageURL: "../src/assets/events/tarang laser tag.jpg",
    date: new Date(2024, 4, 15) // May 15, 2024
  },
  {
    id: 2,
    title: "Yoga Workshop",
    description: "A comprehensive yoga workshop for all levels, focusing on mindfulness and physical wellness.",
    imageURL: "../src/assets/events/bridge gap.jpg",
    date: new Date(2024, 3, 10) // April 10, 2024
  },
  {
    id: 3,
    title: "Fitness Challenge",
    description: "Join our annual fitness challenge and push your limits with exciting group activities and competitions.",
    imageURL: "../src/assets/events/tarang football 1.jpg",
    date: new Date(2024, 5, 20) // June 20, 2024
  },
  {
    id: 4,
    title: "Association Inauguration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/association inaguration.jpg",
    date: new Date(2024, 2, 25) // March 25, 2024
  },
  {
    id: 5,
    title: "Football Tournament",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang football 2.jpg",
    date: new Date(2024, 6, 5) // July 5, 2024
  },
  {
    id: 6,
    title: "IoT Workshop",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/iot class.jpg",
    date: new Date(2024, 3, 22) // April 22, 2024
  },
  {
    id: 7,
    title: "Treasure Hunt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang treasure hunt.jpg",
    date: new Date(2024, 7, 12) // August 12, 2024
  },
  {
    id: 8,
    title: "LED Room Experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang led room.jpg",
    date: new Date(2024, 8, 5) // September 5, 2024
  },
  {
    id: 9,
    title: "Arcade Gaming Night",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang arcade.jpg",
    date: new Date(2024, 7, 28) // August 28, 2024
  },
  {
    id: 10,
    title: "Christmas Celebration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/christmas.jpg",
    date: new Date(2024, 11, 20) // December 20, 2024
  },
  {
    id: 11,
    title: "Eid Mubarak Celebration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/eid mubarak.jpg",
    date: new Date(2024, 3, 15) // April 15, 2024
  },
  {
    id: 12,
    title: "Iftar Party",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/ifthar party.jpg",
    date: new Date(2024, 3, 20) // April 20, 2024
  },
  {
    id: 13,
    title: "GATE Preparation Session",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/gate session.jpg",
    date: new Date(2024, 9, 10) // October 10, 2024
  },
  {
    id: 14,
    title: "Menstrual Hygiene Awareness",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/menstural hygeine.jpg",
    date: new Date(2024, 5, 28) // June 28, 2024
  },
  {
    id: 15,
    title: "Talk Session with Muhshin C A",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/muhshin C A Talk session.jpg",
    date: new Date(2024, 10, 15) // November 15, 2024
  },
  {
    id: 16,
    title: "Onam Celebration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/onam.jpg",
    date: new Date(2024, 8, 15) // September 15, 2024
  },
  {
    id: 17,
    title: "Sayonara Farewell",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/sayonara.jpg",
    date: new Date(2024, 4, 30) // May 30, 2024
  },
  {
    id: 18,
    title: "Tarang Promo Event",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang promo.jpg",
    date: new Date(2024, 6, 15) // July 15, 2024
  },
  {
    id: 19,
    title: "Juggling Workshop",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang juggling.jpg",
    date: new Date(2024, 7, 5) // August 5, 2024
  },
  {
    id: 20,
    title: "Campus to Corporate Transition",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/campus to coperate.jpg",
    date: new Date(2024, 9, 20) // October 20, 2024
  },
  {
    id: 21,
    title: "Circuit to Career Workshop",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/ckt to career.jpg",
    date: new Date(2024, 8, 25) // September 25, 2024
  },
  {
    id: 22,
    title: "Call for Volunteers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/call for volunteers.jpg",
    date: new Date(2024, 2, 10) // March 10, 2024
  },
  {
    id: 23,
    title: "Football Tournament Finals",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang football 3.jpg",
    date: new Date(2024, 6, 10) // July 10, 2024
  },
  {
    id: 24,
    title: "Football Training Camp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang football 4.jpg",
    date: new Date(2024, 5, 5) // June 5, 2024
  },
  {
    id: 25,
    title: "Football Championship",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/tarang football 5.jpg",
    date: new Date(2024, 10, 5) // November 5, 2024
  },
  {
    id: 26,
    title: "Idea Hackthon",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a nobis earum. Possimus corrupti nostrum maxime inventore id earum voluptatem quo culpa ducimus.",
    imageURL: "../src/assets/events/Ideahackathon/ideahackathon.jpg",
    date: new Date(2024, 10, 5) // November 5, 2024
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