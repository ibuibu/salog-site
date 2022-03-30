import logo_svg from "./assets/full_logo.svg";
import screen_map from "./assets/screen_map.png";
import screen_many from "./assets/screen_many.png";
import screen_stamp from "./assets/screen_stamp.png";
import screen_log from "./assets/screen_log.png";
import screen_check from "./assets/screen_check.png";
import oji_logo from "./assets/oji_logo.svg";

function App() {
  return (
    <main className="text-center text-gray-600 border-salog-pink border-8">
      <section className="p-8 md:p-12">
        <>
          <div className="md:flex md:justify-center">
            <img src={screen_map} className="hidden md:block md:h-120 md:m-8" />
            <div className="md:m-8 md:flex items-center">
              <div>
                <div className="flex flex-col">
                  <img src={logo_svg} className="h-40 inline md:block" />
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://ojisauna.com"
                    className="md:block"
                  >
                    <img src={oji_logo} className="h-6 inline" />
                  </a>
                </div>
                <h1 className="text-xl mx-2 my-8 md:text-3xl md:m-8">
                  かんたんサウナ記録アプリ
                </h1>
                <p className="text-sm md:text-base m-4">
                  サウナに着いたらチェックイン！
                  <br />
                  サウナの記録をかんたんに残そう
                </p>
                <p className="mt-12 text-salog-pink font-bold text-md md:text-lg">
                  ただいまアプリ申請中・・・！！！
                </p>
              </div>
            </div>
          </div>
        </>
      </section>
      <section className="p-8 md:p-12 bg-salog-blue text-white">
        <>
          <h1 className="text-4xl mb-8 font-bold">使い方</h1>
          <div className="md:flex md:justify-around">
            <div className="mx-auto w-56">
              <p className="text-2xl m-4 font-bold">探す</p>
              <img src={screen_map}></img>
              <p className="text-base mt-4 mb-12">地図からサウナを探そう！</p>
            </div>
            <div className="mx-auto w-56">
              <p className="text-2xl m-4 font-bold">チェックイン</p>
              <img src={screen_check}></img>
              <p className="text-base mt-4 mb-12">
                サウナに着いたら、
                <br />
                チェックインボタンをタップ！
              </p>
            </div>
            <div className="mx-auto w-56">
              <p className="text-2xl m-4 font-bold">サログを確認</p>
              <img src={screen_log}></img>
              <p className="text-base mt-4 mb-12">
                最近何回サウナに行ったか、
                <br />
                一目瞭然！
              </p>
            </div>
          </div>
        </>
      </section>
      <section className="p-8 md:p-12">
        <>
          <h1 className="text-4xl mb-8 font-bold">特徴</h1>
          {/* md */}
          <div className="hidden md:block md:flex md:justify-center my-8">
            <div className="m-8 w-56">
              <img src={screen_many} className="h-110"></img>
            </div>
            <div className="mx-8 my-16">
              <h1 className="text-3xl font-bold">
                東京約500箇所のサウナ位置データ
              </h1>
              <p className="m-4 text-lg">エリアは順次拡大中！</p>
            </div>
          </div>
          <div className="hidden md:block md:flex md:justify-center my-8">
            <div className="mx-8 my-16">
              <h1 className="text-3xl font-bold">スタンプラリー</h1>
              <p className="m-4 text-lg">
                チェックインでスタンプをゲット。
                <br />
                近くのサウナを制覇しよう。
              </p>
            </div>
            <div className="w-56">
              <img src={screen_stamp} className="h-110"></img>
            </div>
          </div>
          {/* sm */}
          <div className="md:hidden my-8">
            <div className="m-auto w-56">
              <h1 className="text-2xl font-bold m-4">
                東京約500箇所の
                <br />
                サウナ位置データ
              </h1>
              <img src={screen_many} className="h-110"></img>
              <p className="m-4 text-sm mb-8">エリアは順次拡大中！</p>
            </div>
          </div>
          <div className="md:hidden my-8">
            <h1 className="text-2xl font-bold m-4">スタンプラリー</h1>
            <div className="m-auto w-56">
              <img src={screen_stamp} className="h-110"></img>
              <p className="m-4 text-sm mb-8">
                チェックインで
                <br />
                スタンプをゲット。
                <br />
                近くのサウナを制覇しよう。
              </p>
            </div>
          </div>
        </>
      </section>
      <section className="p-8 bg-gray-100">
        <>
          <h1 className="text-4xl mb-8">SPECIAL THANKS</h1>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCODZPiTbUd8-kU6ijSR6eTg?app=desktop"
            className="text-lg font-bold underline"
          >
            サログさん
          </a>
          <p className="m-2 text-sm md:text-base">
            アプリ名の使用許可をいただきました！
            <br className="md:hidden" />
            ありがとうございます！
          </p>
        </>
      </section>
      <section className="p-12 bg-salog-pink text-white">
        {/* <h1 className="text-3xl font-bold">さあ、サログをはじめよう</h1> */}
        <div className="text-lg m-4">
          <a href="mailto:ojisauna@gmail.com">お問い合わせ ✉️</a>
        </div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://ojisauna.com"
          className="text-sm"
        >
          © 2022 Tokyo Ojisauna
        </a>
      </section>
    </main>
  );
}

export default App;
