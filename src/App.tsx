import { Section } from './Section';
import apng from './assets/a.png';
import logo_svg from './assets/full_logo.svg';

function App() {
  return (
    <main className="text-center text-gray-700">
      <Section>
        <>
          <div className="flex justify-center">
            <img src={apng} className="h-80"></img>
            <div className="m-8">
              <img src={logo_svg} className="h-30 inline"></img>
              <h1 className="text-3xl m-4">かんたんサウナ記録アプリ</h1>
              <p className="m-4">サウナに着いたらチェックイン！</p>
            </div>
          </div>
        </>
      </Section>
      <Section>
        <>
          <h1 className="text-3xl mb-8 font-bold">使い方</h1>
          <div className="flex justify-around">
            <div className="w-48">
              <p className="text-xl">探す</p>
              <img src={apng}></img>
              <p className="text-base">地図からサウナを探そう</p>
            </div>
            <div className="w-48">
              <p className="text-xl">チェックイン</p>
              <img src={apng}></img>
              <p className="text-base">
                サウナに着いたら、チェックインボタンをタップ！
              </p>
            </div>
            <div className="w-48">
              <p className="text-xl">ログを確認</p>
              <img src={apng}></img>
              <p className="text-base">最近何回サウナに行ったかが一目瞭然！</p>
            </div>
          </div>
        </>
      </Section>
      <Section>
        <>
          <h1 className="text-3xl mb-8 font-bold">特徴</h1>
          <div className="flex justify-around my-8">
            <img src={apng} className="h-80 mx-20"></img>
            <div className="mx-20 my-8">
              <h1 className="text-2xl">東京約700箇所のサウナ位置データ</h1>
              <p>エリアは順次拡大中！</p>
            </div>
          </div>
          <div className="flex justify-around my-8">
            <div className="mx-20 my-8">
              <h1 className="text-2xl">スタンプラリー</h1>
              <p>fuga</p>
            </div>
            <img src={apng} className="h-80 mx-20"></img>
          </div>
        </>
      </Section>
      <Section>
        <>
          <h1 className="text-3xl mb-8">SPECIAL THANKS</h1>
          <p>サログさん</p>
          <p>アプリ名の使用許可をいただきました！ありがとうございます！</p>
        </>
      </Section>
      <Section>
        <h1 className="text-3xl">さあ、サログをはじめよう</h1>
      </Section>
    </main>
  );
}

export default App;
