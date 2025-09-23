export const collections = [
  {
    slug: 'cloop',
    title: 'Cloop',
    subtitle: 'Documenting the Steam launch journey.',
    description:
      'Deep-dives, prototypes, and playtest learnings from building Cloop. Follow along as the game evolves in public.',
    cta: {
      label: 'Wishlist on Steam',
      href: '#steam',
    },
    secondary: {
      label: 'View articles',
      href: '/collections/cloop',
    },
    highlights: [
      {
        title: 'Core loop telemetry',
        detail: 'What we instrument to balance levels and progression pacing.',
      },
      {
        title: 'Narrative experiments',
        detail: 'Dialogue frameworks and world notes directly from the writing room.',
      },
      {
        title: 'Art sprints',
        detail: 'Mood boards, style tests, and asset pipelines that make the palette pop.',
      },
    ],
    body: {
      overview:
        "Cloop is our current flagship — a kinetic puzzle platformer shipping on Steam. The collection logs playable milestones, production retros, and art direction journals so you can follow the launch in real time.",
      spotlight: {
        title: 'Steam Wishlist',
        description:
          'Be the first to know when new builds drop and help the launch land with impact.',
        primary: {
          label: 'Wishlist Cloop',
          href: 'https://store.steampowered.com/',
        },
        secondary: {
          label: 'View roadmap',
          href: '/collections/cloop#roadmap',
        },
      },
      sections: [
        {
          title: 'Latest drops',
          description: 'Recent devlogs and behind-the-scenes writeups straight from the build pipeline.',
          items: [
            {
              title: 'Playtest 06 learnings',
              detail: 'How we tuned world 2 puzzles after running telemetry-driven tests.',
            },
            {
              title: 'Shader lab',
              detail: 'Step-by-step on the light-reactive materials defining the game feel.',
            },
            {
              title: 'Narrative beats',
              detail: 'Story experiments and character arcs we are validating with the community.',
            },
          ],
        },
        {
          title: 'Resources',
          description: 'The assets, templates, and checklists we are using to keep shipping momentum.',
          items: [
            {
              title: 'Production board template',
              detail: 'Miro + Linear setup for weekly scope balancing.',
            },
            {
              title: 'Art feedback rubric',
              detail: 'Shared language the team uses when iterating on new zones.',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'cache',
    title: 'Cache',
    subtitle: 'Tools, systems, and reusable workflows.',
    description:
      'A remixable stash of utilities, process riffs, and automation snippets for building better, faster.',
    secondary: {
      label: 'Open cache',
      href: '/collections/cache',
    },
    highlights: [
      {
        title: 'Editors and pipelines',
        detail: 'VS Code layouts, build scripts, and CLI helpers the team actually ships with.',
      },
      {
        title: 'Design frameworks',
        detail: 'Templates, canvases, and checklists that keep production moving.',
      },
      {
        title: 'Team rituals',
        detail: 'Cadences and meeting formats that keep cross-discipline collaboration tight.',
      },
    ],
    body: {
      overview:
        'Cache posts are for systems thinking — the meta layer that keeps teams sharp. Expect decision frameworks, automation recipes, and tooling walkthroughs.',
      sections: [
        {
          title: 'Featured guides',
          description: 'Bookmark-ready references you can plug into your own ops.',
          items: [
            {
              title: 'Game dev operating cadence',
              detail: 'A week-by-week rhythm for hybrid teams shipping live updates.',
            },
            {
              title: 'Notion + Linear handoff',
              detail: 'Bridge discovery notes into tracked scope without losing context.',
            },
          ],
        },
        {
          title: 'Automation recipes',
          description: 'CLI tasks, Git hooks, and build macros we rely on every sprint.',
          items: [
            {
              title: 'Asset compression pipeline',
              detail: 'Automated image/audio optimization triggered on commit.',
            },
            {
              title: 'Playtest feedback sorter',
              detail: 'Using tags + AI summaries to triage qualitative reports fast.',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'dev-tools',
    title: 'Dev Tools',
    subtitle: 'Instrumenting the craft.',
    description:
      'Breakdowns on the scripts, dashboards, and debugging tricks that keep production humming.',
    secondary: {
      label: 'See dev tools',
      href: '/collections/dev-tools',
    },
    highlights: [
      {
        title: 'Telemetry dashboards',
        detail: 'How we chart builds, crash stats, and player behavior without adding friction.',
      },
      {
        title: 'Debugging utilities',
        detail: 'Scripts and overlays we rely on when systems misbehave.',
      },
      {
        title: 'Editor extensions',
        detail: 'Custom inspector tools and asset processors purpose-built for our pipelines.',
      },
    ],
    body: {
      overview:
        'Dev Tools dives into the instrumentation behind the scenes — observability, supported pipelines, and scripting that shortens iteration loops.',
      sections: [
        {
          title: 'Observability',
          description: 'Track the state of your project with low-friction dashboards.',
          items: [
            {
              title: 'Crash triage board',
              detail: 'The Grafana panels we monitor daily and how alerts are wired.',
            },
            {
              title: 'Real-time player heatmaps',
              detail: 'Jetpack a lightweight telemetry stack into any prototype.',
            },
          ],
        },
        {
          title: 'Editor upgrades',
          description: 'Small tools that make designers and programmers faster.',
          items: [
            {
              title: 'Unity context menu pack',
              detail: 'Utilities for spawning prefabs and debugging state in-editor.',
            },
            {
              title: 'Custom shader inspector',
              detail: 'Expose the parameters artists adjust most often.',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Experiments at the frontier.',
    description:
      'From generative art explorers to automated tuning, these notes document our ML experiments for games.',
    secondary: {
      label: 'Explore ML notes',
      href: '/collections/machine-learning',
    },
    highlights: [
      {
        title: 'Content generation',
        detail: 'Content pipelines that blend procedural tools with trained models.',
      },
      {
        title: 'Playtesting insights',
        detail: 'Using models to spot friction before it becomes production debt.',
      },
      {
        title: 'Ethics in systems',
        detail: 'Guardrails we set when shipping ML-assisted features to players.',
      },
    ],
    body: {
      overview:
        'We treat ML as an exploratory lab — augmenting designers with models without replacing intent. Expect honest notes: what worked, what failed, and the questions we are still asking.',
      sections: [
        {
          title: 'Experiment logs',
          description: 'Hands-on trials that blend ML with day-to-day production.',
          items: [
            {
              title: 'Generative level sketches',
              detail: 'Training small diffusion models on existing blockouts.',
            },
            {
              title: 'NPC voice iteration',
              detail: 'Rapid prototyping characters with controllable TTS.',
            },
          ],
        },
        {
          title: 'Ethics & guardrails',
          description: 'The questions we audit every time a model enters the pipeline.',
          items: [
            {
              title: 'Model bias checklist',
              detail: 'A pre-launch review to make sure systems stay respectful.',
            },
            {
              title: 'Player consent flows',
              detail: 'Draft UX patterns for transparent ML-driven features.',
            },
          ],
        },
      ],
    },
  },
];
