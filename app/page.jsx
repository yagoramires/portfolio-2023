import AnimatedText from './components/AnimatedText';

export const metadata = {
  title: 'Home | Portfolio Yago',
};

export default function Home() {
  return (
    <section className='mt-[-200px] flex flex-col justify-center items-center'>
      <h2 className='text-3xl lg:text-7xl font-bold text-center'>
        Olá! Meu nome é Yago,
        <br />e eu sou
      </h2>
      <AnimatedText />
      <h2 className='text-3xl lg:text-7xl font-bold text-center mt-[-12px] lg:mt-0'>
        no RJ!
      </h2>
    </section>
  );
}
