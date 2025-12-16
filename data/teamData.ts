export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Kelvin Turkson",
    role: "President",
    bio: `
      <p>
        Kelvin Turkson is a distinguished finance professional and a dedicated
        advocate for youth empowerment and community advancement. He holds an MBA
        in Accounting & Finance and a certification in Fraud Control and Forensic
        Investigations, and is currently at the final level of the Institute of
        Chartered Accountants, Ghana (ICAG).
      </p>
      <p>
        His professional experience spans multiple industries, including the
        Cement Industry, Fast Moving Consumer Goods (FMCG), Logistics, and the
        Health Sector.
      </p>
      <p>
        Beyond his professional achievements, Kelvin is a visionary leader who
        believes true success lies in uplifting others—especially the youth—by
        fostering opportunities and nurturing aspirations. As President of
        Meridian Youth Network, he champions initiatives that equip young people
        with the tools, resources, and inspiration to realize their full
        potential.
      </p>
      <p>
        His guiding philosophy is: <em>“Be the reason someone believes in the
        goodness of people.”</em>
      </p>
    `,
    image: "/images/team/kelvin.jpg",
  },

  {
    id: 2,
    name: "Joshua Nunoo",
    role: "Vice President",
    bio: `
      <p>
        Joshua Nunoo is a multifaceted professional with expertise in business,
        philanthropy, and public relations. He studied Economics, Mathematics,
        and Data Management at the University of Cape Coast.
      </p>
      <p>
        He has held various leadership roles, including Public Relations Officer
        at the University of Cape Coast (Economics Department), Reporter and
        Porter for the Sekondi College Editorial Board, and Member of the Church
        of Pentecost Youth Executive.
      </p>
      <p>
        Professionally, Joshua has served as Shipping and Warehouse Officer at
        Cocoa Marketing Company Ltd, Branch and Operations Manager at Goodrich
        Trucks Ltd, and Logistics Manager at Scion Ltd.
      </p>
      <p>
        Through these experiences, he has developed a strong blend of business
        acumen, communication skills, and community engagement.
      </p>
    `,
    image: "/images/team/joshua.jpg",
  },

  {
    id: 3,
    name: "Agnes Appiah",
    role: "Secretary",
    bio: `
      <p>
        Agnes Appiah is a results-driven professional with a passion for youth
        development, female empowerment, and customer-centric service. She holds
        a Bachelor's degree in Marketing from Pentecost University (2017).
      </p>
      <p>
        She is certified in Introduction to Social Work Basics, Persuasion
        Strategy, Customer Service, and Service Excellence.
      </p>
      <p>
        Agnes served as an Operations and Programs Officer at the National Youth
        Authority from 2019 to 2022, where she developed and implemented
        youth-focused programs and coordinated empowerment initiatives.
      </p>
      <p>
        Her core interests include youth development, female empowerment,
        community engagement, and social impact.
      </p>
    `,
    image: "/images/team/agnes.jpg",
  },

  {
    id: 4,
    name: "Daniel Andoh",
    role: "Treasurer",
    bio: `
      <p>
        Daniel Andoh is a passionate community leader, youth empowerment
        advocate, and a Customs Officer at the Ghana Revenue Authority (GRA). He
        holds a Bachelor of Arts in Business Administration.
      </p>
      <p>
        Beyond his professional role, Daniel is a devoted director of a youth
        empowerment NGO and is deeply committed to inspiring young people to
        dream big and contribute meaningfully to society.
      </p>
      <p>
        With empathy, enthusiasm, and a strong sense of service, Daniel continues
        to help shape a future where the youth are empowered to lead and thrive.
      </p>
    `,
    image: "/images/team/daniel.jpg",
  },

  {
    id: 5,
    name: "Gabriel Asare",
    role: "Organizer",
    bio: `
      <p>
        Gabriel Asare is a seasoned marketer and visionary entrepreneur with a
        passion for sustainability. He holds a BSc in Business Administration
        from KNUST (2022) and an HND in Marketing Studies from Cape Coast Technical
        University (2017).
      </p>
      <p>
        He has executed marketing strategies for political figures, businesses,
        and startups, and is a founding member and organizer of Meridian Youth
        Network.
      </p>
      <p>
        Gabriel has also served as Treasurer for the National Union of Baptist
        Students and Vice President of the National Service Personnel
        Association, Tema Metro.
      </p>
      <p>
        His interests include yoga, fitness, cultural exploration,
        entrepreneurship, education, and philanthropy.
      </p>
    `,
    image: "/images/team/gabriel.jpg",
  },

  /* -------- RESERVED SLOTS (ADD LATER) -------- */

  {
    id: 6,
    name: "Sadik Alhassan",
    role: "Media & Content Manager",
    bio: `
      <p>
        Sadik Alhassan is the Media and Content Manager at Meridian Youth Network (MYN), where he leads storytelling, digital engagement, and content strategy to amplify youth voices and social impact initiatives.
      </p>
      <p>
        At MYN, Sadik focuses on creating meaningful content that reflects the organization’s mission, showcases community impact, and strengthens public engagement across digital platforms. He believes media is a powerful tool for advocacy, awareness, and sustainable social change.
      </p>
    `,
    image: "/images/team/alhassan.jpeg",
  },

  {
    id: 7,
    name: "Emmanuel Kwao Apeku",
    role: "Public Relations",
    bio: `
      <p>
        Emmanuel Kwao Apeku serves as the Public Relations Lead at Meridian Youth Network (MYN), where he supports the organization’s public image, stakeholder engagement, and strategic communication efforts.
      </p>

      <p>
        At MYN, Emmanuel focuses on strengthening public trust, managing organizational messaging, and supporting outreach initiatives that align with youth development, sustainability, and community impact. He is particularly interested in the intersection of policy, development, and institutional effectiveness, and is committed to contributing to solutions that drive long-term social progress.
      </p>
    `,
    image: "/images/team/emmanuel.jpeg",
  },
   {
    id: 8,
    name: "Abdul-Rahim Suleman",
    role: "Coordinator",
    bio: `
      <p>
        Abdul-Rahim Suleman serves as a Coordinator at Meridian Youth Network (MYN), where he plays a central role in supporting program execution, operational coordination, and the effective use of systems that drive organizational efficiency.
      </p>

      <p>
        At MYN, Abdul-Rahim focuses on coordinating activities, strengthening internal systems, and supporting teams to deliver programs efficiently and on schedule. He is driven by discipline, accountability, and a strong belief in the role of organized systems in achieving sustainable youth and community development outcomes.
      </p>
    `,
    image: "/images/team/abdul.png",
  },
];
