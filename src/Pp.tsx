export const Pp = () => {
  return (
    <main className="container mx-auto p-8 text-left text-gray-700">
      <h1 className="text-3xl m-4">プライバシーポリシー</h1>
      <div className="text-sm">
        <p className="m-4">
          東京オジサウナ（以下「当団体」）の提供するサログの利用者（以下「ユーザー」という）に関する個人情報を含んだ情報（以下「ユーザー情報」という）の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」という）を定めます。
        </p>
        <div className="m-4">
          <h2 className="text-sm font-bold">１．情報を取得するアプリ提供者</h2>
          <p className="">東京オジサウナ</p>
        </div>
        <div className="m-4">
          <h2 className="text-sm font-bold">２．取得するユーザー情報と目的</h2>
          <p>
            当団体は、本アプリケーションおよび本サービスの提供等にあたり、下記に記載する利用者情報をアプリケーション経由で自動的に取得あるいは利用者自身の入力により取得し、利用目的の達成に必要な範囲で取り扱います。
            <br />
          </p>
          <table className="table-auto">
            <tr>
              <th className="border">取得情報</th>
              <th className="border">利用目的</th>
              <th className="border">取得方法</th>
            </tr>
            <tr>
              <td className="border">位置情報</td>
              <td className="border">マップでの現在地表示</td>
              <td className="border">
                ユーザーによる許諾後、アプリケーションによる自動取得
              </td>
            </tr>
            <tr>
              <td className="border">twitterアカウント名</td>
              <td className="border">
                ログイン、およびログイン後後の表示（将来的にユーザー交流機能での活用の可能性あり）
              </td>
              <td className="border">
                ユーザーによる許諾後、アプリケーションによる自動取得
              </td>
            </tr>
            <tr>
              <td className="border">twitterアカウント画像</td>
              <td className="border">
                ログイン、およびログイン後後の表示（将来的にユーザー交流機能での活用の可能性あり）
              </td>
              <td className="border">
                ユーザーによる許諾後、アプリケーションによる自動取得
              </td>
            </tr>
          </table>
        </div>
        <div className="m-4">
          <h2 className="font-bold">
            ４．通知・公表または同意取得の方法・利用者関与の方法
          </h2>
          <p>
            （１）通知・公表
            <br />
            当社は、本ポリシーに関する通知・公表は本アプリケーションまたは当ホームページに掲載する方法で行います。
            <br />
            <br />
            （２）同意
            <br />
            本アプリケーションおよび本サービスは、本プライバシーポリシーおよび本サービス利用規約をご確認いただき、内容をご理解したうえでご利用ください。本プライバシーポリシーは当社Webページに掲示されており、この掲示をもって公表したものとします。利用者は本アプリケーションをインストールする前に、本プライバシーポリシーをご確認ください。
            <br />
            <br />
            （３）利用者関与の方法
            <br />
            ユーザー情報の取得は、本アプリケーションをアンインストールすることで中止することができます。
          </p>
        </div>
        <div className="m-4">
          <p>
            <h2 className="font-bold">
              ５．外部送信・第三者提供・情報収集モジュール
            </h2>
            （１）外部送信
            <br />
            取得したユーザー情報については、当社が管理を委託するホスティング会社のサーバーに送信されます。
            <br />
            <br />
            （２）第三者提供
            <br />
            当社は上記第2項に基づいて取得した利用者情報を、当社の管理するサーバに転送します。
            <br />
            <br />
          </p>
        </div>
        <div className="m-4">
          <h2 className="font-bold">６．お問い合わせ</h2>
          <p>
            当社のプライバシーポリシーに関する、ご意見、ご質問、苦情の申出その他ユーザー情報の取扱いに関するお問い合わせは、以下の窓口にご連絡ください。
          </p>
        </div>
        <div className="m-4">
          <h2 className="font-bold">７．改定</h2>
          <p>
            当団体は、当団体の裁量に基づいて、本ポリシーを変更します。但し、取得するユーザー情報、利用目的、第三者提供に変更が発生した場合、本アプリケーションまたは当社のホームページで通知します。
          </p>
        </div>
        <div className="m-4 text-right">制定日：2022年3月27日</div>
      </div>
    </main>
  );
};
