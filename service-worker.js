/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "45962c18dc34bfe56063211457aad2f8"
  },
  {
    "url": "article.html",
    "revision": "7c01b2c8580ae192f8ec4e2bfcb466e8"
  },
  {
    "url": "assets/css/0.styles.53044020.css",
    "revision": "56fb7834fe3926fe6d81ce308a0614ac"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "45516348c950b78abac30ebb6b4ced3d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.072ca728.js",
    "revision": "79d128747e53c4137a173878df151c82"
  },
  {
    "url": "assets/js/11.edf4296b.js",
    "revision": "516b9d458c2f46c7db93594b1321c22c"
  },
  {
    "url": "assets/js/12.96516738.js",
    "revision": "06f4c3ca033aa969fe4a2453def8f669"
  },
  {
    "url": "assets/js/13.57b1790f.js",
    "revision": "c059dc2e89b9cee7648ff51d79497c1d"
  },
  {
    "url": "assets/js/14.8a150ba3.js",
    "revision": "f1ef84241f130608e9cf7a57a5778817"
  },
  {
    "url": "assets/js/15.269a2601.js",
    "revision": "bf6957f97e98412b474d2e33f263b682"
  },
  {
    "url": "assets/js/16.5a54ba91.js",
    "revision": "d23eb1258cc27940eea0a74f0f7ba13f"
  },
  {
    "url": "assets/js/17.636d4227.js",
    "revision": "9f36211c25df3ecf3b9ea4b79a05d87a"
  },
  {
    "url": "assets/js/18.79653f1a.js",
    "revision": "d516a2a113cae8ef4383d51f3f63aac3"
  },
  {
    "url": "assets/js/19.26b0197a.js",
    "revision": "1f57323b3437b0cfb5386da53b96f4ab"
  },
  {
    "url": "assets/js/2.fbe43a77.js",
    "revision": "13e3459fb11ee2742fcebfa2befae7c3"
  },
  {
    "url": "assets/js/20.5498c3a2.js",
    "revision": "3c7354956dca0489c2fb178829d1392b"
  },
  {
    "url": "assets/js/21.c42d5205.js",
    "revision": "00505b92ef39b9082b96c4ec79befa10"
  },
  {
    "url": "assets/js/22.633316ac.js",
    "revision": "bf860985dbe80bb3e28ae284341ed8db"
  },
  {
    "url": "assets/js/23.e31521a7.js",
    "revision": "83251a430d1b8dab99c6494de1b772da"
  },
  {
    "url": "assets/js/24.8d80f39b.js",
    "revision": "56201f87a216578ff3b56c9759efc24f"
  },
  {
    "url": "assets/js/25.ec96867a.js",
    "revision": "8f8dc7b59dcd7c18a0e997e21ba0da14"
  },
  {
    "url": "assets/js/26.c3c837b9.js",
    "revision": "e34ac3b39eb4b081b61a236fdf8f95e0"
  },
  {
    "url": "assets/js/27.46034f6a.js",
    "revision": "16b0bab2544d7f71fd634863c277752c"
  },
  {
    "url": "assets/js/28.42a29309.js",
    "revision": "5236787d351d4c0cf40e8190cb38c1bf"
  },
  {
    "url": "assets/js/29.6334bb6c.js",
    "revision": "1df5d22f57f2859aca7ce983b7a54893"
  },
  {
    "url": "assets/js/3.0f3ce575.js",
    "revision": "074ba6d651a8eb9d9d0b59593492b1ac"
  },
  {
    "url": "assets/js/30.194d02e8.js",
    "revision": "92073073f736763b1f1a2117277bb428"
  },
  {
    "url": "assets/js/31.5f233132.js",
    "revision": "c6287610d98eb95f713ae7cf1d9fca19"
  },
  {
    "url": "assets/js/32.25bcdbd2.js",
    "revision": "92455069814708017ffce95a17aac50d"
  },
  {
    "url": "assets/js/33.4e6d01cc.js",
    "revision": "4e9860498038c905b42f0fa39acb9071"
  },
  {
    "url": "assets/js/4.cb036663.js",
    "revision": "91c2a3d0780f21c7dd596c91a2dfda93"
  },
  {
    "url": "assets/js/5.91e9c733.js",
    "revision": "8f1a5e8aab6836acab1228addb61de0e"
  },
  {
    "url": "assets/js/6.5e1ecf64.js",
    "revision": "09674a476b84d0522cc22789033c4770"
  },
  {
    "url": "assets/js/7.2428932d.js",
    "revision": "ee23bf5f80d118c572bf932a67f807e7"
  },
  {
    "url": "assets/js/8.251b5910.js",
    "revision": "e02a3132a9bf8aaa235e82c3d1160594"
  },
  {
    "url": "assets/js/9.d7dfc07c.js",
    "revision": "eb60bd7b60f766194b1f280c1bf0e6d0"
  },
  {
    "url": "assets/js/app.466e8ec7.js",
    "revision": "e6d80b99fd588cb1e75c35c7ecc641e5"
  },
  {
    "url": "countup.html",
    "revision": "f0fd5fcd67f852ab5e445488ca4164cc"
  },
  {
    "url": "css/Bootstrap.html",
    "revision": "f9f4835f359c857ff1448ef1a6313e5e"
  },
  {
    "url": "css/css3.html",
    "revision": "1799085b5f55c8117dd87e4bcf95bfda"
  },
  {
    "url": "css/index.html",
    "revision": "c78323cc586b425022a5cd05976a9911"
  },
  {
    "url": "css/移动web布局.html",
    "revision": "ab8d7a42e3cb15dba5c3513c2f525895"
  },
  {
    "url": "HTML/about.html",
    "revision": "fffbb4cc38999e7c8e8e86208b6505dc"
  },
  {
    "url": "HTML/basic.html",
    "revision": "3bf12683fd897492ab45041e55eb3b7a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "13bb25b0494b6f372d84c2f2e76cd4e3"
  },
  {
    "url": "interview/Browser.html",
    "revision": "b045f61c101b46af08d33470df2288de"
  },
  {
    "url": "interview/index.html",
    "revision": "2979ed5630d5539be81b75e00db82d71"
  },
  {
    "url": "interview/Internet.html",
    "revision": "ea22754178b3c1454d4d6031dba5544c"
  },
  {
    "url": "interview/Vue.html",
    "revision": "6033a0c9a303b3032e3b4687cd707337"
  },
  {
    "url": "interview/writeCode.html",
    "revision": "15cd7888dc03cdbe247da8d19b5bfa8e"
  },
  {
    "url": "javascript/index.html",
    "revision": "71284a1835696a2aee03ff40a6d41362"
  },
  {
    "url": "javascript/jsBasic.html",
    "revision": "cacaf8505be73f5fd7fec54c46d9717d"
  },
  {
    "url": "javascript/jsHieght.html",
    "revision": "591d4ff14244db84478381a2dfd2680d"
  },
  {
    "url": "javascript/webAPI/BOM.html",
    "revision": "df529ba8acd0fd033098de0e40fe393c"
  },
  {
    "url": "javascript/webAPI/DOM.html",
    "revision": "e4ebd27dabd8b027a5ce71a14febf9b7"
  },
  {
    "url": "webProject/webpack.html",
    "revision": "06e6af4991fe4964432f25d92f622a75"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
