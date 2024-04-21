import './App.css'
import LargeRow from './components/personal-row-large/Large-row'
import NormalRow from './components/personal-row-normal/NormalRow'
import CodeInfluences from './components/inspirations/CodeInfluences';

// *NormalRow IMAGES* -----------------------------------

const imageInfo = [
  {
    heading: 'How I Got Involved In Web Development',
    src: './assets/personal-row-images/normal-row-images/rsz_oscar-nilsson-13605-unsplash.webp',
    alt: 'Various tech devices such as a Laptop, keyboard, a computer mouse, headphones, and a book about learning to code',
    text: `My affinity with coding began when I discovered the problem-solving aspect involved in the 
    process of transforming a blank canvas into a working functioning website.
    I find the process of taking an idea, planning the best course of action, and then building a 
    website fit to purpose is very satisfying and allows me to tap into and develop my creative side.
    Around the start of 2019, I had a strong feeling that I wanted to take a new direction, I wanted something 
    that would keep me able to learn new things and expand my knowledge consistently for the foreseeable future, and through self-studies both online and reading programming books and the constantly evolving nature of the tech industry, I had found what I was looking for!
    
    With my strong foundation in HTML, CSS, and Javascript, I'm confident I can bring both my own and your visions to life on the web.                      
    I feel programming, in general, helps to develop logical awareness and planning, to me, this is not just a career, this is also a life skill!
    `
    
  },
  {
    heading: 'Music',
    src: './assets/personal-row-images/normal-row-images/rsz_guitar_pic_unsplash.webp',
    alt: 'A bright daylit room with white walls containing an electric guitar, Fender Guitar amp, and 2 unopened packs of tennis balls',
    text: `Being a lover of Music and a bit of an audiophile, I am always seeking out music from 
    various genres in the highest quality audio available. 
    I was introduced to playing the guitar around 2013, which I then continued learning 
    throughout the following years. Although I don't get to play as much as I used to 
    I still own both electric and Acoustic guitars.
    `
  },
  {
    heading: 'Gaming',
    src: './assets/personal-row-images/normal-row-images/dreamcast 20controller 20small.webp',
    alt: 'A Sega Dreamcast control pad with VMU memory card attached',
    text: `I'm really into old skool gaming, I have a huge love for games 
    from around the late 90's early 2000's era. I have a modern games console, an Xbox One S 
    which I acquired for a nice price in the 2018 black friday sales. What is my favourite 
    console of all time?? Hmmm, I'd say the Nintendo 64 with the Sega Dreamcast being a very close 2nd.🙂`
  },
  {
    heading: 'Films',
    src: './assets/personal-row-images/normal-row-images/small-hollywood.webp',
    alt: 'The famous Hollywood Sign found in Mount Lee, Los Angeles',
    text: `Yep, I have a soft side for a good movie my fave genres being Sci Fi, 
    Action, Psychological thrillers, Comedy, Anime, Adventure & Horror.`
  }  
];

// ---------------------------------

// ----------------------------------------- Coding Influences Data ----------------------

const influencesInfo = [
  {
    heading: 'Udemy',
    src: './assets/inspiration-images/udemy-thumb.webp',
    alt: 'Logo of the online learning platform Udemy',
    text: `I owe the majority of my knowledge at this point to teachers 
    on the Udemy platform, most notably Colt Steele and Jonas Schmedtman`
  },
  {
    heading: 'Pluralsight',
    src: './assets/inspiration-images/pluralsight-thumb.webp',
    alt: 'Logo of the Microsoft owned online learning platform, Pluralsight',
    text: `Helped me a lot during my early stages of learning code, I really loved their 
    style of teaching CSS and found it easiest learning about the cascade and other CSS priciples.`
  },
  {
    heading: 'SyntaxFM Podcast',
    src: './assets/inspiration-images/syntax-thumb.webp',
    alt: 'Logo of the online SyntaxFM Podcast hosted by Wes Bos and Scott Tolinski',
    text: `I mainly listened to this great podcast normally on my commute to work and 
    sometimes while coding. A great way to stay update with current news, and best 
    coding practices, definitely some of the "tastiest treats" available in podcast world.`
  },
  {
    heading: 'BaseCS Podcast',
    src: './assets/inspiration-images/base-cs-thumb.webp',
    alt: 'The famous Hollywood Sign found in Mount Lee, Los Angeles',
    text: `Excellent content, quirky and funny, I listen to an episode of this lighthearted computer 
    science podcast most mornings on the way to work.`
  },
  {
    heading: 'Code Newbie Podcast',
    src: './assets/inspiration-images/code-newbie-thumb.webp',
    alt: 'The Code Newbie Podcast Logo',
    text: `I've found code newbie to be very inspirational, and at 
    times when I've felt a bit down or frustrated about my coding progress, 
    many of the stories featured on this podcast have pulled me back on track and got me focused again.`
  },
  {
    heading: 'JS Party',
    src: './assets/inspiration-images/js-party-400.webp',
    alt: 'Logo of the JS Party Podcast',
    text: `JS Party is much the same as the Syntax podcast, super informative, though with more guests 
    on the show, you get more varied opinions on a given topical.`
  }
]

// -------------------------------------------------------------------------------------

function App() {
  return (
    <>
      
      <LargeRow />
      <section className='normalRow-components-wrapper'>
      {imageInfo.map((image, index) => (
          <NormalRow key={index} heading={image.heading} src={image.src} alt={image.alt} text={image.text} />
      ))}
      </section>
      <div className='influence-wrapper'>
        <h2>My Coding Influences and Inspirations</h2>
      {influencesInfo.map((influence, index) => (
        <CodeInfluences key={index} heading={influence.heading} src={influence.src} alt={influence.alt} text={influence.text} />
      ))}
      </div>
    </>
  );
}

export default App
