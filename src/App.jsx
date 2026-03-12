import { useState, useEffect, useRef } from "react";

const MODULES = [
  {
    id: "intro",
    category: "INTRODUCTION",
    title: "What is The Art of Expressing?",
    icon: "✦",
    color: "#FFD700",
    content: {
      overview: `"The Art of Expressing" is the ability to take what lives inside your mind — a thought, a feeling, an idea, a vision — and transfer it into another person's mind with complete clarity, impact, and confidence.

It is the bridge between your inner world and the outer world.

Most people struggle not because they lack ideas — but because they cannot express them powerfully. A brilliant developer who cannot explain their project loses opportunities. A smart student who cannot write clearly gets lower grades. A great founder who cannot pitch their startup never gets funded.

Expression is the multiplier of intelligence.`,
      why: [
        "In education: Clear expression = better grades, better presentations, stronger essays",
        "In career: Clear expression = promotions, leadership, technical interviews",
        "In life: Clear expression = stronger relationships, confidence, influence",
        "In tech: Clear expression = better documentation, team collaboration, demos",
      ],
      pillars: [
        { name: "CLARITY", desc: "Say exactly what you mean — no confusion" },
        { name: "CONFIDENCE", desc: "Deliver your message without hesitation" },
        { name: "STRUCTURE", desc: "Organize ideas so they flow naturally" },
        { name: "SIMPLICITY", desc: "Make complex things easy to understand" },
        { name: "IMPACT", desc: "Leave a lasting impression on your audience" },
      ],
      quote: "You can have brilliant ideas, but if you can't express them, your ideas won't get you anywhere. — Lee Iacocca",
    },
  },
  {
    id: "m1",
    category: "FOUNDATION",
    title: "Module 1: Understanding Thoughts Before Expressing",
    icon: "◈",
    color: "#00E5FF",
    content: {
      overview: `Before you express anything, you must first understand what you actually want to say. Most communication failures happen not in the mouth or the pen — but in the mind. Unexplored thoughts produce unclear expression.

Think of your mind as a messy room. Before you can show it to someone, you need to organize it. That organization is called structured thinking.`,
      concepts: [
        {
          name: "The 3-Question Rule",
          desc: "Before expressing anything, ask yourself: (1) What exactly do I want to say? (2) Why does it matter to my audience? (3) What is the single most important point?"
        },
        {
          name: "Thought Clarification Technique",
          desc: "Write down your raw thought, then rewrite it in one clear sentence. Repeat until it's crisp."
        },
        {
          name: "The Iceberg Model",
          desc: "Your audience only sees 20% of what you say. Make that 20% count by clarifying the 80% underneath first."
        },
      ],
      mistakes: [
        "Speaking before thinking — causes rambling and confusion",
        "Trying to say everything at once — overwhelms the listener",
        "Assuming the audience knows what you know — causes knowledge gaps",
        "Using vague words like 'thing', 'stuff', 'kind of' — reduces clarity",
      ],
      beforeAfter: [
        {
          weak: "So like... the thing I wanted to say is that the system kind of doesn't work properly sometimes.",
          strong: "The authentication module fails intermittently under high network latency — specifically when response time exceeds 3 seconds.",
          lesson: "Replace vague words with specific, concrete language."
        },
        {
          weak: "I think maybe my project is about AI and it does some things with data.",
          strong: "My project is an AI-powered recommendation engine that analyzes user behavior patterns to suggest personalized content.",
          lesson: "Define what, how, and why — not just 'something about'."
        }
      ],
      exercises: [
        "Take any complex thought you had today. Write it in 3 sentences. Then shrink it to 1 sentence.",
        "Describe your last project idea to yourself as if explaining to a 12-year-old.",
        "Record yourself speaking for 60 seconds on any topic. Listen back — count filler words like 'um', 'like', 'you know'.",
        "The Mirror Exercise: Explain what you are studying to a mirror. Notice where you pause or go vague.",
      ],
      challenge: "TODAY'S CHALLENGE: Think of a concept from your last CS lecture. Write your messy first draft, then refine it to 2 clean sentences. Share it here and I'll give you feedback.",
    },
  },
  {
    id: "m2",
    category: "FOUNDATION",
    title: "Module 2: Clarity and Structured Thinking",
    icon: "⬡",
    color: "#76FF03",
    content: {
      overview: `Clarity is the #1 skill in communication. A clear message is like a clean window — the listener sees through your words directly to your idea without any distortion.

Structured thinking means organizing your ideas in a logical order before and during expression. It's the difference between a pile of bricks and a building.`,
      concepts: [
        {
          name: "The PREP Framework",
          desc: "Point → Reason → Example → Point (again). Great for any explanation or argument."
        },
        {
          name: "The Pyramid Principle",
          desc: "Start with the conclusion/main point first. Then give supporting details. Used by McKinsey consultants worldwide."
        },
        {
          name: "The SCQA Framework",
          desc: "Situation → Complication → Question → Answer. Perfect for presenting problems and solutions."
        },
        {
          name: "Chunking",
          desc: "Group related ideas into 3-5 clusters. Human brains process grouped information 60% faster."
        },
      ],
      prepExample: {
        point: "Python is the best language for beginners.",
        reason: "Its syntax reads like plain English, which reduces the learning curve significantly.",
        example: "For example, printing 'Hello World' in Python takes one line: print('Hello World') — compared to 5+ lines in Java.",
        restate: "That's why Python remains the top choice for teaching programming worldwide.",
      },
      mistakes: [
        "Giving examples before stating the main point — confuses listeners",
        "Jumping between unrelated ideas — loses the audience",
        "Using long paragraphs without clear topic sentences",
        "Ending without a summary or conclusion",
      ],
      exercises: [
        "Take any topic (e.g., 'what is an API') and structure it using PREP.",
        "Write 5 sentences about your favorite app using the Pyramid Principle.",
        "Explain how a search engine works in exactly 4 sentences (one per 'chunk': input, processing, ranking, output).",
        "Take a 200-word paragraph and reduce it to 5 bullet points without losing key meaning.",
      ],
      challenge: "CHALLENGE: Explain 'what is machine learning' using the PREP framework. Post your answer here for feedback.",
    },
  },
  {
    id: "m3",
    category: "FOUNDATION",
    title: "Module 3: Expanding Vocabulary for Powerful Expression",
    icon: "◉",
    color: "#FF6D00",
    content: {
      overview: `Vocabulary is your toolkit. A carpenter with only one tool — a hammer — turns every problem into a nail. A communicator with limited vocabulary struggles to express precision, emotion, and nuance.

You don't need a dictionary of 100,000 words. You need the RIGHT words for the right context.`,
      concepts: [
        {
          name: "Active vs Passive Vocabulary",
          desc: "Passive vocab = words you understand. Active vocab = words you USE. Most people have 20x more passive than active. The goal is to activate your passive vocabulary."
        },
        {
          name: "The Power Word Technique",
          desc: "Replace weak, vague words with strong, precise alternatives. 'Good' → 'Exceptional'. 'Hard' → 'Complex / Challenging / Intricate'. 'Bad' → 'Flawed / Inefficient / Problematic'."
        },
        {
          name: "Domain Vocabulary",
          desc: "For CS students: Learn technical precision vocabulary. For presentations: Learn persuasive vocabulary. For writing: Learn transitional vocabulary."
        },
      ],
      wordUpgrades: [
        { weak: "good", strong: "exceptional / robust / elegant" },
        { weak: "bad", strong: "flawed / inefficient / problematic" },
        { weak: "hard", strong: "complex / intricate / challenging" },
        { weak: "big", strong: "significant / substantial / extensive" },
        { weak: "shows", strong: "demonstrates / illustrates / reveals" },
        { weak: "uses", strong: "leverages / employs / utilizes / integrates" },
        { weak: "helps", strong: "facilitates / enables / empowers / streamlines" },
        { weak: "makes better", strong: "optimizes / enhances / improves / refines" },
        { weak: "very important", strong: "critical / essential / pivotal / fundamental" },
        { weak: "works", strong: "operates / functions / performs / executes" },
      ],
      techVocab: [
        "implements → deploys, integrates, architects",
        "runs → executes, processes, computes",
        "stores → persists, caches, indexes",
        "checks → validates, verifies, authenticates",
        "connects → interfaces, integrates, communicates",
        "changes → refactors, modifies, transforms",
      ],
      exercises: [
        "Upgrade these sentences: 'My app uses a database to store things.' → Rewrite with precise vocabulary.",
        "Write 5 words you use every day. Find 3 stronger alternatives for each.",
        "Read one technical article and highlight 10 words you want to add to your active vocabulary.",
        "Vocabulary Journal: Add 3 new words daily with definitions and example sentences.",
      ],
      challenge: "CHALLENGE: Rewrite this weak sentence: 'My project is a good app that helps people do things faster.' Make it powerful, specific, and professional.",
    },
  },
  {
    id: "m4",
    category: "FOUNDATION",
    title: "Module 4: Structuring Sentences and Paragraphs",
    icon: "▣",
    color: "#E040FB",
    content: {
      overview: `A sentence is the atom of communication. A paragraph is the molecule. If your atoms are broken, your molecules collapse — and your message disintegrates.

Strong sentence structure creates rhythm, clarity, and authority in your communication.`,
      concepts: [
        {
          name: "The Power Sentence Formula",
          desc: "[Subject] + [Strong Verb] + [Specific Object] + [Context/Result]. Example: 'The algorithm processes 10,000 requests per second using parallel computing — reducing latency by 40%.'"
        },
        {
          name: "Sentence Variety",
          desc: "Mix short punchy sentences with longer complex ones. Short sentences create IMPACT. Longer sentences build context, explain relationships, and show depth of understanding."
        },
        {
          name: "The Topic Sentence Rule",
          desc: "Every paragraph must begin with a topic sentence that states its main idea. Everything else in the paragraph supports that one sentence."
        },
        {
          name: "Transition Mastery",
          desc: "Connect ideas smoothly. Add: Furthermore / Additionally / Moreover. Contrast: However / Nevertheless / Conversely. Result: Therefore / Consequently / As a result. Example: For instance / Specifically / To illustrate."
        },
      ],
      paragraphTemplate: `[Topic Sentence: State your main point clearly]
[Support 1: First piece of evidence or explanation]
[Support 2: Second piece of evidence or example]
[Linking Sentence: Connect to the next idea or conclude]`,
      beforeAfter: [
        {
          weak: "APIs are used in software. They help programs talk to each other. Many apps use them. They are important.",
          strong: "An API (Application Programming Interface) serves as a communication contract between software components. It defines exactly how two systems exchange data — specifying the request format, authentication method, and expected response structure. Modern applications rely on APIs to integrate third-party services, from payment gateways to mapping tools, without rebuilding that functionality from scratch.",
          lesson: "Replace repetitive short sentences with well-structured, connected paragraphs."
        }
      ],
      exercises: [
        "Take 5 short choppy sentences and combine them into 2 strong, well-structured sentences.",
        "Write a paragraph about your favorite programming language. It must have: topic sentence → 2 supports → conclusion.",
        "Practice transition words: Connect these two sentences naturally: 'Python is easy to learn.' + 'It is used in AI development.'",
        "Edit this paragraph for structure: 'My project is good. It does many things. The users like it. I worked hard on it.'",
      ],
      challenge: "CHALLENGE: Write a 4-sentence paragraph explaining what Object-Oriented Programming is. Use a topic sentence, two supporting details, and a closing sentence.",
    },
  },
  {
    id: "m5",
    category: "VERBAL & WRITTEN",
    title: "Module 5: Expressing Opinions, Arguments & Viewpoints",
    icon: "◆",
    color: "#FF4081",
    content: {
      overview: `Expressing an opinion without structure sounds like complaining. Expressing it with structure sounds like thought leadership. The difference is in HOW you frame your perspective.

In academic writing, technical discussions, and professional environments, you need to express viewpoints that are backed by reasoning — not just emotion.`,
      concepts: [
        {
          name: "The OREO Method",
          desc: "Opinion → Reason → Evidence → Opinion (restated). A simple, powerful structure for any argument."
        },
        {
          name: "Hedging Language",
          desc: "Academic and professional contexts require appropriate certainty. Strong: 'This demonstrates...' Moderate: 'This suggests...' Cautious: 'This may indicate...'"
        },
        {
          name: "Acknowledging Counterarguments",
          desc: "Strong communicators address opposing views: 'While some argue that X, the evidence suggests Y because...'"
        },
        {
          name: "Citing Your Reasoning",
          desc: "Never say 'I think X is good.' Say 'I believe X is more effective because [specific reason with evidence].'"
        },
      ],
      opinionStarters: [
        "In my view, this approach is effective because...",
        "Based on the evidence, it is clear that...",
        "While some may argue that X, a closer analysis reveals...",
        "This demonstrates that... which suggests...",
        "The data indicates that... consequently...",
        "From a technical perspective, the most efficient solution is...",
      ],
      beforeAfter: [
        {
          weak: "I think React is better than Angular because it's easier and more popular.",
          strong: "From a development efficiency standpoint, React offers a more flexible component model that reduces boilerplate code. Its virtual DOM approach optimizes rendering performance, while the vast ecosystem — with over 3 million npm packages — provides solutions for virtually every use case. That said, Angular's opinionated structure makes it preferable in large enterprise teams where consistency outweighs flexibility.",
          lesson: "Support your opinion with specific technical reasoning, not just preference."
        }
      ],
      exercises: [
        "Express your opinion on: 'Should CS students learn web development before mobile development?' Use OREO.",
        "Rewrite: 'I think cloud computing is good' → make it a professional 3-sentence argument.",
        "Practice acknowledging a counterargument: Start with 'While some argue that AI will replace programmers...' and complete the paragraph.",
        "Write your opinion on: 'Is Python the best first programming language?' — minimum 5 structured sentences.",
      ],
      challenge: "CHALLENGE: Express your opinion on this statement: 'Social media does more harm than good.' Write 3 structured paragraphs with your opinion, supporting reasons, and one counterargument addressed.",
    },
  },
  {
    id: "m6",
    category: "VERBAL & WRITTEN",
    title: "Module 6: Emotional Intelligence in Communication",
    icon: "♡",
    color: "#FF80AB",
    content: {
      overview: `Technical skills get you the interview. Emotional intelligence (EQ) gets you the job — and keeps you there. EQ in communication means understanding your emotions, understanding others' emotions, and responding in ways that build trust and connection.

In technical environments, EQ separates average developers from exceptional leaders.`,
      concepts: [
        {
          name: "The 4 EQ Communication Pillars",
          desc: "1. Self-awareness: Know how you sound. 2. Self-regulation: Control impulsive reactions. 3. Empathy: Understand your audience's state. 4. Social skills: Build rapport through language."
        },
        {
          name: "Active Listening as Expression",
          desc: "How you listen shapes how you speak. Techniques: Reflect back ('So what you're saying is...'), validate ('That's a fair concern...'), clarify ('Could you elaborate on...')."
        },
        {
          name: "Non-Violent Communication (NVC)",
          desc: "Observation + Feeling + Need + Request. Example: 'When deadlines shift (observation), I feel uncertain (feeling) because I need clear timelines to plan effectively (need). Could we schedule a weekly sync? (request)'"
        },
      ],
      empathyPhrases: [
        "I understand that this might seem complex — let me break it down...",
        "That's a valid concern. Here's how we can address it...",
        "I see your point. From another angle, consider...",
        "I appreciate your feedback — here's what I'll adjust...",
        "To make sure I understood correctly, you're saying...",
      ],
      mistakes: [
        "Interrupting others mid-sentence — signals disrespect",
        "Responding defensively to criticism — shuts down conversation",
        "Using 'you always' / 'you never' language — creates defensiveness",
        "Ignoring non-verbal cues (tone, body language) in communication",
        "Centering yourself in team discussions — reduces psychological safety",
      ],
      exercises: [
        "Practice the Pause: Before responding to any message today, wait 3 seconds. Notice how your response improves.",
        "Rewrite this defensive response with EQ: 'That's not my fault — the requirements kept changing!'",
        "Write an email to a professor explaining why you'll miss a deadline — use empathy, honesty, and a solution.",
        "Role-play: A teammate says your code is inefficient. Write two responses: (1) defensive (2) emotionally intelligent.",
      ],
      challenge: "CHALLENGE: Your project demo gets criticized in front of the class. How do you respond in real-time? Write your exact response using EQ principles.",
    },
  },
  {
    id: "m7",
    category: "VERBAL & WRITTEN",
    title: "Module 7: Storytelling and Narrative Expression",
    icon: "◎",
    color: "#FFAB40",
    content: {
      overview: `Humans are hardwired for stories. We remember stories 22x better than facts alone. The best technical communicators — from Steve Jobs to Linus Torvalds — use storytelling to make their ideas unforgettable.

Storytelling isn't just for novels. It's the most powerful structure for presentations, pitches, documentation, and even code explanations.`,
      concepts: [
        {
          name: "The Hero's Journey (for Tech)",
          desc: "User (Hero) faces a Problem → Discovers your Solution (Guide) → Achieves the Outcome. This is the skeleton of every great product story."
        },
        {
          name: "The Story Spine",
          desc: "Once upon a time... Every day... Until one day... Because of that... Until finally... And ever since then... Apply this to any technical explanation."
        },
        {
          name: "The Problem-Solution-Impact Arc",
          desc: "Problem: Paint the pain vividly. Solution: Introduce your answer. Impact: Show the transformation. This is the structure of every great tech demo."
        },
        {
          name: "Concrete Details = Believable Stories",
          desc: "Weak: 'Many users had problems.' Strong: '10,000 users abandoned checkout every month because of a 7-second page load delay.'"
        },
      ],
      storyExample: {
        problem: "Every year, thousands of BSCS students in Pakistan lose hours searching through scattered course notes — leading to failed exams and lost confidence.",
        solution: "We built StudySync — an AI-powered study platform that organizes, summarizes, and quizzes students based on their own uploaded notes.",
        impact: "In our beta test with 200 students, exam scores improved by an average of 23% in just 4 weeks.",
      },
      storytellingFrameworks: [
        "STAR: Situation → Task → Action → Result (perfect for interviews)",
        "PAS: Problem → Agitate → Solution (powerful for pitches)",
        "AIDA: Attention → Interest → Desire → Action (great for presentations)",
        "SCQA: Situation → Complication → Question → Answer",
      ],
      exercises: [
        "Tell the story of why you chose Computer Science in 3 structured sentences using Story Spine.",
        "Describe your last project as a Hero's Journey: Who is the hero (user)? What is their problem? How does your software guide them?",
        "Convert this fact into a story: 'Our app reduces load time by 40%.'",
        "Write a 60-second introduction for yourself using storytelling (not just 'I am a student who studies CS').",
      ],
      challenge: "CHALLENGE: Tell the story of a technical problem you solved — even a small one from a lab assignment. Use the Problem → Solution → Impact arc. Make it vivid and specific.",
    },
  },
  {
    id: "m8",
    category: "VERBAL & WRITTEN",
    title: "Module 8: Persuasive Communication and Influence",
    icon: "◈",
    color: "#69F0AE",
    content: {
      overview: `Persuasion is not manipulation. Persuasion is the art of presenting your ideas so compellingly that others genuinely agree with you — or want to take action. Every time you defend a design decision, pitch a project, or write a proposal, you are persuading.

Aristotle identified 3 pillars of persuasion 2,400 years ago. They still work today.`,
      concepts: [
        {
          name: "Ethos (Credibility)",
          desc: "People trust credible sources. Establish your credibility: 'Having implemented this in 3 projects...' / 'Based on industry research...' / 'After testing with 50 users...'"
        },
        {
          name: "Pathos (Emotion)",
          desc: "Connect to what your audience cares about. Don't just show code — show the human problem it solves. Emotion activates decision-making in the brain."
        },
        {
          name: "Logos (Logic)",
          desc: "Back your claims with data, examples, and reasoning. 'This reduces query time from 800ms to 12ms — a 98.5% improvement.'"
        },
        {
          name: "The Rule of 3",
          desc: "Humans remember things in threes. 'Fast, reliable, and scalable.' 'Plan, build, deploy.' Structure your key messages in triplets."
        },
        {
          name: "Social Proof",
          desc: "Reference others who agree: 'Netflix uses this architecture.' 'Google recommends this pattern.' 'Used by 500+ developers in production.'"
        },
      ],
      persuasiveStructure: [
        "1. Hook — Start with a surprising stat, question, or bold statement",
        "2. Problem — Make the audience feel the pain",
        "3. Credibility — Show why you/your solution is trustworthy",
        "4. Solution — Present your idea clearly",
        "5. Evidence — Prove it works",
        "6. Call to Action — Tell them exactly what to do next",
      ],
      beforeAfter: [
        {
          weak: "I want to add a dark mode to our app because it looks cool and users might like it.",
          strong: "Adding dark mode would directly address the #1 feature request from our user survey — with 67% of respondents citing eye strain during evening use. Studies show dark mode reduces battery consumption on OLED screens by up to 30%. Implementation would take approximately 8 hours using CSS variables we already have in our design system. I propose we include it in Sprint 4.",
          lesson: "Back requests with data, address cost, and provide a clear action step."
        }
      ],
      exercises: [
        "Write a 3-sentence pitch for any app idea using Ethos, Pathos, and Logos (one sentence each).",
        "Persuade your professor to extend a deadline — write a professional, logical email.",
        "Practice Rule of 3: Describe any software feature in exactly 3 power phrases.",
        "Rewrite this weak request: 'Can we use a different database? MySQL seems slow sometimes.'",
      ],
      challenge: "CHALLENGE: Pitch a software idea you have (real or imagined) in exactly 5 sentences: Hook → Problem → Your Solution → One piece of Evidence → Call to Action.",
    },
  },
  {
    id: "m9",
    category: "VERBAL & WRITTEN",
    title: "Module 9: Public Speaking and Presentation Skills",
    icon: "▲",
    color: "#40C4FF",
    content: {
      overview: `Public speaking is the #1 fear in the world — ranking above death for many people. But here's the truth: public speaking is a skill, not a talent. It can be learned, practiced, and mastered systematically.

As a BSCS student, you will present: projects, labs, seminars, defenses, demos, and job interviews. The ones who speak clearly and confidently stand out every time.`,
      concepts: [
        {
          name: "The 7-38-55 Rule",
          desc: "Communication is: 7% words, 38% tone/voice, 55% body language. Your words matter least — how you say them matters most."
        },
        {
          name: "The Opening Hook",
          desc: "The first 30 seconds determine if your audience listens. Options: Shocking statistic / Provocative question / Short story / Bold statement / Demonstration."
        },
        {
          name: "Vocal Variety",
          desc: "Vary your: Pace (slow for emphasis, fast for energy) / Volume (louder = confidence, softer = intimacy) / Pitch (falling = statement, rising = question) / Pause (silence is powerful — own it)."
        },
        {
          name: "The Power Pause",
          desc: "Before your most important point, pause for 2-3 seconds. The silence creates anticipation and makes your next words hit harder."
        },
        {
          name: "Managing Nervousness",
          desc: "Reframe anxiety as excitement (same physiological response). Use the 4-7-8 breathing technique. Practice the 'Wonder Woman pose' for 2 minutes before speaking."
        },
      ],
      presentationStructure: [
        "Opening (10%): Hook + Context + Agenda",
        "Body (80%): 3 main points, each with explanation + example + evidence",
        "Closing (10%): Summary + Key takeaway + Call to action + Thank you",
      ],
      deliveryTips: [
        "Eye contact: Pick 3 anchor points in the room — rotate between them",
        "Hands: Keep them visible and use gestures to emphasize key words",
        "Stance: Feet shoulder-width apart — no swaying or rocking",
        "Speed: Slow down by 20% from your natural pace when presenting",
        "Filler words: Replace 'um/uh' with a breath or a pause",
        "Enthusiasm: Your energy is contagious — if you seem bored, the audience will be too",
      ],
      exercises: [
        "The 2-Minute Talk: Pick any topic. Set a timer. Speak for exactly 2 minutes with structure: intro, 2 points, conclusion.",
        "Record yourself presenting a slide for 1 minute. Watch it back — no cringing, just clinical observation.",
        "Practice opening hooks: Write 3 different openings for the same presentation topic.",
        "Tongue twisters for pronunciation clarity: Practice these daily for 2 minutes.",
        "Join Toastmasters or practice with a friend — real feedback is irreplaceable.",
      ],
      challenge: "CHALLENGE: Give a 90-second spoken presentation on 'What I learned this semester' — record it, listen back, and report: What did you do well? What needs improvement?",
    },
  },
  {
    id: "m10",
    category: "VERBAL & WRITTEN",
    title: "Module 10: Professional Communication and Formal Speaking",
    icon: "◻",
    color: "#B2FF59",
    content: {
      overview: `Professional communication follows a different register than casual conversation. It is more precise, more structured, and more formal — but not robotic. The goal is clarity with respect.

In university and career environments, your communication signals your competence before anyone evaluates your technical skills.`,
      concepts: [
        {
          name: "Register Awareness",
          desc: "Adjust your language based on context: Casual (friends) → Semi-formal (classmates, teams) → Formal (professors, supervisors, clients). Wrong register = wrong impression."
        },
        {
          name: "Professional Email Anatomy",
          desc: "Subject (specific) → Greeting → Context sentence → Main request/information → Next steps → Closing → Signature. Every element serves a purpose."
        },
        {
          name: "Meeting Communication",
          desc: "Structured contributions: 'I'd like to add to that...' / 'Building on what X said...' / 'I propose we...' / 'Can we clarify...' / 'To summarize our discussion...'"
        },
        {
          name: "Disagreeing Professionally",
          desc: "Never: 'That's wrong.' Always: 'I see this differently — from my analysis...' or 'I respectfully disagree, and here's why...'"
        },
      ],
      emailTemplate: {
        subject: "Request for Project Deadline Extension — [Course Code]",
        greeting: "Dear Professor [Name],",
        context: "I am writing regarding the upcoming submission deadline for [Project Name] scheduled for [Date].",
        body: "Due to [specific, honest reason], I am concerned about submitting work that meets the standard I aim for. I have completed [X%] of the project and would need [specific timeframe] to finalize [specific components].",
        request: "I would be grateful if you could consider extending the deadline to [proposed date]. I am happy to share my current progress if helpful.",
        closing: "Thank you for your understanding and support. I look forward to your response.",
        signature: "Best regards,\n[Your Full Name]\n[Student ID] | [Program] | [University]"
      },
      formalPhrases: [
        "I would like to bring to your attention...",
        "I am writing to formally request...",
        "Upon reflection, I believe the most appropriate approach is...",
        "I appreciate your time and consideration.",
        "Please do not hesitate to contact me should you require further information.",
        "I look forward to your feedback at your earliest convenience.",
      ],
      exercises: [
        "Rewrite this casual email professionally: 'Hey prof, can I submit late? I was busy lol'",
        "Write an email to a potential internship supervisor introducing yourself and requesting a meeting.",
        "Practice professional disagreement: Rewrite 'That's a bad idea' → professional version.",
        "Write a formal project update report (3 paragraphs) for your supervisor or professor.",
      ],
      challenge: "CHALLENGE: Write a professional email to a tech company requesting a 1-month internship. Include: who you are, why you're writing, what you offer, and a clear request. Max 200 words.",
    },
  },
  {
    id: "m11",
    category: "VERBAL & WRITTEN",
    title: "Module 11: Digital Communication",
    icon: "⬢",
    color: "#EA80FC",
    content: {
      overview: `Your digital presence is your professional identity in 2024. How you write emails, post on LinkedIn, message teammates on Slack, and document on GitHub — all of it tells a story about you.

Digital communication differs from face-to-face: no tone cues, no body language. Every word carries more weight.`,
      concepts: [
        {
          name: "Async vs Sync Communication",
          desc: "Async (email, docs): Be thorough, provide full context. Sync (Slack, meetings): Be concise, respond quickly. Knowing the difference prevents miscommunication."
        },
        {
          name: "The Digital Professionalism Standard",
          desc: "Emails: Professional tone, proper grammar. Slack/Teams: Clear, concise, use threads. LinkedIn: Showcase achievements with numbers. GitHub: Descriptive commits and README files."
        },
        {
          name: "Technical Messaging Best Practices",
          desc: "When asking for help online: (1) State the problem clearly (2) Show what you've tried (3) Provide relevant context/code (4) Specify your expected vs actual result."
        },
      ],
      linkedinTemplate: {
        headline: "[Role] | [Tech Stack] | [What you build] — e.g., 'Full-Stack Developer | React & Node.js | Building EdTech Solutions'",
        about: "Start with your mission/passion, not your degree. Then mention skills, projects, and what you're looking for.",
        postStructure: "Hook (1 line) → Story/Insight (3-4 lines) → Key lesson → Question or call to action",
      },
      slackBestPractices: [
        "Use threads — don't reply to a 3-day-old message in main chat",
        "Be specific: 'The login API returns 401 when token is valid' not 'API broken'",
        "Use @ mentions sparingly — not every message needs @channel",
        "Acknowledge messages with emoji reactions to avoid notification spam",
        "End unclear async messages with 'Let me know if you need more context'",
      ],
      exercises: [
        "Write a LinkedIn 'About Me' section for your profile as a CS student.",
        "Write a professional Slack message asking your team why a build failed.",
        "Rewrite this Reddit-style help request professionally: 'hey guys my code doesnt work pls help asap'",
        "Create a 100-word LinkedIn post about a technical concept you recently learned.",
      ],
      challenge: "CHALLENGE: Write a LinkedIn post about the most interesting thing you've learned in your CS studies this month. Use the hook → story → lesson → question structure.",
    },
  },
  {
    id: "m12",
    category: "TECHNICAL EXPRESSION",
    title: "Module 12: Technical Communication for CS",
    icon: "⬡",
    color: "#00E5FF",
    content: {
      overview: `Technical communication is the superpower that separates 10x developers from average ones. It's not about dumbing things down — it's about building the right bridge between complex concepts and any audience.

Whether explaining to a junior developer, a non-technical client, or a PhD examiner — the skill of calibrating technical depth is priceless.`,
      concepts: [
        {
          name: "The 5-Level Explanation",
          desc: "Explain any topic at 5 levels: (1) Child (2) Teenager (3) Undergraduate (4) Expert (5) Peer. Each level adds depth — but the fundamentals stay consistent."
        },
        {
          name: "The Analogy Engine",
          desc: "Find a familiar concept that mirrors the technical one. CPU = orchestra conductor. API = restaurant waiter. Database = filing cabinet. RAM = desk workspace. Cache = sticky notes."
        },
        {
          name: "The Layered Explanation Technique",
          desc: "Start with WHAT → then HOW → then WHY → then IMPLICATIONS. Never start with HOW — audiences need context before mechanism."
        },
        {
          name: "Technical Precision Without Jargon",
          desc: "The goal is not zero technical terms — it's that every technical term you use is either defined, contextualized, or replaced with an accessible alternative."
        },
      ],
      technicalExplainedSimply: [
        {
          topic: "Algorithm",
          complex: "A finite sequence of well-defined, computer-implementable instructions for solving a problem.",
          simple: "A step-by-step recipe that a computer follows to solve a problem. Like following IKEA instructions — exact steps, specific order, guaranteed result."
        },
        {
          topic: "API",
          complex: "An interface that defines interactions between software components, specifying kinds of calls made, data formats, and conventions followed.",
          simple: "A waiter in a restaurant. You (the app) don't go into the kitchen (the server) yourself — you tell the waiter (API) what you want, and they bring it back to you."
        },
        {
          topic: "Machine Learning",
          complex: "A subset of AI enabling systems to learn from data and improve performance without explicit programming.",
          simple: "Teaching a computer to recognize patterns by showing it thousands of examples, instead of writing rules for every possible case. Like how you learned to recognize cats — by seeing thousands of them, not reading a definition."
        },
        {
          topic: "Database Index",
          complex: "A data structure that improves the speed of data retrieval operations on a database table.",
          simple: "The index at the back of a textbook. Instead of reading every page to find 'recursion', you check the index and jump straight to page 247."
        },
      ],
      exercises: [
        "Explain 'recursion' to someone who has never coded — using only an analogy.",
        "Explain 'blockchain' in 3 sentences without using the words 'blockchain', 'crypto', or 'decentralized'.",
        "Describe 'HTTP request/response cycle' as a story between two characters.",
        "Explain 'time complexity O(n log n)' to a high school student who knows basic math.",
      ],
      challenge: "CHALLENGE: Explain 'how a neural network learns' in exactly 4 sentences. Target audience: a smart 15-year-old. Post your explanation here.",
    },
  },
  {
    id: "m13",
    category: "TECHNICAL EXPRESSION",
    title: "Module 13: Explaining Code and Programming Logic",
    icon: "◈",
    color: "#76FF03",
    content: {
      overview: `Converting code into words is a critical skill — for code reviews, technical interviews, documentation, teaching, and team collaboration. The best developers can narrate their code like a story, not just write it.

"If you can't explain it simply, you don't understand it well enough." — Einstein`,
      concepts: [
        {
          name: "The WHAT-HOW-WHY Framework for Code",
          desc: "WHAT: What does this code accomplish? HOW: What mechanism/logic does it use? WHY: Why was this approach chosen over alternatives?"
        },
        {
          name: "Narrating Code Step by Step",
          desc: "Walk through code as if it's a story: 'We start by initializing... then we iterate through... at each step we check... if condition A then... otherwise...' Voice the logic, not just the syntax."
        },
        {
          name: "Explaining Algorithms Verbally",
          desc: "Pattern: (1) State the goal (2) Describe the input (3) Walk through the core logic (4) Describe the output (5) Mention time/space complexity if relevant."
        },
      ],
      codeToExplanation: {
        code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
        weak: "This function uses left and right pointers and mid variable to find target in arr.",
        strong: `This function implements binary search to efficiently locate a target value in a sorted array. 

We maintain two pointers — 'left' and 'right' — that define our search space, starting at the array's boundaries. In each iteration, we calculate the midpoint and compare it to our target. If they match, we return the index immediately. If the target is larger, we eliminate the left half by moving 'left' to mid+1. If smaller, we shrink from the right. This halves our search space each iteration — giving us O(log n) time complexity, which means 1,000,000 elements needs at most 20 comparisons. If the target isn't found, we return -1.`
      },
      exercises: [
        "Take any 10-line function you've written. Explain it out loud in plain English — no code terms unless necessary.",
        "Explain what a for loop does to someone who has never programmed.",
        "Write a comment for every line of a 10-line function explaining WHY, not just WHAT.",
        "Explain the difference between a stack and a queue using a real-world analogy.",
      ],
      challenge: "CHALLENGE: I'll give you this function. Explain it in 5 sentences:\n\ndef fibonacci(n):\n  if n <= 1: return n\n  return fibonacci(n-1) + fibonacci(n-2)\n\nExplain: what it does, how it works, and what 'recursion' means here.",
    },
  },
  {
    id: "m14",
    category: "TECHNICAL EXPRESSION",
    title: "Module 14: Writing Technical Documentation",
    icon: "▣",
    color: "#FF6D00",
    content: {
      overview: `Technical documentation is the bridge between your code and the humans who use, maintain, and build upon it. Bad documentation kills great software. A project without documentation is a project that lives and dies with its creator.

As a developer, your documentation skills directly affect your project's adoption, your team's efficiency, and your professional reputation.`,
      concepts: [
        {
          name: "The Documentation Hierarchy",
          desc: "README (entry point) → Getting Started Guide → API Reference → Architecture Docs → Contribution Guide. Each layer serves a different reader."
        },
        {
          name: "Audience-First Writing",
          desc: "Before writing any documentation, ask: Who is reading this? What do they need to accomplish? What do they already know? Calibrate depth accordingly."
        },
        {
          name: "The Show Don't Just Tell Principle",
          desc: "For every concept explained in text, include a code example. For every process described, include a diagram or sequence. For every API endpoint, show a sample request and response."
        },
      ],
      readmeTemplate: `# 🚀 Project Name

> One-line tagline: What it does and who it's for.

## 📋 Overview
Brief description (2-3 sentences) of the problem solved and the solution.

## ✨ Features
- Feature 1: What it does + why it matters
- Feature 2
- Feature 3

## 🛠️ Tech Stack
- Frontend: [Framework/Library]
- Backend: [Framework]
- Database: [DB]
- Deployment: [Platform]

## ⚡ Quick Start
\`\`\`bash
git clone [repo-url]
cd [project-name]
npm install
npm run dev
\`\`\`

## 📁 Project Structure
Brief explanation of folder organization

## 🔌 API Reference
Endpoints overview with examples

## 🤝 Contributing
How to contribute

## 📄 License`,
      apiDocExample: `## POST /api/users/register

**Description:** Creates a new user account and returns an authentication token.

**Request Body:**
\`\`\`json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "name": "Ahmed Ali"
}
\`\`\`

**Success Response (201 Created):**
\`\`\`json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1...",
  "user": { "id": "usr_123", "email": "user@example.com" }
}
\`\`\`

**Error Response (400 Bad Request):**
\`\`\`json
{ "success": false, "error": "Email already registered" }
\`\`\``,
      exercises: [
        "Write a README for a simple To-Do app you've built (or imagine).",
        "Document one API endpoint from any project — include description, request, response, and errors.",
        "Write installation instructions for your development environment (your actual setup).",
        "Convert messy inline code comments into proper JSDoc/PyDoc documentation style.",
      ],
      challenge: "CHALLENGE: Write a complete README for this project: 'A Python script that scrapes news headlines from 3 websites and sends a daily email digest.' Include all sections from the template above.",
    },
  },
  {
    id: "m15",
    category: "TECHNICAL EXPRESSION",
    title: "Module 15: Presenting Software Projects",
    icon: "◆",
    color: "#FF4081",
    content: {
      overview: `Presenting a software project is part storytelling, part technical demonstration, part persuasion. Whether it's a university defense, a hackathon pitch, or an industry demo — the structure is the same.

The projects that win aren't always the most technically complex. They're the ones presented with the most clarity and confidence.`,
      presentationArc: [
        {
          step: "1. THE HOOK",
          desc: "Open with the problem — make the audience feel it. Use a stat, a story, or a shocking fact. Never open with 'Good morning, my name is...'",
          example: "Every year, 40% of Pakistani students fail their semester exams — not because they're not smart, but because they don't have access to organized, effective study tools."
        },
        {
          step: "2. THE PROBLEM",
          desc: "Define the problem clearly. Who is affected? How serious is it? What's the current (broken) solution?",
          example: "Students rely on scattered WhatsApp groups, unstructured Google Docs, and outdated textbooks. There's no centralized, intelligent system that adapts to how individual students learn."
        },
        {
          step: "3. YOUR SOLUTION",
          desc: "Introduce your project as the hero. Name it. Describe it in one sentence.",
          example: "StudySync is an AI-powered learning platform that personalizes study plans, summarizes course materials, and generates practice tests — all from a student's own notes."
        },
        {
          step: "4. ARCHITECTURE",
          desc: "Show the system design briefly. Use a clean diagram. Explain: Frontend → Backend → Database → AI/External APIs.",
          example: "React frontend → Node.js REST API → MongoDB → OpenAI API for summarization → hosted on AWS EC2."
        },
        {
          step: "5. TECHNOLOGIES",
          desc: "List your stack and justify ONE key choice. Don't just name tools — explain why.",
          example: "We chose MongoDB over MySQL because our note data is highly unstructured and schema-flexible. We chose React for its component reusability across the dashboard and quiz modules."
        },
        {
          step: "6. FEATURES DEMO",
          desc: "Show, don't tell. Live demo > screenshots > mockups. Walk through the user journey, not the code.",
          example: "Let me show you how a student uploads their lecture notes, and within 30 seconds receives a personalized summary and 10 practice questions."
        },
        {
          step: "7. IMPACT",
          desc: "Quantify results. User testing numbers. Performance metrics. Feedback quotes. Future vision.",
          example: "Beta testing with 50 students showed a 31% reduction in study time and 89% reported feeling more confident before exams."
        },
        {
          step: "8. Q&A CONFIDENCE",
          desc: "Prepare for tough questions. If you don't know: 'That's a great question — I'd need to investigate further, but my initial thinking is...'",
          example: "Why did you choose REST over GraphQL? 'Given our current scope of 4 clearly defined endpoints, REST provided simpler implementation. As we scale, GraphQL would be a strong next step.'"
        },
      ],
      exercises: [
        "Pick any project (real or imagined). Write a 2-minute pitch following all 8 steps above.",
        "Create the 'Problem' slide for a project — make the audience feel the pain in 3 sentences.",
        "Practice the 'Architecture explanation': Draw a simple system diagram and explain each component in one sentence.",
        "Write 5 questions an evaluator might ask about your project and prepare strong answers.",
      ],
      challenge: "CHALLENGE: Present your most recent project (or a project idea) using the full 8-step arc above. Write it out first, then try speaking it aloud within 3 minutes.",
    },
  },
  {
    id: "m16",
    category: "TECHNICAL EXPRESSION",
    title: "Module 16: Academic Writing for Computer Science",
    icon: "◉",
    color: "#FFAB40",
    content: {
      overview: `Academic writing for CS is different from general writing. It must be precise, evidence-based, structured, and objective. Your project reports, research papers, and proposals are judged on both technical depth and writing quality.

Understanding academic structure is like understanding a design pattern — once you know it, every paper you write becomes cleaner and faster.`,
      sections: [
        {
          name: "Abstract",
          purpose: "A standalone summary of the entire paper — problem, method, results. Written LAST but placed FIRST.",
          formula: "Background (1 sentence) + Problem (1 sentence) + Approach (1-2 sentences) + Key Results (1 sentence) + Conclusion (1 sentence)",
          example: "Sentiment analysis of social media data presents challenges due to informal language and contextual ambiguity. This paper proposes a BERT-based classification model fine-tuned on a custom Twitter dataset of 50,000 labeled posts. Our approach achieves 91.3% accuracy — a 7% improvement over baseline LSTM models. Results suggest transformer-based architectures significantly outperform sequential models for short-text sentiment classification."
        },
        {
          name: "Introduction",
          purpose: "Context → Problem → Gap → Proposed Solution → Paper Structure",
          formula: "Start broad (the domain), narrow down (the specific problem), identify the gap, state your contribution, outline the paper sections.",
          example: "Social media platforms generate 500M+ posts daily, creating unprecedented opportunities for large-scale sentiment analysis. However, existing models struggle with slang, sarcasm, and code-switching — particularly in multilingual communities..."
        },
        {
          name: "Methodology",
          purpose: "Describe WHAT you did and HOW — with enough detail that someone could replicate it.",
          formula: "Dataset → Preprocessing → Model Architecture → Training Setup → Evaluation Metrics",
          example: "Data was collected via the Twitter API using relevant hashtags over a 30-day period, yielding 52,000 posts. After removing duplicates and applying tokenization, 47,832 samples remained for model training..."
        },
        {
          name: "Results",
          purpose: "Present findings objectively — data, charts, tables. Do not interpret here.",
          formula: "State the metric → Give the number → Reference the figure/table → Briefly contextualize",
          example: "Table 2 shows classification accuracy across three model architectures. The fine-tuned BERT model achieved 91.3% accuracy on the test set, compared to 84.1% for BiLSTM and 79.6% for Naive Bayes."
        },
        {
          name: "Discussion",
          purpose: "Interpret results, explain why they happened, address limitations, compare with related work.",
          formula: "What do results mean? → Why did this happen? → Limitations → Comparison to similar work",
          example: "The BERT model's superior performance can be attributed to its pre-training on contextually rich text, enabling better understanding of informal language structures..."
        },
        {
          name: "Conclusion",
          purpose: "Summarize contributions and suggest future work.",
          formula: "Restate the problem → Summarize approach → Key achievements → Future directions",
          example: "This paper presented a transformer-based approach to multilingual sentiment analysis that achieves state-of-the-art performance on informal text. Future work will explore cross-lingual transfer learning to extend coverage to low-resource languages."
        },
      ],
      exercises: [
        "Write an abstract for your last semester project using the 5-sentence formula.",
        "Rewrite this weak introduction sentence: 'In this paper, we will talk about databases and why they are important.'",
        "Write a methodology section for a project that compares two sorting algorithms.",
        "Practice academic hedging: Convert 'Our system is perfect' into properly hedged academic language.",
      ],
      challenge: "CHALLENGE: Write the Abstract and Introduction sections for this project: 'A web application that detects plagiarism in student code submissions using AST comparison.' Max 300 words total.",
    },
  },
  {
    id: "m17",
    category: "TECHNICAL EXPRESSION",
    title: "Module 17: Explaining Data and Analytics",
    icon: "▣",
    color: "#69F0AE",
    content: {
      overview: `Data without a story is just numbers. The skill of data storytelling — turning insights into compelling narratives — is one of the most valued skills in the industry.

A data scientist who can explain their findings clearly is worth 10x more than one who can't communicate their work outside a Jupyter notebook.`,
      concepts: [
        {
          name: "The Data Story Framework",
          desc: "Context → Conflict → Resolution. What was the situation? What pattern/anomaly did you find? What does it mean and what should be done?"
        },
        {
          name: "Describing Charts and Graphs",
          desc: "Pattern: Type of visualization → Overall trend → Key data points → What it means. Never just say 'the chart shows numbers going up.'"
        },
        {
          name: "EDA Narrative Structure",
          desc: "Dataset overview → Data quality issues found → Key distributions → Correlations discovered → Anomalies → Initial hypotheses → Next steps."
        },
        {
          name: "Speaking About Statistical Results",
          desc: "Avoid raw jargon. 'p < 0.05' → 'statistically significant'. 'r = 0.87' → 'strong positive correlation'. Always state what the number means in context."
        },
      ],
      chartDescriptionTemplate: [
        "This [chart type] displays [what variables] across [time/categories].",
        "The overall trend shows [pattern — increase/decrease/stability].",
        "Notably, [specific data point] stands out because [reason].",
        "This suggests that [interpretation/insight].",
        "Based on this, I recommend [action or further investigation].",
      ],
      beforeAfter: [
        {
          weak: "The graph shows that sales went up in Q3 and then went down.",
          strong: "The line chart reveals a 34% spike in sales during Q3, peaking in August — coinciding with our back-to-school marketing campaign launch. The subsequent Q4 decline of 18% likely reflects seasonal demand normalization rather than product issues, as customer retention rates remained stable at 82%.",
          lesson: "Name the chart type, quantify the trend, connect it to a cause, and separate correlation from conclusion."
        }
      ],
      edaPresentation: {
        opener: "We analyzed a dataset of 15,000 e-commerce transactions spanning 12 months.",
        quality: "Initial inspection revealed 3.2% missing values in the 'shipping_address' column and 47 duplicate order IDs — both were cleaned before analysis.",
        distribution: "Order values follow a right-skewed distribution with a median of $47 and a mean of $89, indicating a small number of high-value orders pull the average up.",
        correlation: "A strong positive correlation (r = 0.79) was found between customer tenure and average order value — suggesting loyalty programs could significantly increase revenue.",
        anomaly: "We identified a cluster of 230 transactions with unusually high return rates on March 15th — requiring investigation into a potential batch shipment issue.",
        insight: "The key actionable insight: customers who make their second purchase within 7 days have 3x higher lifetime value. I recommend optimizing post-purchase email timing to target this window."
      },
      exercises: [
        "Describe this data finding out loud: '72% of app crashes occur on devices with < 2GB RAM, and 91% of those users are on Android 9 or below.'",
        "Write a 3-sentence interpretation of a histogram showing age distribution of your app's users.",
        "Convert this stat into a compelling insight: 'Average session duration dropped from 8.2 to 4.1 minutes last month.'",
        "Practice the full EDA narrative: pick any dataset you've worked with and explain it in 5 structured sentences.",
      ],
      challenge: "CHALLENGE: You found that 60% of students who fail exams don't attend the first 3 lectures. Explain this finding in 4 sentences — to a professor, not a data scientist. Make it clear, insightful, and actionable.",
    },
  },
  {
    id: "m18",
    category: "TECHNICAL EXPRESSION",
    title: "Module 18: Communication for Developers and Founders",
    icon: "◎",
    color: "#40C4FF",
    content: {
      overview: `Developers who only code but can't communicate are capped at senior engineer. Developers who combine technical skills with communication become architects, tech leads, and founders. 

Whether you're in a daily standup, pitching to investors, writing specs, or onboarding teammates — communication is the infrastructure your career runs on.`,
      concepts: [
        {
          name: "Technical Meetings (Standup, Sprint Reviews)",
          desc: "Standup format: What I completed → What I'm working on → Any blockers. Keep it under 2 minutes. No storytelling — just status."
        },
        {
          name: "Writing Technical Specifications",
          desc: "Problem Statement → Proposed Solution → Technical Approach → Acceptance Criteria → Edge Cases → Timeline. This replaces confusion with alignment."
        },
        {
          name: "The 30-Second Startup Pitch",
          desc: "For [target users] who [have this problem], [Product Name] is a [category] that [key benefit]. Unlike [alternative], we [key differentiator]."
        },
        {
          name: "Collaborating Across Roles",
          desc: "With designers: Speak in UX terms (user journey, interaction states, accessibility). With managers: Speak in impact terms (timeline, risk, delivery). With clients: Speak in outcome terms (what they get, not how you build it)."
        },
      ],
      standupExample: {
        bad: "Yeah so yesterday I was working on the authentication thing and I kind of fixed some stuff and today I'll probably continue with that and maybe look at the bug if I have time.",
        good: "Yesterday: Resolved the JWT token expiry issue in the auth middleware. Today: Implementing refresh token rotation. Blocker: Waiting for the API contract update from the backend team before I can finalize the integration."
      },
      startupPitches: [
        {
          type: "Elevator (30 sec)",
          example: "StudySync is an AI study assistant for university students that automatically converts lecture notes into personalized quizzes and summaries. Students using it have reported 30% better exam scores in 4 weeks."
        },
        {
          type: "Investor (2 min)",
          example: "Pakistan has 1.2 million university students, and 40% fail at least one course per semester. The problem is fragmented, passive studying — reading notes alone, with no feedback. StudySync solves this with an AI-powered platform that turns any notes into active learning. Our users study 40% less time with 31% better outcomes. We're 200 beta users in, growing 25% week-over-week, and raising a $50K seed round to scale marketing and hire one ML engineer."
        },
      ],
      exercises: [
        "Write your standup update for today using the 3-part format.",
        "Pitch your current project (or a project idea) in exactly 30 seconds. Write it out, then say it aloud.",
        "Write a technical spec for: 'Add a dark mode toggle to our web app.'",
        "Explain your project to: (1) a developer teammate, (2) a business client, (3) your mom. Three different explanations of the same project.",
      ],
      challenge: "CHALLENGE: Imagine you're at a university tech fair and a recruiter from a top tech company asks: 'Tell me about the coolest project you've built.' Write your 60-second response. Be specific, confident, and compelling.",
    },
  },
  {
    id: "m19",
    category: "TECHNICAL EXPRESSION",
    title: "Module 19: Teaching and Content Creation",
    icon: "◆",
    color: "#E040FB",
    content: `The best way to truly understand something is to teach it. Creating educational content forces you to organize your knowledge, find the right analogies, anticipate confusion, and communicate with precision.

Whether you're making YouTube tutorials, running workshops, creating course content, or writing technical blog posts — the skill of teaching is the ultimate test of your understanding AND your communication.

THE FEYNMAN TECHNIQUE:
Step 1: Choose a concept. Write it at the top of a page.
Step 2: Explain it in simple language — as if teaching a child.
Step 3: Review your explanation. Where did you struggle? That's where your understanding is weak.
Step 4: Simplify further. Refine your analogies. Remove jargon.

TUTORIAL STRUCTURE:
• Hook: Why should the viewer learn this? What will they be able to do after?
• Context: Brief background — what this builds on
• Core Content: Maximum 3 key points, each with: explanation → demo → summary
• Common Mistakes: What beginners get wrong (this is gold for viewers)
• Practice Exercise: Give them something to do immediately
• Recap: Summarize in 3 sentences
• Next Steps: Where to go from here

GREAT COMMUNICATORS TECHNIQUES:
• Richard Feynman: Used analogies and everyday language. Never hid behind jargon.
• 3Blue1Brown: Visual storytelling. Shows intuition before formulas.
• Andrej Karpathy: Starts simple, builds complexity incrementally.
• Code with Harry: Relatable language, local context, high enthusiasm.

CONTENT CREATION FOR CS TOPICS:
Blog post: Hook → Problem → Your Approach → Code Example → Explanation → Takeaway
Video tutorial: Show the finished thing first → Then build it step by step
Twitter/X threads: One key insight per tweet, build through the thread
LinkedIn post: Story format — what you built, what you learned, what advice you'd give

DAILY CHALLENGE: Explain ONE concept you learned today as if you're recording a 60-second YouTube short. Write the script. Include: hook, main point, one analogy, and one call to action.`,
  },
];

const DAILY_CHALLENGES = [
  "Explain what an API is to your younger sibling who has never coded. Write 3 sentences.",
  "Describe your dream project using the Problem → Solution → Impact arc.",
  "Express your opinion on: Should AI ethics be a mandatory CS subject? Use PREP framework.",
  "Tell a short story about a coding challenge you overcame (or imagine one).",
  "Write a professional email requesting feedback on your project from a professor.",
  "Explain the concept of recursion using only an analogy — no technical terms.",
  "Give a 2-minute impromptu speech: 'The most important skill for a CS graduate today is...'",
  "Upgrade these weak sentences: 'My app is good. It does things fast. Users like it.'",
  "Explain the difference between machine learning and regular programming to a non-technical friend.",
  "Write a LinkedIn post about something you learned this week — use the hook → story → lesson structure.",
];

export default function ArtOfExpressing() {
  const [activeModule, setActiveModule] = useState("intro");
  const [activeTab, setActiveTab] = useState("overview");
  const [practiceText, setPracticeText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dailyChallenge] = useState(() => DAILY_CHALLENGES[Math.floor(Math.random() * DAILY_CHALLENGES.length)]);
  const [showChallenge, setShowChallenge] = useState(false);
  const [progress, setProgress] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const feedbackRef = useRef(null);

  const currentModule = MODULES.find((m) => m.id === activeModule);

  const categories = [...new Set(MODULES.map((m) => m.category))];

  const getFeedback = async () => {
    if (!practiceText.trim()) return;
    setIsLoading(true);
    setFeedback("");
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `You are an expert communication coach and technical writing mentor for BSCS (Computer Science) students. 

The student is practicing from the module: "${currentModule?.title}"

Their practice response is:
"${practiceText}"

Please provide:
1. ✅ STRENGTHS (what they did well - be specific)
2. 🔧 IMPROVEMENTS (2-3 specific suggestions with examples)
3. ✨ UPGRADED VERSION (rewrite their text showing the improved version)
4. 📊 SCORE: Rate their expression out of 10 with one sentence explanation

Be encouraging, specific, and practical. Focus on: clarity, structure, vocabulary, and impact. Keep your feedback concise and actionable.`
            }
          ]
        })
      });
      const data = await response.json();
      const text = data.content?.map(i => i.text || "").join("\n") || "Could not get feedback. Please try again.";
      setFeedback(text);
      setTimeout(() => feedbackRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } catch (e) {
      setFeedback("⚠️ Error connecting to feedback system. Please check your connection and try again.");
    }
    setIsLoading(false);
  };

  const markComplete = (id) => {
    setProgress(p => ({ ...p, [id]: !p[id] }));
  };

  const completedCount = Object.values(progress).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / MODULES.length) * 100);

  const renderContent = (mod) => {
    if (!mod) return null;
    const c = mod.content;

    if (mod.id === "m19") {
      return (
        <div className="content-prose">
          {typeof c === 'string' && c.split('\n\n').map((block, i) => {
            if (block.startsWith('•')) {
              return (
                <ul key={i} className="bullet-list">
                  {block.split('\n').map((line, j) => line.startsWith('•') && (
                    <li key={j}>{line.replace('• ', '')}</li>
                  ))}
                </ul>
              );
            }
            if (block.toUpperCase() === block && block.length < 60) {
              return <h3 key={i} className="section-heading">{block}</h3>;
            }
            return <p key={i} className="prose-paragraph">{block}</p>;
          })}
        </div>
      );
    }

    const tabs = [];
    if (c.overview) tabs.push("overview");
    if (c.concepts) tabs.push("concepts");
    if (c.beforeAfter) tabs.push("examples");
    if (c.exercises) tabs.push("exercises");
    if (c.codeToExplanation) tabs.push("code");
    if (c.sections) tabs.push("sections");
    if (c.presentationArc) tabs.push("framework");
    if (c.readmeTemplate || c.apiDocExample) tabs.push("templates");
    tabs.push("practice");

    const tab = activeTab;

    return (
      <div>
        <div className="tab-bar">
          {tabs.map(t => (
            <button key={t} className={`tab-btn ${tab === t ? 'tab-active' : ''}`} onClick={() => setActiveTab(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div className="overview-box">
              <p style={{ lineHeight: 1.8, color: "#e2e8f0", whiteSpace: "pre-line" }}>{c.overview}</p>
            </div>
            {c.pillars && (
              <div>
                <h3 className="sub-heading">The 5 Pillars</h3>
                <div className="pillars-grid">
                  {c.pillars.map((p, i) => (
                    <div key={i} className="pillar-card" style={{ borderColor: mod.color }}>
                      <div className="pillar-name" style={{ color: mod.color }}>{p.name}</div>
                      <div className="pillar-desc">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {c.why && (
              <div>
                <h3 className="sub-heading">Why This Matters</h3>
                <ul className="why-list">
                  {c.why.map((w, i) => <li key={i} style={{ color: "#a0aec0", marginBottom: 8 }}>→ {w}</li>)}
                </ul>
              </div>
            )}
            {c.quote && <div className="quote-box" style={{ borderColor: mod.color }}><span style={{ color: mod.color }}>"</span>{c.quote}<span style={{ color: mod.color }}>"</span></div>}
            {c.mistakes && (
              <div>
                <h3 className="sub-heading">Common Mistakes</h3>
                <ul className="mistake-list">
                  {c.mistakes.map((m, i) => <li key={i}><span className="mistake-x">✗</span> {m}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}

        {tab === "concepts" && c.concepts && (
          <div>
            {c.concepts.map((concept, i) => (
              <div key={i} className="concept-card" style={{ borderLeft: `3px solid ${mod.color}` }}>
                <div className="concept-name" style={{ color: mod.color }}>{concept.name}</div>
                <div className="concept-desc">{concept.desc}</div>
              </div>
            ))}
            {c.wordUpgrades && (
              <div>
                <h3 className="sub-heading">Word Upgrade Library</h3>
                <div className="word-grid">
                  {c.wordUpgrades.map((w, i) => (
                    <div key={i} className="word-card">
                      <span className="word-weak">"{w.weak}"</span>
                      <span className="word-arrow">→</span>
                      <span className="word-strong" style={{ color: mod.color }}>{w.strong}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {c.opinionStarters && (
              <div>
                <h3 className="sub-heading">Power Phrases for Opinions</h3>
                <ul className="phrase-list">
                  {c.opinionStarters.map((s, i) => <li key={i} className="phrase-item">{s}</li>)}
                </ul>
              </div>
            )}
            {c.persuasiveStructure && (
              <div>
                <h3 className="sub-heading">Persuasion Structure</h3>
                <ol className="num-list">
                  {c.persuasiveStructure.map((s, i) => <li key={i} className="num-item">{s}</li>)}
                </ol>
              </div>
            )}
            {c.formalPhrases && (
              <div>
                <h3 className="sub-heading">Formal Professional Phrases</h3>
                <ul className="phrase-list">
                  {c.formalPhrases.map((p, i) => <li key={i} className="phrase-item">{p}</li>)}
                </ul>
              </div>
            )}
            {c.empathyPhrases && (
              <div>
                <h3 className="sub-heading">Empathy Language Toolkit</h3>
                <ul className="phrase-list">
                  {c.empathyPhrases.map((p, i) => <li key={i} className="phrase-item">{p}</li>)}
                </ul>
              </div>
            )}
            {c.technicalExplainedSimply && (
              <div>
                <h3 className="sub-heading">Complex → Simple Translations</h3>
                {c.technicalExplainedSimply.map((item, i) => (
                  <div key={i} className="translation-card">
                    <div className="translation-topic" style={{ color: mod.color }}>{item.topic}</div>
                    <div className="translation-complex"><span className="label-x">COMPLEX:</span> {item.complex}</div>
                    <div className="translation-simple"><span className="label-check">SIMPLE:</span> {item.simple}</div>
                  </div>
                ))}
              </div>
            )}
            {c.storytellingFrameworks && (
              <div>
                <h3 className="sub-heading">Storytelling Frameworks</h3>
                <ul className="phrase-list">
                  {c.storytellingFrameworks.map((f, i) => <li key={i} className="phrase-item">{f}</li>)}
                </ul>
              </div>
            )}
            {c.deliveryTips && (
              <div>
                <h3 className="sub-heading">Delivery Tips</h3>
                <ul className="delivery-list">
                  {c.deliveryTips.map((t, i) => <li key={i} className="delivery-item"><span style={{ color: mod.color }}>▸</span> {t}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}

        {tab === "examples" && c.beforeAfter && (
          <div>
            <h3 className="sub-heading">Before & After Examples</h3>
            {c.beforeAfter.map((ba, i) => (
              <div key={i} className="ba-card">
                <div className="ba-weak">
                  <div className="ba-label-weak">✗ WEAK EXPRESSION</div>
                  <p className="ba-text">{ba.weak}</p>
                </div>
                <div className="ba-arrow">↓ IMPROVED ↓</div>
                <div className="ba-strong">
                  <div className="ba-label-strong" style={{ color: mod.color }}>✓ STRONG EXPRESSION</div>
                  <p className="ba-text">{ba.strong}</p>
                </div>
                <div className="ba-lesson">💡 {ba.lesson}</div>
              </div>
            ))}
            {c.standupExample && (
              <div className="ba-card">
                <div className="ba-weak">
                  <div className="ba-label-weak">✗ BAD STANDUP</div>
                  <p className="ba-text">{c.standupExample.bad}</p>
                </div>
                <div className="ba-arrow">↓ IMPROVED ↓</div>
                <div className="ba-strong">
                  <div className="ba-label-strong" style={{ color: mod.color }}>✓ GOOD STANDUP</div>
                  <p className="ba-text">{c.standupExample.good}</p>
                </div>
              </div>
            )}
            {c.edaPresentation && (
              <div>
                <h3 className="sub-heading">EDA Presentation Example</h3>
                <div className="eda-card">
                  {Object.entries(c.edaPresentation).map(([key, val]) => (
                    <div key={key} className="eda-row">
                      <span className="eda-key" style={{ color: mod.color }}>{key.toUpperCase()}:</span>
                      <span className="eda-val">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {c.chartDescriptionTemplate && (
              <div>
                <h3 className="sub-heading">Chart Description Template</h3>
                <ol className="num-list">
                  {c.chartDescriptionTemplate.map((t, i) => <li key={i} className="num-item">{t}</li>)}
                </ol>
              </div>
            )}
          </div>
        )}

        {tab === "exercises" && c.exercises && (
          <div>
            <h3 className="sub-heading">Practice Exercises</h3>
            <div className="exercise-list">
              {c.exercises.map((ex, i) => (
                <div key={i} className="exercise-item">
                  <span className="exercise-num" style={{ background: mod.color }}>{i + 1}</span>
                  <span className="exercise-text">{ex}</span>
                </div>
              ))}
            </div>
            {c.challenge && (
              <div className="challenge-box" style={{ borderColor: mod.color }}>
                <div className="challenge-label" style={{ color: mod.color }}>⚡ MODULE CHALLENGE</div>
                <p className="challenge-text">{c.challenge}</p>
              </div>
            )}
            {c.presentationStructure && (
              <div>
                <h3 className="sub-heading">Presentation Structure</h3>
                <ol className="num-list">
                  {c.presentationStructure.map((s, i) => <li key={i} className="num-item">{s}</li>)}
                </ol>
              </div>
            )}
          </div>
        )}

        {tab === "code" && c.codeToExplanation && (
          <div>
            <h3 className="sub-heading">Code → Explanation</h3>
            <div className="code-block">
              <div className="code-label">CODE</div>
              <pre className="code-pre">{c.codeToExplanation.code}</pre>
            </div>
            <div className="ba-card" style={{ marginTop: 16 }}>
              <div className="ba-weak">
                <div className="ba-label-weak">✗ WEAK EXPLANATION</div>
                <p className="ba-text">{c.codeToExplanation.weak}</p>
              </div>
              <div className="ba-arrow">↓ IMPROVED ↓</div>
              <div className="ba-strong">
                <div className="ba-label-strong" style={{ color: mod.color }}>✓ STRONG EXPLANATION</div>
                <p className="ba-text" style={{ whiteSpace: "pre-line" }}>{c.codeToExplanation.strong}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "sections" && c.sections && (
          <div>
            {c.sections.map((sec, i) => (
              <div key={i} className="section-card" style={{ borderLeft: `3px solid ${mod.color}` }}>
                <div className="section-name" style={{ color: mod.color }}>{sec.name}</div>
                <div className="section-purpose"><strong>Purpose:</strong> {sec.purpose}</div>
                <div className="section-formula"><strong>Formula:</strong> {sec.formula}</div>
                <div className="section-example"><strong>Example:</strong> <em>{sec.example}</em></div>
              </div>
            ))}
          </div>
        )}

        {tab === "framework" && c.presentationArc && (
          <div>
            {c.presentationArc.map((step, i) => (
              <div key={i} className="arc-card">
                <div className="arc-step" style={{ color: mod.color }}>{step.step}</div>
                <div className="arc-desc">{step.desc}</div>
                <div className="arc-example"><span className="arc-ex-label">Example:</span> {step.example}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "templates" && (
          <div>
            {c.readmeTemplate && (
              <div>
                <h3 className="sub-heading">GitHub README Template</h3>
                <div className="code-block">
                  <pre className="code-pre" style={{ fontSize: 11 }}>{c.readmeTemplate}</pre>
                </div>
              </div>
            )}
            {c.apiDocExample && (
              <div>
                <h3 className="sub-heading">API Documentation Example</h3>
                <div className="code-block">
                  <pre className="code-pre" style={{ fontSize: 11 }}>{c.apiDocExample}</pre>
                </div>
              </div>
            )}
            {c.emailTemplate && (
              <div>
                <h3 className="sub-heading">Professional Email Template</h3>
                <div className="email-template">
                  {Object.entries(c.emailTemplate).map(([k, v]) => (
                    <div key={k} className="email-row">
                      <span className="email-key" style={{ color: mod.color }}>{k.toUpperCase()}:</span>
                      <span className="email-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {c.linkedinTemplate && (
              <div>
                <h3 className="sub-heading">LinkedIn Profile Templates</h3>
                {Object.entries(c.linkedinTemplate).map(([k, v]) => (
                  <div key={k} className="concept-card" style={{ borderLeft: `3px solid ${mod.color}` }}>
                    <div className="concept-name" style={{ color: mod.color }}>{k.charAt(0).toUpperCase() + k.slice(1)}</div>
                    <div className="concept-desc">{v}</div>
                  </div>
                ))}
              </div>
            )}
            {c.startupPitches && (
              <div>
                <h3 className="sub-heading">Startup Pitch Templates</h3>
                {c.startupPitches.map((p, i) => (
                  <div key={i} className="concept-card" style={{ borderLeft: `3px solid ${mod.color}` }}>
                    <div className="concept-name" style={{ color: mod.color }}>{p.type}</div>
                    <div className="concept-desc">{p.example}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "practice" && (
          <div>
            <div className="practice-box">
              <h3 className="sub-heading">✏️ Practice Zone — AI Feedback Enabled</h3>
              <p className="practice-hint">Write your practice response below. Your personal AI mentor will analyze it and give detailed feedback.</p>
              {c.challenge && (
                <div className="practice-challenge" style={{ borderColor: mod.color }}>
                  <span style={{ color: mod.color }}>⚡ SUGGESTED CHALLENGE:</span><br />
                  <span style={{ color: "#cbd5e0", marginTop: 4, display: "block" }}>{c.challenge}</span>
                </div>
              )}
              <textarea
                className="practice-textarea"
                placeholder="Write your practice response here... Be specific, use structured thinking, and express yourself clearly."
                value={practiceText}
                onChange={(e) => setPracticeText(e.target.value)}
                rows={8}
              />
              <div className="practice-actions">
                <span className="char-count">{practiceText.length} characters</span>
                <div>
                  <button className="btn-clear" onClick={() => { setPracticeText(""); setFeedback(""); }}>Clear</button>
                  <button
                    className="btn-feedback"
                    style={{ background: mod.color, color: "#0f1117" }}
                    onClick={getFeedback}
                    disabled={isLoading || !practiceText.trim()}
                  >
                    {isLoading ? "⏳ Analyzing..." : "⚡ Get AI Feedback"}
                  </button>
                </div>
              </div>
            </div>

            {feedback && (
              <div ref={feedbackRef} className="feedback-box" style={{ borderColor: mod.color }}>
                <div className="feedback-header" style={{ color: mod.color }}>🎯 YOUR MENTOR'S FEEDBACK</div>
                <div className="feedback-content" style={{ whiteSpace: "pre-wrap" }}>{feedback}</div>
                <button className="mark-btn" style={{ borderColor: mod.color, color: mod.color }} onClick={() => markComplete(mod.id)}>
                  {progress[mod.id] ? "✓ Marked Complete" : "Mark Module Complete"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&family=Mulish:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .app {
          font-family: 'Mulish', sans-serif;
          background: #0a0e1a;
          color: #e2e8f0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* HEADER */
        .header {
          background: linear-gradient(135deg, #0f1629 0%, #1a1f35 50%, #0f1629 100%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 20px 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-icon { font-size: 28px; }
        .header-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 22px;
          background: linear-gradient(135deg, #FFD700, #FF8C00, #FF4081);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }
        .header-sub {
          font-size: 12px;
          color: #64748b;
          font-family: 'JetBrains Mono', monospace;
          margin-top: 2px;
        }
        .header-right { margin-left: auto; display: flex; align-items: center; gap: 16px; }
        .progress-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          color: #FFD700;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 6px 12px;
          border-radius: 20px;
        }
        .progress-bar-wrap {
          width: 100px;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #FFD700, #FF8C00);
          border-radius: 2px;
          transition: width 0.5s ease;
        }
        .menu-btn {
          background: none; border: none; cursor: pointer;
          color: #94a3b8; font-size: 20px; padding: 4px;
        }

        /* LAYOUT */
        .layout {
          display: flex;
          flex: 1;
          overflow: hidden;
          height: calc(100vh - 76px);
        }

        /* SIDEBAR */
        .sidebar {
          width: 280px;
          background: #0d1120;
          border-right: 1px solid rgba(255,255,255,0.05);
          overflow-y: auto;
          flex-shrink: 0;
          transition: width 0.3s ease;
        }
        .sidebar.closed { width: 0; overflow: hidden; }

        .challenge-banner {
          margin: 12px;
          background: linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,140,0,0.08));
          border: 1px solid rgba(255,215,0,0.2);
          border-radius: 10px;
          padding: 12px;
          cursor: pointer;
        }
        .challenge-banner-title { font-size: 10px; font-family: 'JetBrains Mono', monospace; color: #FFD700; margin-bottom: 4px; letter-spacing: 1px; }
        .challenge-banner-text { font-size: 12px; color: #94a3b8; line-height: 1.5; }

        .cat-label {
          font-size: 9px;
          font-family: 'JetBrains Mono', monospace;
          color: #4a5568;
          letter-spacing: 2px;
          padding: 12px 16px 6px;
          text-transform: uppercase;
        }

        .module-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          border-left: 3px solid transparent;
          transition: all 0.2s;
          position: relative;
        }
        .module-btn:hover { background: rgba(255,255,255,0.03); }
        .module-btn.active { background: rgba(255,255,255,0.05); }
        .module-icon { font-size: 14px; width: 20px; flex-shrink: 0; }
        .module-title-sm { font-size: 12px; font-weight: 500; color: #a0aec0; line-height: 1.3; flex: 1; }
        .module-btn.active .module-title-sm { color: #e2e8f0; }
        .module-check { font-size: 10px; color: #48bb78; flex-shrink: 0; }

        /* MAIN */
        .main {
          flex: 1;
          overflow-y: auto;
          padding: 28px;
        }

        .module-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .module-icon-lg {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .module-cat {
          font-size: 10px;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 2px;
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .module-title-lg {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 24px;
          color: #f1f5f9;
          line-height: 1.2;
        }

        /* TABS */
        .tab-bar {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .tab-btn {
          padding: 7px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent;
          color: #64748b;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-family: 'Mulish', sans-serif;
          font-weight: 600;
          transition: all 0.2s;
          text-transform: capitalize;
        }
        .tab-btn:hover { color: #94a3b8; border-color: rgba(255,255,255,0.15); }
        .tab-active { background: rgba(255,255,255,0.08) !important; color: #e2e8f0 !important; border-color: rgba(255,255,255,0.2) !important; }

        /* CONTENT ELEMENTS */
        .sub-heading {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #e2e8f0;
          margin: 24px 0 12px;
          letter-spacing: -0.3px;
        }
        .overview-box {
          background: rgba(255,255,255,0.03);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .pillars-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; margin-bottom: 20px; }
        .pillar-card { background: rgba(255,255,255,0.03); border: 1px solid; border-radius: 10px; padding: 14px; }
        .pillar-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px; margin-bottom: 6px; letter-spacing: 1px; }
        .pillar-desc { font-size: 12px; color: #94a3b8; line-height: 1.5; }
        .quote-box { border-left: 4px solid; padding: 16px 20px; margin: 20px 0; background: rgba(255,255,255,0.02); border-radius: 0 10px 10px 0; font-style: italic; color: #94a3b8; font-size: 14px; line-height: 1.7; }
        .why-list { list-style: none; padding: 0; }
        .mistake-list { list-style: none; padding: 0; }
        .mistake-item { margin-bottom: 8px; }
        .mistake-x { color: #fc8181; margin-right: 8px; }
        .mistake-list li { color: #94a3b8; font-size: 13px; margin-bottom: 8px; padding-left: 4px; }
        .mistake-list li::before { content: "✗ "; color: #fc8181; }

        .concept-card { background: rgba(255,255,255,0.02); border-left: 3px solid; border-radius: 0 10px 10px 0; padding: 14px 16px; margin-bottom: 12px; }
        .concept-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; margin-bottom: 6px; }
        .concept-desc { font-size: 13px; color: #a0aec0; line-height: 1.6; }

        .word-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 8px; }
        .word-card { background: rgba(255,255,255,0.02); border-radius: 8px; padding: 10px 14px; display: flex; align-items: center; gap: 10px; font-size: 13px; }
        .word-weak { color: #fc8181; font-style: italic; }
        .word-arrow { color: #4a5568; }
        .word-strong { font-weight: 600; }

        .phrase-list { list-style: none; padding: 0; }
        .phrase-item { background: rgba(255,255,255,0.02); border-radius: 8px; padding: 10px 14px; margin-bottom: 6px; font-size: 13px; color: #a0aec0; font-style: italic; border-left: 2px solid rgba(255,255,255,0.1); }

        .num-list { padding-left: 0; list-style: none; }
        .num-item { display: flex; gap: 12px; margin-bottom: 10px; font-size: 13px; color: #a0aec0; line-height: 1.5; }
        .num-item::before { counter-increment: none; content: counter(list-item) "."; color: #64748b; font-family: 'JetBrains Mono', monospace; font-size: 11px; padding-top: 2px; min-width: 18px; }

        .translation-card { background: rgba(255,255,255,0.02); border-radius: 10px; padding: 16px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.06); }
        .translation-topic { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; margin-bottom: 10px; }
        .translation-complex { font-size: 12px; color: #fc8181; margin-bottom: 8px; line-height: 1.5; }
        .translation-simple { font-size: 13px; color: #68d391; line-height: 1.5; }
        .label-x { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #fc8181; margin-right: 6px; }
        .label-check { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #68d391; margin-right: 6px; }

        .delivery-list { list-style: none; padding: 0; }
        .delivery-item { display: flex; gap: 10px; margin-bottom: 8px; font-size: 13px; color: #a0aec0; }

        .ba-card { background: rgba(255,255,255,0.02); border-radius: 12px; padding: 20px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.06); }
        .ba-weak { background: rgba(252,129,129,0.06); border-radius: 8px; padding: 14px; margin-bottom: 12px; }
        .ba-strong { background: rgba(104,211,145,0.06); border-radius: 8px; padding: 14px; }
        .ba-label-weak { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #fc8181; margin-bottom: 8px; letter-spacing: 1px; }
        .ba-label-strong { font-family: 'JetBrains Mono', monospace; font-size: 10px; margin-bottom: 8px; letter-spacing: 1px; }
        .ba-text { font-size: 13px; color: #cbd5e0; line-height: 1.7; }
        .ba-arrow { text-align: center; color: #4a5568; font-size: 12px; margin: 8px 0; letter-spacing: 4px; }
        .ba-lesson { margin-top: 12px; font-size: 12px; color: #76e4f7; background: rgba(118,228,247,0.06); padding: 8px 12px; border-radius: 6px; }

        .eda-card { background: rgba(255,255,255,0.02); border-radius: 10px; padding: 16px; }
        .eda-row { display: flex; gap: 12px; margin-bottom: 10px; font-size: 13px; line-height: 1.6; }
        .eda-key { font-family: 'JetBrains Mono', monospace; font-size: 10px; min-width: 90px; padding-top: 2px; }
        .eda-val { color: #a0aec0; }

        .exercise-list { display: flex; flex-direction: column; gap: 10px; }
        .exercise-item { display: flex; gap: 14px; align-items: flex-start; background: rgba(255,255,255,0.02); border-radius: 10px; padding: 14px; }
        .exercise-num { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #0a0e1a; flex-shrink: 0; }
        .exercise-text { font-size: 13px; color: #a0aec0; line-height: 1.6; }

        .challenge-box { border: 1px dashed; border-radius: 12px; padding: 20px; margin-top: 24px; background: rgba(255,255,255,0.01); }
        .challenge-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; letter-spacing: 2px; margin-bottom: 10px; }
        .challenge-text { font-size: 14px; color: #cbd5e0; line-height: 1.7; }

        .code-block { background: #0d1117; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
        .code-label { background: rgba(255,255,255,0.04); padding: 8px 14px; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #4a5568; letter-spacing: 2px; }
        .code-pre { padding: 16px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #a0aec0; overflow-x: auto; white-space: pre; line-height: 1.6; }

        .section-card { background: rgba(255,255,255,0.02); border-radius: 0 10px 10px 0; padding: 16px; margin-bottom: 16px; }
        .section-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 16px; margin-bottom: 10px; }
        .section-purpose, .section-formula, .section-example { font-size: 13px; color: #a0aec0; line-height: 1.6; margin-bottom: 8px; }
        .section-example { font-style: italic; background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; }

        .arc-card { background: rgba(255,255,255,0.02); border-radius: 10px; padding: 16px; margin-bottom: 14px; border: 1px solid rgba(255,255,255,0.04); }
        .arc-step { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 1px; margin-bottom: 8px; }
        .arc-desc { font-size: 13px; color: #a0aec0; line-height: 1.6; margin-bottom: 10px; }
        .arc-example { font-size: 12px; color: #cbd5e0; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; line-height: 1.6; }
        .arc-ex-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #64748b; margin-right: 6px; }

        .email-template { background: rgba(255,255,255,0.02); border-radius: 10px; padding: 16px; }
        .email-row { display: flex; gap: 12px; margin-bottom: 12px; font-size: 13px; line-height: 1.6; flex-wrap: wrap; }
        .email-key { font-family: 'JetBrains Mono', monospace; font-size: 10px; min-width: 100px; padding-top: 2px; }
        .email-val { color: #a0aec0; flex: 1; white-space: pre-line; }

        /* PRACTICE */
        .practice-box { background: rgba(255,255,255,0.02); border-radius: 14px; padding: 24px; border: 1px solid rgba(255,255,255,0.06); }
        .practice-hint { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .practice-challenge { border: 1px dashed; border-radius: 10px; padding: 14px; margin-bottom: 16px; font-size: 13px; line-height: 1.6; background: rgba(255,255,255,0.01); }
        .practice-textarea {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #e2e8f0;
          font-family: 'Mulish', sans-serif;
          font-size: 14px;
          padding: 14px;
          resize: vertical;
          line-height: 1.7;
          outline: none;
          transition: border-color 0.2s;
        }
        .practice-textarea:focus { border-color: rgba(255,255,255,0.2); }
        .practice-textarea::placeholder { color: #4a5568; }
        .practice-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; }
        .char-count { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #4a5568; }
        .btn-clear { background: none; border: 1px solid rgba(255,255,255,0.1); color: #64748b; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 13px; margin-right: 8px; }
        .btn-feedback { padding: 9px 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 700; font-family: 'Syne', sans-serif; letter-spacing: 0.5px; transition: opacity 0.2s; }
        .btn-feedback:disabled { opacity: 0.5; cursor: not-allowed; }

        .feedback-box { margin-top: 20px; background: rgba(255,255,255,0.02); border: 1px solid; border-radius: 14px; padding: 24px; }
        .feedback-header { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 1px; margin-bottom: 16px; }
        .feedback-content { font-size: 14px; color: #cbd5e0; line-height: 1.8; }
        .mark-btn { margin-top: 16px; background: none; border: 1px solid; border-radius: 8px; padding: 8px 16px; cursor: pointer; font-size: 12px; font-family: 'JetBrains Mono', monospace; }

        .content-prose .section-heading { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 16px; color: #e2e8f0; margin: 24px 0 12px; letter-spacing: 1px; }
        .content-prose .prose-paragraph { font-size: 14px; color: #a0aec0; line-height: 1.8; margin-bottom: 16px; }
        .content-prose .bullet-list { list-style: none; padding: 0; margin-bottom: 16px; }
        .content-prose .bullet-list li { font-size: 13px; color: #a0aec0; padding: 6px 0 6px 16px; position: relative; }
        .content-prose .bullet-list li::before { content: "▸"; position: absolute; left: 0; color: #FFD700; }

        /* DAILY CHALLENGE MODAL */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal { background: #0d1120; border: 1px solid rgba(255,215,0,0.3); border-radius: 16px; padding: 28px; max-width: 500px; width: 100%; }
        .modal-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; color: #FFD700; margin-bottom: 16px; }
        .modal-challenge { font-size: 15px; color: #e2e8f0; line-height: 1.7; margin-bottom: 20px; background: rgba(255,215,0,0.05); padding: 16px; border-radius: 10px; }
        .modal-close { background: #FFD700; color: #0a0e1a; border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; font-weight: 700; font-size: 14px; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
      `}</style>

      <div className="header">
        <button className="menu-btn" onClick={() => setSidebarOpen(o => !o)}>☰</button>
        <div className="header-icon">✦</div>
        <div>
          <div className="header-title">The Art of Expressing</div>
          <div className="header-sub">Complete Communication Mastery Program · BSCS Edition</div>
        </div>
        <div className="header-right">
          <div className="progress-badge">{completedCount}/{MODULES.length} complete</div>
          <div className="progress-bar-wrap">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
      </div>

      <div className="layout">
        <div className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
          <div className="challenge-banner" onClick={() => setShowChallenge(true)}>
            <div className="challenge-banner-title">⚡ DAILY CHALLENGE</div>
            <div className="challenge-banner-text">{dailyChallenge.slice(0, 70)}...</div>
          </div>

          {categories.map(cat => (
            <div key={cat}>
              <div className="cat-label">{cat}</div>
              {MODULES.filter(m => m.category === cat).map(mod => (
                <button
                  key={mod.id}
                  className={`module-btn ${activeModule === mod.id ? 'active' : ''}`}
                  style={activeModule === mod.id ? { borderLeftColor: mod.color } : {}}
                  onClick={() => { setActiveModule(mod.id); setActiveTab("overview"); setPracticeText(""); setFeedback(""); }}
                >
                  <span className="module-icon" style={{ color: mod.color }}>{mod.icon}</span>
                  <span className="module-title-sm">{mod.title.replace(/Module \d+: /, '')}</span>
                  {progress[mod.id] && <span className="module-check">✓</span>}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="main">
          {currentModule && (
            <>
              <div className="module-header">
                <div className="module-icon-lg" style={{ background: `${currentModule.color}18`, border: `1px solid ${currentModule.color}30` }}>
                  <span style={{ color: currentModule.color }}>{currentModule.icon}</span>
                </div>
                <div>
                  <div className="module-cat" style={{ color: currentModule.color }}>{currentModule.category}</div>
                  <div className="module-title-lg">{currentModule.title}</div>
                </div>
              </div>
              {renderContent(currentModule)}
            </>
          )}
        </div>
      </div>

      {showChallenge && (
        <div className="modal-overlay" onClick={() => setShowChallenge(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-title">⚡ Today's Daily Challenge</div>
            <div className="modal-challenge">{dailyChallenge}</div>
            <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16 }}>Go to any module's Practice tab to write your response and get AI feedback.</p>
            <button className="modal-close" onClick={() => setShowChallenge(false)}>Got it — Let's go!</button>
          </div>
        </div>
      )}
    </div>
  );
} 
