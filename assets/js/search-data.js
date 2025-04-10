// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-notice",
          title: "Notice",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notice/";
          },
        },{id: "nav-seminar",
          title: "Seminar",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/seminar/index.html";
          },
        },{id: "nav-photos",
          title: "Photos",
          description: "Sharing photos from various events and seminars.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "post-simclr",
      
        title: "SimCLR",
      
      description: "A Simple Framework for Contrastive Learning of Visual Representations",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/SimCLR/";
        
      },
    },{id: "post-clip",
      
        title: "CLIP",
      
      description: "Learning Transferable Visual Models From Natural Language Supervision",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/CLIP/";
        
      },
    },{id: "post-saycan",
      
        title: "SayCan",
      
      description: "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/SayCan/";
        
      },
    },{id: "post-r3m",
      
        title: "R3M",
      
      description: "R3M: A Universal Visual Representation for Robot Manipulation",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/R3M/";
        
      },
    },{id: "post-perceptual-loss",
      
        title: "Perceptual Loss",
      
      description: "Perceptual Losses for Real-Time Style Transfer and Super-Resolution",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/PerceptualLoss/";
        
      },
    },{id: "post-stylealigned",
      
        title: "StyleAligned",
      
      description: "Style Aligned Image Generation via Shared Attention",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/StyleAligned/";
        
      },
    },{id: "post-facewarehouse",
      
        title: "FaceWarehouse",
      
      description: "FaceWarehouse: a 3D Facial Expression Database for Visual Computing",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/FaceWarehouse/";
        
      },
    },{id: "post-flame-model",
      
        title: "FLAME Model",
      
      description: "Learning a model of facial shape and expression from 4D scans",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/FLAME_Model/";
        
      },
    },{id: "post-lrm",
      
        title: "LRM",
      
      description: "LRM Large Reconstruction Model for Single Image to 3D",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/LRM/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-innovai-a-new-beginning",
          title: 'InnovAI: A New Beginning!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-innovai-homepage-is-now-live",
          title: 'InnovAI Homepage is Now Live! 🚀',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-25-1-innovai-schedule",
          title: '25-1 InnovAI Schedule',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-kickoff-meeting",
          title: 'Kickoff Meeting',
          description: "2025/02/17 (Mon) 14:00 D403",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-march-week-1-seminar",
          title: 'March : Week 1 Seminar',
          description: "2025/03/07 (Fri) 15:00 D404",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-march-week-2-seminar",
          title: 'March : Week 2 Seminar',
          description: "2025/03/13 (Thu) 19:00 D407",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-ai-speech",
          title: 'AI Speech',
          description: "2025/03/20 (Thu) 19:00 대강당",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-march-week-4-seminar",
          title: 'March : Week 4 Seminar',
          description: "2025/03/27 (Thu) 19:00 D407",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-april-week-1-seminar",
          title: 'April : Week 1 Seminar',
          description: "2025/04/03 (Thu) 19:00 D407",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-april-week-2-seminar",
          title: 'April : Week 2 Seminar',
          description: "2025/04/10 (Thu) 19:00 D407",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
