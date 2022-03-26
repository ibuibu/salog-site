import logo_svg from './assets/full_logo.svg';
import screen_map from './assets/screen_map.png';
import screen_many from './assets/screen_many.png';
import screen_stamp from './assets/screen_stamp.png';
import screen_log from './assets/screen_log.png';
import screen_check from './assets/screen_check.png';

function App() {
  return (
    <main className="text-center text-gray-600 border-salog-pink border-8">
      <section className="p-12">
        <>
          <div className="flex justify-center">
            <img src={screen_map} className="h-120 m-8"></img>
            <div className="m-8 flex items-center">
              <div>
                <img src={logo_svg} className="h-40 inline"></img>
                <h1 className="text-3xl m-4">かんたんサウナ記録アプリ</h1>
                <p className="m-4">
                  サウナに着いたらチェックイン！
                  <br />
                  サウナの記録をかんたんに残そう
                </p>
                <p className="mt-12 text-salog-pink font-bold text-lg">
                  ただいまアプリ申請中・・・！！！
                </p>
              </div>
            </div>
          </div>
        </>
      </section>
      <section className="p-12 bg-salog-blue text-white">
        <>
          <h1 className="text-4xl mb-8 font-bold">使い方</h1>
          <div className="flex justify-around">
            <div className="w-56">
              <p className="text-2xl m-4 font-bold">探す</p>
              <img src={screen_map}></img>
              <p className="text-base my-4">地図からサウナを探そう！</p>
            </div>
            <div className="w-56">
              <p className="text-2xl m-4 font-bold">チェックイン</p>
              <img src={screen_check}></img>
              <p className="text-base my-4">
                サウナに着いたら、
                <br />
                チェックインボタンをタップ！
              </p>
            </div>
            <div className="w-56">
              <p className="text-2xl m-4 font-bold">サログを確認</p>
              <img src={screen_log}></img>
              <p className="text-base my-4">
                最近何回サウナに行ったか、
                <br />
                一目瞭然！
              </p>
            </div>
          </div>
        </>
      </section>
      <section className="p-12">
        <>
          <h1 className="text-4xl mb-8 font-bold">特徴</h1>
          <div className="flex justify-center my-8">
            <img src={screen_many} className="h-110 mx-20"></img>
            <div className="mx-8 my-16">
              <h1 className="text-3xl font-bold">
                東京約500箇所のサウナ位置データ
              </h1>
              <p className="m-4 text-lg">エリアは順次拡大中！</p>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <div className="mx-8 my-16">
              <h1 className="text-3xl font-bold">スタンプラリー</h1>
              <p className="m-4 text-lg">
                チェックインでスタンプをゲット。
                <br />
                近くのサウナを制覇しよう。
              </p>
            </div>
            <img src={screen_stamp} className="h-110 mx-20"></img>
          </div>
        </>
      </section>
      <section className="p-12 bg-gray-100">
        <>
          <h1 className="text-4xl mb-8">SPECIAL THANKS</h1>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCODZPiTbUd8-kU6ijSR6eTg?app=desktop"
            className="text-lg font-bold"
          >
            サログさん
          </a>
          <p className="m-2">
            アプリ名の使用許可をいただきました！ありがとうございます！
          </p>
        </>
      </section>
      {/* <section className="p-12 bg-salog-pink text-white">
        <h1 className="text-3xl font-bold">さあ、サログをはじめよう</h1>
      </section> */}
    </main>
  );
}

export default App;
