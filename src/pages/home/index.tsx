import './styles/index.scss';

function Home() {
  document.title = '林泽伟的个人博客';
  return (
    <div className='home padding-content'>
      <main className='main inner'>
        <p>1.When in doubt, use brute force. —— Ken Thompson</p>
        <p>2.Avoid arc-sine and arc-cosine functions - you can usually do better by applying a trig identity or computing a vector dot-product. —— Jim Conyngham</p>
        <p>3.Allocate four digits for the year part of a date: a new millennium is commg. —— David Martin</p>
        <p>4.Avoid asymmetry. —— Andy Huber</p>
        <p>5.The sooner you start to code, the longer the program will take. —— Roy Carlson</p>
        <p>6.If you can't write it down in English, you can't code it. —— Peter Halpern</p>
        <p>7.If the code and the comments disagree, then both are probably wrong. —— Norm Schryer</p>
        <p>8.If you have too many special cases, you are doing it wrong. —— Craig Zerouni</p>
        <p>9.Get your data structures correct first, and the rest of the program will write itself. —— David Jones</p>
        <p className='self-create'>10.Changing the world starts with changing yourself. —— Lin Zewei</p>
      </main>
    </div>
  );
}

export default Home;
