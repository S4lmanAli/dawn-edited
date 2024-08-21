
const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Lahore, Pakistan',
    scale: 'C'
  },
  clock: {
    format: 'a d b Y, H:M p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: ['crypto-rate'],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'MAIN',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'Usual',
        links: [
          {
            url: 'https://horizon.ucp.edu.pk/web/login',
            name: 'UCP Portal',
            icon: 'book',
          },
          {
            name: 'Deviantart',
            url: 'https://www.deviantart.com/',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            name: 'Insta',
            url: 'https://www.instagram.com/',
            icon: 'brand-instagram',
            icon_color: '#8b647b'
          },
          {
            name: 'Facebook',
            url: 'https://facebook.com/',
            icon: 'brand-facebook',
            icon_color: '#5c6ea3'
          },
          {
            name: 'Youtube',
            url: 'https://youtu.be/',
            icon: 'brand-youtube',
            icon_color: '#996767'
          }
        ]
      },
      {
        name: 'Browsing',
        links: [
          {
            name: '/pakpassion/',
            url: 'https://ppforum.pakpassion.net/forums/cricket.9/'
          },
          {
            name: '/planetcricket/',
            url: 'https://www.planetcricket.org/forums/'
          },
          {
            name: '/sofifa/',
            url: 'https://sofifa.com/?offset=20'
          },
          {
            name: '/getty/',
            url: 'https://www.gettyimages.com/editorial-images'
          }
          ,
          {
            name: '/beatsnoop/',
            url: 'https://gettyimages-downloader.beatsnoop.com/'
          }
          ,
          {
            name: '/google images/',
            url: 'https://www.google.com/imghp?hl=en&authuser=0&ogbl'
          }
        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: 'Github',
            url: 'https://github.com/',
            icon: 'brand-github'
          },
          {
            name: 'Twitter',
            url: 'https://www.twitter.com/',
            icon: 'brand-x'
          },
          {
            name: 'Onedrive',
            url: 'https://onlinepgc-my.sharepoint.com/my',
            icon: 'brand-onedrive',
            icon_color :'#004eaa'
          },
          {
            name: 'GPT',
            url: 'https://chatgpt.com/',
            icon: 'brand-hipchat'
          },
          {
            name: 'Gemini',
            url: 'https://gemini.google.com/app',
            icon: 'minimize',
            icon_color: '#6680d5'
          }
        ]
      }
      ]
    },
    {
      name: 'C++ (1)',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'Playlists',
          links: [
            ,
            {
              name: 'Code with Harry',
              url: 'https://www.youtube.com/playlist?list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9',
            },
            {
              name: 'Apna College',
              url: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ',
            },
            {
              name: 'C++ by Saurabh Shukla',
              url: 'https://www.youtube.com/playlist?list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF',
            },
            {
              name: 'C++ - Geeky Shows',
              url: 'https://www.youtube.com/playlist?list=PLbGui_ZYuhijXuOfBSdQgK296Y7wUDWLn',
            },
            
            {
              name: 'Learn Coding',
              url: 'https://www.youtube.com/playlist?list=PLqleLpAMfxGDq9Ehl8FUstcRrCRQPQO7n',
            },
            {
              name: 'Simple Snippets',
              url: 'https://www.youtube.com/playlist?list=PLIY8eNdw5tW_o8gsLqNBu8gmScCAqKm2Q',
            },
            {
              name: 'Professor Hank Stalica',
              url: 'https://www.youtube.com/@ProfessorHankStalica/playlists',
            },
            {
              name: 'CodeVault (for C)',
              url: 'https://www.youtube.com/@CodeVault/playlists',
            },
            {
              name: 'Sir Mohsin - Computing Education Hub',
              url: 'https://www.youtube.com/@ComputingEducationHub',
            },
            {
              name: 'Malik Shahzaib',
              url: 'https://www.youtube.com/playlist?list=PLAZj-jE2acZIxax2FlhHy2at9jlBbZBWH',
            }, 
            {
              name: 'Safdar Dogar',
              url: 'https://www.youtube.com/playlist?list=PLduM7bkxBdOekXfkEqIBAivzG99V2LrAS',
            },
            {
              name: 'Blitzerine',
              url: 'https://www.youtube.com/@blitzerinecodes/playlists',
            },
            {
              name: 'Rubina Yousaf',
              url: 'https://www.youtube.com/playlist?list=PL3x9HpmGuy5wPtKeVdTOf-_S2C4TYoSBV',
            }
          ]
        },
        {
          name: 'Paid Courses - Udemy',
          links: [
            {
              name: 'Abdul Bari - All Courses',
              url: 'https://mega.nz/folder/QkwEGAII#0CDNw-mvSDJYcB603RYhBg',
              icon: 'notebook',
              icon_color: '#977a3a'
            },
            {
              name: '[Code with Mosh] [All Courses]',
              url: 'https://mega.nz/folder/IbMwybSD#4SaTERFqzI9IO-i4qcIAWA',
              icon: 'pencil-discount',
              icon_color: '#a627d8'
            }
          ]
        }
      ]
      
    },
    {
      name: 'C++ (2)',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
          {
          name: 'Compilers',
          links: [
            {
              name: 'Programiz',
              url: 'https://www.programiz.com/cpp-programming/online-compiler/',
              icon : 'code',
              icon_color: '#800df2'
            },
            {
              name: 'One Compiler',
              url: 'https://onecompiler.com/cpp',
              icon : 'code',
              icon_color: '##4d0ff0'
            },
            {
              name: 'Online GDB',
              url: 'https://www.onlinegdb.com/online_c++_compiler',
              icon : 'code',
              icon_color: '#f6a409'  
            },
            {
              name: 'Scaler',
              url: 'https://www.scaler.com/topics/cpp/online-cpp-compiler/',
              icon : 'code',
              icon_color: '#570c98' 
            },
            {
              name: 'W3 Schools',
              url: 'https://www.w3schools.com/cpp/trycpp.asp?filename=demo_compiler',
              icon : 'code',
              icon_color: '#2f2ad5'
            }
            
          ]
        },
        {
          name: 'Problem Solving Practice',
          links: [
            {
              name: 'Hackerrank',
              url: 'https://www.hackerrank.com/',
              icon : 'code',
              icon_color: '#800df2'
            },
           
            {
              name: 'Leet Code',
              url: 'https://leetcode.com/',
              icon : 'code',
              icon_color: '#f6a409'  
            }
          ]
        },
        {
          name: 'Useful Repositories',
          links: [
            {
              name: 'Iqra Abdi - C++ (notes + programs) - Mosh\'s Student',
              url: 'https://github.com/IQRA-ABDI/Cpp-Programming/tree/main',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    },
    {
      name: 'C++ (3)',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'Resources',
          links: [
            {
              name: 'GFG',
              url: 'https://www.geeksforgeeks.org/c-plus-plus/',
              icon: 'code',
              icon_color:'#3dc2a3'
            },
            {
              name: 'cppreference.com',
              url: 'https://en.cppreference.com/w/cpp',
              icon : 'brand-cpp',
              icon_color: '#800df2'
            },
            {
              name: 'cplusplus - library references',
              url: 'https://cplusplus.com/reference/',
              icon : 'brand-cpp',
              icon_color: '#2f2ad5'
            }
            ,
            {
              name: 'cplusplus - tutorials',
              url: 'https://cplusplus.com/doc/tutorial/',
              icon : 'brand-cpp',
              icon_color: '#2f2ad5'
            }
          ]
        },
        {
          name: 'Sites',
          links: [
            {
              name: 'w3schools',
              url: 'https://www.w3schools.com/cpp/',
              icon : 'school',
              icon_color: '#9f51ae'
            },
            {
              name: 'programiz',
              url: 'https://www.programiz.com/cpp-programming',
              icon: 'code-circle-2',
              icon_color: '#800df2'
            },
            {
              name: 'Microsoft - VS - C++',
              url: 'https://learn.microsoft.com/en-us/cpp/cpp/cpp-language-reference?view=msvc-170',
              icon : 'brand-visual-studio',
              icon_color: '#9f51ae'
            }
            ,
            {
              name: 'Javatpoint',
              url: 'https://www.javatpoint.com/cpp-tutorial',
              icon: 'regex-off',
              icon_color: '#d32c30'
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'code with harry',
              url: 'https://www.codewithharry.com/tutorial/cplusplus/',
              icon: 'notebook',
              icon_color: '#977a3a'
            },
            {
              name: 'Weber University C++ Notes',
              url: 'https://icarus.cs.weber.edu/~dab/cs1410/textbook/chapters.html',
              icon: 'pencil-discount',
              icon_color: '#a627d8'
            }
          ]
        }
      ]
    }
  ]
 } );
