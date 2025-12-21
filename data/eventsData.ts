export interface EventType {
  title: string;
  date: string;
  bannerImage: string;
  content: string[];
  images: string[];
}

export const eventsData: Record<string, EventType> = {
  
  // 1. CLEANUP EXERCISE — TEMA COMMUNITY 2
  "cleanup-exercise-tema-community-2-bbc": {
    title: "Cleanup Exercise — Tema Community 2 BBC",
    date: "March 2024",
    bannerImage: "/images/CleaningFigma/CleaningFigma9.jpg",
    content: [
      "On a bright Saturday morning, volunteers from our community gathered for a mission—not just to clean, but to restore the beauty and safety of our environment. Spearheaded by Meridian Youth Network, the cleanup was a response to a growing concern: overflowing waste, blocked drains, and neglected public spaces.",
      "Instead of waiting for change, we became the change. Equipped with tools, gloves, and a shared passion for community transformation, volunteers of all ages worked together to clean gutters, remove trash, and beautify the surrounding areas.",
      "The impact was powerful and visible. What began as a simple cleanup effort quickly evolved into a movement—one rooted in unity, responsibility, and hope for a healthier community.",
      "Together, we cleaned. Together, we cared. And together, we made a difference."
    ],
    images: [
      "/images/CleaningFigma/CleaningFigma6.jpg",
      "/images/CleaningFigma/CleaningFigma5.jpg",
      "/images/CleaningFigma/CleaningFigma8.jpg"
    ]
  },


  // 2. GIRL CHILD PROGRAM — PHASE 1
  "girl-child-program": {
    title: "Girl Child Program",
    date: "August 2024",
    bannerImage: "/images/GirlChild/photo1.jpg",
    content: [
      "Our Girl Child Program is a commitment to empowering young girls with the confidence, knowledge, and support they need to thrive. From mentorship to soft-skills training, the program focuses on nurturing leadership and amplifying the voices of young girls.",
      "This initiative seeks to address ongoing challenges such as limited access to personal development opportunities, gender-based stereotypes, and lack of mentorship resources. Through workshops, community dialogues, and engagement activities, we aim to build a new generation of inspired young women.",
      "Every session is designed to guide girls toward confidence, purpose, and leadership."
    ],
    images: [
      "/images/GirlChild/photo4.jpg",
      "/images/GirlChild/photo2.jpg",
      "/images/GirlChild/photo3.jpg"
    ]
  },


  // 3. CLEANING EXERCISE — PHASE 2
  "cleaning-exercise-phase-2": {
    title: "Cleaning — Phase 2",
    date: "November 2024",
    bannerImage: "/images/CleaningExercise2/Cleanup8.jpg",
    content: [
      "Phase 2 of the Cleaning Exercise built on the momentum of our initial outreach, expanding both participation and impact within the community.",
      "This phase focused on deeper engagement, encouraging volunteers—especially young people—to take shared responsibility for maintaining clean and healthy public spaces. Through coordinated clean-up activities, environmental education, and teamwork, participants strengthened their sense of civic duty while contributing directly to a safer and more welcoming environment.",
      "Beyond the physical transformation of the spaces, Phase 2 reinforced the message that sustainable change begins with consistent action, collective effort, and community ownership."
    ],
    images: [
      "/images/CleaningExercise2/Cleanup7.jpg",
      "/images/CleaningExercise2/Cleanup10.jpg",
      "/images/CleaningExercise2/Cleanup12.jpg"
    ]
  },

  // 4. CLEANING EXERCISE — PHASE 3
  "cleaning-exercise-phase-3": {
    title: "Cleaning — Phase 3",
    date: "June 2025",
    bannerImage: "/images/CleaningExercise3/photo2.jpg",
    content: [
      "Phase 3 marked a significant step forward in our cleaning initiative, emphasizing sustainability, leadership, and long-term environmental responsibility.",
      "Participants moved beyond clean-up efforts alone, engaging in conversations around waste management, environmental awareness, and the importance of maintaining clean surroundings beyond the exercise itself. Community members were encouraged to become ambassadors for cleanliness, promoting positive habits and accountability within their neighborhoods.",
      "This phase reflected our continued commitment to empowering communities to protect their environment—transforming clean spaces into a shared standard rather than a one-time effort."
    ],
    images: [
      "/images/CleaningExercise3/photo9.jpg",
      "/images/CleaningExercise3/photo.jpg",
      "/images/CleaningExercise3/photo5.jpg"
    ]
  }
};
