export type Faculty = {
  name: string;
  designation: string;
  image: string;
  email: string;
};

export type Staff = {
  name: string;
  designation: string;
  image: string;
  email: string;
};

const priority = {
  "Associate Professor": 4,
  "Assistant Professor": 3,
  "Assistant Professor (Contract)": 2,
  "Instructor Gr.I": 1,
};

const staffDesignationPriority: { [key: string]: number } = {
  "Computer Programmer": 5,
  "Trade Instructor Gr.I": 4,
  "Trade Instructor Gr.II": 3,
  "Instructor Gr.II": 2,
  Tradesman: 1,
};

function sortFaculty(faculty: Faculty[]) {
  return [...faculty]
    .map((e) => ({ ...e, name: e.name.toLocaleLowerCase() }))
    .sort((a, b) => {
      const aPriority = priority[a.designation as keyof typeof priority] || 0;
      const bPriority = priority[b.designation as keyof typeof priority] || 0;

      return bPriority - aPriority;
    });
}

export function sortStaff(staff: Staff[]) {
  return [...staff]
    .map((e) => ({ ...e, name: e.name.toLocaleLowerCase() }))
    .sort((a, b) => {
      const priorityA = staffDesignationPriority[a.designation] || 0;
      const priorityB = staffDesignationPriority[b.designation] || 0;

      return priorityB - priorityA;
    });
}

export const faculty: Faculty[] = sortFaculty([
  {
    name: "Mr. VIPIL K",
    designation: "Assistant Professor (Contract)",
    image: "/src/assets/faculty photos/VIPIL K.jpg",
    email: "dmlwaWxrQGdlY3NrcC5hYy5pbg==",
  },
  {
    name: "SOUMYA C P",
    designation: "Assistant Professor (Contract)",
    image: "/src/assets/faculty photos/SOUMYA C P.jpg",
    email: "c291bXlhY3BAZ2Vjc2twLmFjLmlu",
  },
  {
    name: "Prof. ANWAR HUSSAIN M.",
    designation: "Associate Professor",
    image: "/src/assets/faculty photos/ANWAR HUSSAIN M..webp",
    email: "YW53YXJodXNzYWlubUBnZWNza3AuYWMuaW4=",
  },
  {
    name: "Dr. BINDU P(PALAKKAL)",
    designation: "Associate Professor",
    image: "/src/assets/faculty photos/BINDU P( PALAKKAL).jpg",
    email: "YmluZHVwQGdlY3NrcC5hYy5pbg==",
  },
  
  {
    name: "Prof. RANI L",
    designation: "Assistant Professor",
    image: "/src/assets/faculty photos/RANI L.jpg",
    email: "cmFuaWxAZ2Vjc2twLmFjLmlu",
  },
  {
    name: "Prof. HARIPRASAD B",
    designation: "Assistant Professor",
    image: "/src/assets/faculty photos/HARIPRASAD.B.jpg",
    email: "aHBtYWxhYmFyQGdtYWlsLmNvbQ==",
  },

  {
    name: "Prof. LINCY K",
    designation: "Assistant Professor",
    image: "/src/assets/faculty photos/LINCY K.jpg",
    email: "bGluY3lrNDVAZ21haWwuY29t",
  },
 
  
  {
    name: "Prof. GAYATHRI A",
    designation: "Assistant Professor",
    image: "/src/assets/faculty photos/GAYATHRI A.jpg",
    email: "Z2F5YXRocmkuYTI3OTFAZ21haWwuY29t",
  },
  {
    name: "Prof. DR. SHEELA V K",
    designation: "Assistant Professor",
    image: "/src/assets/faculty photos/DR. SHEELA V K.jpg",
    email: "c2hlZWxhdmtAZ2Vjc2twLmFjLmlu",
  },
  {
    name: "NIRMAL M R",
    designation: "Assistant Professor",
    image: "/src/assets/faculty photos/NIRMAL M R.jpg",
    email: "bmxybWFsYW1iYWQ2QGdtYWlsLmNvbQ==",
  },
  
  {
    name: "JITHESH C P",
    designation: "Assistant Professor",
    image: "/src/assets/faculty photos/JITHESH C P.jpg",
    email: "aml0aHU4MEBnbWFpbC5jb20=",
  },
  {
    name: "Dr. CHITHIRA P. R.",
    designation: "Assistant Professor",
    image: "/src/assets/faculty photos/CHITHIRA P. R..jpg",
    email: "Y2hpdGhpcmFwckBnbWFpbC5jb20=",
  },
  {
    name: "Mrs. GARGI S",
    designation: "Assistant Professor (Contract)",
    image: "/src/assets/faculty photos/GARGI.S.jpg",
    email: "Z2FyZ2lzcmVlNDVAZ21haWwuY29t",
  },
  {
    name: "Mrs. NIRMALA K V",
    designation: "Instructor Gr.I",
    image: "/src/assets/faculty photos/NIRMALA K V.jpg",
    email: "bmxybWFsYTIwMTdzQGdtYWlsLmNvbQ==",
  },
]);

export const staff: Staff[] = sortStaff([
  {
    name: "MUHAMMAD ALI M",
    designation: "Instructor Gr.II",
    image: "/src/assets/staffs/MUHAMMAD ALI M.jpg",
    email: "YWxpYXNtbTA3N0BnbWFpbC5jb20=",
  },
 
  {
    name: "SURESHBABU P",
    designation: "Trade Instructor Gr.II",
    image: "/src/assets/staffs/SURESHBABU P.jpg",
    email: "c3VyZXNoYmFidW1nbUBnbWFpbC5jb20=",
  },

  {
    name: "MANOJ K P",
    designation: "Trade Instructor Gr.I",
    image: "/src/assets/staffs/MANOJ K P.jpg",
    email: "RW1haWwgVW5hdmFpbGFibGU=", // Email Unavailable
  },
  {
    name: "MR. MAHESH C",
    designation: "Tradesman",
    image: "/src/assets/staffs/MR. MAHESH C.jpg",
    email: "RW1haWwgVW5hdmFpbGFibGU=", // Email Unavailable
  },
  
]);
