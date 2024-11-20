import './globals.css'

export default function Home() {

  const bg = {
    backgroundImage: "url(./images/hero_bg.png)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <>
      <section className="comming_soon" style={bg}>
        <img src='./images/logo.png' alt='Co-Remotely - Co-Working Space in Central Park Lahore' />
        <h1>Work, Collaborate<span>, Thrive - All in One Place.</span></h1>
      <button>Comming Soon</button>
      </section>
    </>
  );
}
