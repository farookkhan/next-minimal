import {
  HEALTH_PROGRAM_TYPE_ID,
  SERVE_PROGRAM_TYPE_ID,
  EDUCATION_PROGRAM_TYPE_ID,
  YOUTH_PROGRAM_TYPE_ID,
  HEALTH_2_WEEK_FEE,
  HEALTH_4_WEEK_FEE,
  SERVE_2_WEEK_FEE,
  SERVE_4_WEEK_FEE,
  EDUCATION_2_WEEK_FEE,
  EDUCATION_4_WEEK_FEE,
  YOUTH_1_WEEK_FEE,
  YOUTH_2_WEEK_FEE,
  YOUTH_4_WEEK_FEE,
  FELLOWSHIP_HEALTH_2_WEEK_FEE,
  FELLOWSHIP_HEALTH_4_WEEK_FEE,
  FELLOWSHIP_SERVE_2_WEEK_FEE,
  FELLOWSHIP_SERVE_4_WEEK_FEE,
  FELLOWSHIP_YOUTH_1_WEEK_FEE,
  FELLOWSHIP_YOUTH_2_WEEK_FEE,
  FELLOWSHIP_YOUTH_4_WEEK_FEE,
  FELLOWSHIP_EDUCATION_2_WEEK_FEE,
  FELLOWSHIP_EDUCATION_4_WEEK_FEE,
} from '../lib/constants';

export const programFees = {
  healthInnovation: {
    twoWeek: HEALTH_2_WEEK_FEE,
    fourWeek: HEALTH_4_WEEK_FEE,
  },
  serve: {
    twoWeek: SERVE_2_WEEK_FEE,
    fourWeek: SERVE_4_WEEK_FEE,
  },
  education: {
    twoWeek: EDUCATION_2_WEEK_FEE,
    fourWeek: EDUCATION_4_WEEK_FEE,
  },
  youthEmpowerment: {
    oneWeek: YOUTH_1_WEEK_FEE,
    twoWeek: YOUTH_2_WEEK_FEE,
    fourWeek: YOUTH_4_WEEK_FEE,
  },
  fellowship: {
    healthInnovation: {
      twoWeek: FELLOWSHIP_HEALTH_2_WEEK_FEE,
      fourWeek: FELLOWSHIP_HEALTH_4_WEEK_FEE,
    },
    education: {
      twoWeek: FELLOWSHIP_EDUCATION_2_WEEK_FEE,
      fourWeek: FELLOWSHIP_EDUCATION_4_WEEK_FEE,
    },
    serve: {
      twoWeek: FELLOWSHIP_SERVE_2_WEEK_FEE,
      fourWeek: FELLOWSHIP_SERVE_4_WEEK_FEE,
    },
    youthEmpowerment: {
      oneWeek: FELLOWSHIP_YOUTH_1_WEEK_FEE,
      twoWeek: FELLOWSHIP_YOUTH_2_WEEK_FEE,
      fourWeek: FELLOWSHIP_YOUTH_4_WEEK_FEE,
    },
  },
};

export const programs = [];

export const pageProfiles = {
  fellowship: {
    pagename: 'fellowship',
    radioButtons: [
      { label: 'Youth Empowerment', value: YOUTH_PROGRAM_TYPE_ID },
      { label: 'Health Innovation', value: HEALTH_PROGRAM_TYPE_ID },
      { label: 'Education / Social Work', value: EDUCATION_PROGRAM_TYPE_ID },
    ],
  },
  programFeePage: {
    paymentPlanSuccess: false,
    paymentPlanFail: false,
  },
};

export const faqs = [
  {
    sectionTitle: 'Admissions and Eligibility',
    faqs: [
      {
        id: 1,
        question: 'I noticed there are many application deadlines—when should I apply?',
        answer: 'You can apply at any time, for any program, before any of the application deadlines. We encourage you to apply as early as possible, as spaces do fill up fast.',
      },
      {
        id: 2,
        question: 'Do you have to be a student to qualify for the programs?',
        answer: 'Our programs are ideal for university students and graduates who are 18-25 years old; however, we do not require that you be currently enrolled as a student in order to participate in an OHS program.',
      },
      {
        id: 3,
        question: 'Where do OHS volunteers come from?',
        answer: 'OHS volunteers come from all over the world.  Since 2008, our volunteer corps has been made up of more than 1,200 students from more than 100+ universities, representing dozens of countries worldwide.',
      },
      {
        id: 4,
        question: 'What prior experience, if any, is required to participate?',
        answer: 'No prior experience is necessary.  We welcome applicants from all backgrounds with various levels and types of previous experience. We believe that this adds to the diversity and collaborative nature of our programs and organization.',
      },
    ],
  },
  {
    sectionTitle: 'The Experience',
    faqs: [
      {
        id: 5,
        question: 'Will I be trained before the start of my program?',
        answer: 'Our volunteer training is done differently each year—you can expect to undergo some training before your program start date. The first few days of your program will be when you receive the majority of your training.',
      },
      {
        id: 6,
        question: 'Can you inform me more about how your organization and programs are different from other agents or platforms that place volunteers into the programs by charging a fee?',
        answer: 'One Heart Source does rely partially on volunteer fees to run our programs, but we also rely on private donations and other fundraising activities. Our programs are designed and led entirely by One Heart Source personnel. Full-time, in-country program leaders run the volunteer orientation and facilitate cultural awareness and understanding by leading relevant group discussions and by connecting volunteers to community members, cultural sites, and museums throughout the duration of your stay. The program leaders have a minimum of three years experience working with One Heart Source. By working directly with local schools and communities we are able to dictate the quality and sustainability of volunteer projects in ways that placement agencies may not be able to.',
      },
      {
        id: 7,
        question: 'What is the level of leadership and involvement of OHS volunteers in the program, and how can I contribute to the design and implementation of the program?',
        answer: 'Our volunteers hail from all academic and social backgrounds, which, we believe, adds to the evolution and development of our programs and our organization. Throughout all OHS programs we strongly encourage volunteers to take initiative and develop ideas and projects that utilize their individual strengths and skills to benefit the communities we work with.',
      },
      {
        id: 8,
        question: 'What learning theory and approach does your program adopt to nurture the volunteers?',
        answer: 'The learning theory that we incorporate into our programs is based on alternative team teaching methods, creativity, and high-quality mentorship. As a volunteer you will have a chance to bring your unique style and influence in order to most effectively reach the students you are working with.  You might teach in groups of two or three, allowing yourself and fellow mentors to present information to students in a variety of creative ways, or you might teach 1-3 students at a time, focusing on the students’ most urgent academic needs. As educators, we believe in keeping students engaged and allowing discussion to flow, showing students that learning can be a fun, interactive experience. There will always be support available from our staff in order to provide feedback, assistance, and counseling when dealing with the challenges of teaching.',
      },
      {
        id: 9,
        question: 'Will there be time for personal travel during the programs?',
        answer: 'Yes!  Cape Town is a beautiful place with a rich history and culture. You will be able to spend time exploring the city and surrounding areas during weekends. Weekends are free, and many volunteers choose to go on safaris, skydiving, hiking, shark cage-diving, or other local excursions. If you are interested in more extensive travel, we suggest you schedule time before or after your program dates to do so.',
      },
      {
        id: 10,
        question: 'What are the safety concerns and/or procedures in Cape Town?',
        answer: 'Safety is our number one priority. All volunteer experiences are planned and executed with your safety as our first concern. During program hours, Volunteers are always under supervision of OHS Leadership. In all locations, a vehicle is available 24/7 in case of emergency. Volunteer living accommodations are secure.We are confident that you will find Cape Town to be warm and welcoming; however, as is the case in any foreign country or city, travel abroad does pose risks and requires safe, smart travel techniques. Upon arrival you will be educated on and familiarized with your immediate location to ensure a comfortable stay. OHS Leadership is available 24/7 should there be any concerns.',
      },
    ],
  },
  {
    sectionTitle: 'Travel',
    faqs: [
      {
        id: 11,
        question: 'Does OHS book flights for volunteers?',
        answer: 'Because our volunteers come from all over the world, OHS does not book flights for our volunteers. We do, however, encourage volunteers to travel together when possible.',
      },
      {
        id: 12,
        question: 'As a volunteer, will I travel alone or with a group of volunteers?',
        answer: 'Once our volunteer positions are filled, contact information is exchanged with fellow members so that you can book flights together if you would like. We encourage traveling together when possible! During the program, transportation is provided by OHS, and volunteers travel together.',
      },
      {
        id: 13,
        question: 'Will I be picked up upon arrival?',
        answer: 'Yes! OHS will pick all volunteers up upon arrival. There are arrival and departure guidelines presented in the Logistics Manual to assist in ensuring appropriate arrival and departure times.',
      },
      {
        id: 14,
        question: 'When am I expected to arrive in country?',
        answer: 'The program officially begins at 5:00 p.m. on the program start-date, so you may arrive in country that day if you arrive before 2:00 p.m.  However, most people choose to arrive a day or two before the program start-date in order to acclimate.  The program end-date is a full day of scheduled activities until 5:00 p.m.   Checkout is 10:00 a.m. the following day.  Participating for the full length of the program is mandatory. If you are concerned about time conflicts, please contact an OHS staff member.',
      },
    ],
  },
  {
    sectionTitle: 'Fundraising & Program Fees',
    faqs: [
      {
        id: 15,
        question: 'What does the program fee cover?',
        answer: 'The Pro­gram Fee is tax-deductible for U.S. res­i­dents and includes: Food, clean drink­ing water, hous­ing, inter­net access dur­ing your stay Program / teach­ing sup­plies Full-time in-country leadership and support On-site ori­en­ta­tion and pre-field ori­en­ta­tion training Arranged trans­porta­tion from air­port to program location Trans­porta­tion within program location for program activities 24-hour on-call support in case of health emergency Cell phone with domes­tic and inter­na­tional capability Pro­gram Fee does not include: Inter­na­tional or domes­tic airfare Costs of immu­niza­tions or travel insurance Costs of week­end travel trips and cul­tural activ­i­ties on free time Please note: the pro­gram fee is non-refundable.',
      },
      {
        id: 16,
        question: 'Does OHS offer any financial aid or sponsorships?',
        answer: 'As a non-profit organization (NGO), One Heart Source does not currently offer any financial aid or sponsorships. We do, however, strongly encourage fundraising your program fee through the help of friends, family, and various fundraising campaigns.',
      },
      {
        id: 17,
        question: 'Are donations tax-deductible for non-U.S. residents?',
        answer: 'OHS is a registered non-profit in the U.S.; therefore, donations are tax-deductible if and only if the donor currently pays taxes in the U.S.',
      },
      {
        id: 18,
        question: 'What is the source of funding for One Heart Source?',
        answer: 'Your volunteer program fees, private donations, and various fundraising campaigns are the main source of funding for OHS.',
      },
    ],
  },
  {
    sectionTitle: 'Other',
    faqs: [
      {
        id: 19,
        question: 'Are volunteer positions paid?',
        answer: 'All volunteer positions are unpaid.',
      },
      {
        id: 20,
        question: 'Am I responsible for finding my own accommodations?',
        answer: 'You are not responsible for finding your own accommodations. OHS will arrange all accommodations for the duration of your program.',
      },
      {
        id: 21,
        question: 'Can I go on multiple or consecutive programs?',
        answer: 'Sure!  You can apply to as many programs as you would like. You are also able to volunteer in multiple locations. You will be responsible for paying the program fee for each program; however, a 10% discount will be applied to the cost of the second program.',
      },
      {
        id: 22,
        question: 'Can I receive academic credit or volunteer hours for my program?',
        answer: 'Absolutely. Many volunteers have received academic credit or certified volunteer hours for participating in a program. We suggest that you contact your school advisor or Department Head to inquire about any opportunities that may be available for you to receive academic credit.',
      },
      {
        id: 23,
        question: 'Is it possible for OHS Staff to write a letter of recommendation, if necessary?',
        answer: 'Yes! If you need, our staff is happy to write a letter of recommendation for you after your time spent with us.',
      },
    ],
  },
];

export const clippersTickets = {
  sections: [
    {
      "sectionId": 1,
      "level": 1,
      "section": 114,
      "tickets": 8,
      "price": 250
    },
    {
      "sectionId": 2,
      "level": 1,
      "section": 117,
      "tickets": 10,
      "price": 250
    },
    {
      "sectionId": 3,
      "level": 2,
      "section": 215,
      "tickets": 13,
      "price": 100
    },
    {
      "sectionId": 4,
      "level": 2,
      "section": 218,
      "tickets": 6,
      "price": 100
    },
    {
      "sectionId": 5,
      "level": 3,
      "section": 330,
      "tickets": 7,
      "price": 42
    },
    {
      "sectionId": 6,
      "level": 3,
      "section": 331,
      "tickets": 34,
      "price": 42
    }
  ],
};
