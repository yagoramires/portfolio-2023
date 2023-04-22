import AnimatedText from './components/AnimatedText';

export const metadata = {
  title: 'Home | Portfolio Wladmir',
};

export default function Home() {
  return (
    <section className='mt-32 flex flex-col justify-center items-center'>
      <h2 className='text-5xl font-bold text-center'>
        Hi! My name is Wlad,
        <br />
        and I am a
      </h2>
      <AnimatedText />
      <h2 className='text-5xl font-bold text-center'>Based in Sydney</h2>
    </section>
  );
}
