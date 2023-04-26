import AnimatedText from './components/AnimatedText';

export const metadata = {
  title: 'Home | Portfolio Wladmir',
};

export default function Home() {
  return (
    <section className='mt-[-200px] flex flex-col justify-center items-center'>
      <h2 className='text-3xl lg:text-7xl font-bold text-center'>
        Hi! My name is Wlad,
        <br />
        and I am a
      </h2>
      <AnimatedText />
      <h2 className='text-3xl lg:text-7xl font-bold text-center mt-[-12px] lg:mt-0'>
        Based in Sydney
      </h2>
    </section>
  );
}
