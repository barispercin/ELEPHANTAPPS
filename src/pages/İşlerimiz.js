import React from "react";
import Footer from "../components/Footer";
const Islerimiz = () => {
  return (
    <div class="">
    <div class="bg-stone-50 px-8 pb-20">
      <p class="text-5xl font-light py-20">İşlerimiz</p>
      <p className="text-gray-500 mb-4 text-xl font-light px-14">
        — Tasarım, sadece nasıl göründüğü ve hissettirdiği değildir. Tasarım,
        nasıl çalıştığıdır.
      </p>
      <p className="italic text-2xl font-light px-14 pb-10 ">STEVE JOBS </p>
      <div>
        <p class="text-2xl font-light pt-14 ">Mimar Benim</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/e80f282201a9e536cbfa04c4f9df8887/f33e8/mimarbenim.webp"
              }
              alt="elephantapps"
            />
          </div>
          <div class="  ">
            <img
              className=" "
              src={
                "https://elephantapps.co/static/81926c0804e74f9c9261e18c121f25c3/aa5a5/projects_mimarbenim.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500">
          Ödüllü Mimar Benim Uygulaması Yeni Versiyonuyla Yayında. Mimar Benim;
          son teknoloji fonksiyonları, yepyeni özellikleri, en trend renk ve
          kartelaları ile yaşam alanlarınızın rengini belirlemeyi sizler için
          çok daha kolay hale getiriyor.
        </p>
      </div>
      <div>
        <p class="text-2xl font-light pt-20 ">Filli Boya En Yakın Bayi</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/e80f282201a9e536cbfa04c4f9df8887/f33e8/mimarbenim.webp"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-8 "
              src={
                "data:image/png;base64,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"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-1"
              src={
                "https://elephantapps.co/static/button_googleplay-58066b61794fb9b0f0b07511d1c841ae.png"
              }
              alt="elephantapps"
            />
          </div>
          <div class="  ">
            <img
              className=" "
              src={
                "https://elephantapps.co/static/81926c0804e74f9c9261e18c121f25c3/aa5a5/projects_mimarbenim.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500">
          Filli Boya’nın “En Yakın Bayi” uygulamasıyla Filli Boya bayilerinin
          iletişim bilgilerine, lokasyonlarına ve bulunduğunuz yerden yol
          tarifine kolaylıkla ulaşabilirsiniz.
        </p>
      </div>

      <div>
        <p class="text-2xl font-light pt-20 ">Fawori Boya En Yakın Bayi</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/8271d2f8c72acc42063f6e3569fb81fa/f33e8/faworienyakinbayi.webp"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-8 "
              src={
                "data:image/png;base64,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"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-1"
              src={
                "https://elephantapps.co/static/button_googleplay-58066b61794fb9b0f0b07511d1c841ae.png"
              }
              alt="elephantapps"
            />
          </div>
          <div class="  ">
            <img
              className=" "
              src={
                "https://elephantapps.co/static/2beb54c8e71820d685fea51f492d042e/239a3/projects_enyakinbayifawori.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500">
          Fawori Boya’nın “En Yakın Bayi” uygulamasıyla Fawori Boya bayilerinin
          iletişim bilgilerine, lokasyonlarına ve bulunduğunuz yerden yol
          tarifine kolaylıkla ulaşabilirsiniz.
        </p>
      </div>
      <div>
        <p class="text-2xl font-light pt-20 ">Engelsiz Dünya</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/1b25a8daab5d874b5b33d7697d3457ea/ba1fb/vodafoneengelsizdunya.webp"
              }
              alt="elephantapps"
            />
          </div>
          <div class="  ">
            <img
              className=" "
              src={
                "https://elephantapps.co/static/b0afab52dded098b0828340514db9af9/239a3/projects_engelsizdunya.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500 py-12">
          Engelsiz Dünya uygulaması kullanıcıların fiziksel olarak rahatça
          erişibilecekleri noktaları harita üzerinde görüntüleyebilecekleri ve
          etraflarında bulunan noktaların erişilebilirlik durumunu
          değerlendirebilecekleri bir uygulamadır.
        </p>
      </div>
      <div>
        <p class="text-2xl font-light pt-20 ">Mobixa</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/36d3f49916ad4ba846c60a0362425119/f33e8/mobixa.webp"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-8 "
              src={
                "data:image/png;base64,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"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-1"
              src={
                "https://elephantapps.co/static/button_googleplay-58066b61794fb9b0f0b07511d1c841ae.png"
              }
              alt="elephantapps"
            />
          </div>
          <div class="  ">
            <img
              className=" "
              src={
                "https://elephantapps.co/static/c48f3ed5e35660e27454b037b125587c/aa5a5/projects_mobixa.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500 py-12">
          Çevrimiçi sınavlara, oyun seviyelerine trivia oyunlarına ve düello
          yarışmalarına kaydolmak için oynayın. Gelişiminizi takip edin.
          Eğitmeninize metin mesajları gönderin. Oyunlaştırma aracı ile
          dersinizi öğrenmek daha kolay olacaktır. Yüzlerce sayfayı okumayı
          bırakın, sadece dersinizi eğitmeninizden alın. Oyna ve Öğren!{" "}
        </p>
      </div>
      <div>
        <p class="text-2xl font-light pt-20 ">Dorabase</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="  ">
            <img
              className="lg:pl-32 py-8 "
              src={
                "https://elephantapps.co/static/d2ae9f91eb06fda5d22fc7fd68cb4480/aa5a5/projects_dorabase.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500 py-12">
          Dorabase için tasarlanmış ve geliştirilmiş web sitesi.{" "}
        </p>
      </div>
      <div>
        <p class="text-2xl font-light pt-20 ">ElephantApps</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="  ">
            <img
              className="lg:pl-32 py-8 "
              src={
                "https://elephantapps.co/static/235a58afef22dfef69b2a6c91fb6958e/aa5a5/projects_elephantapps.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500 py-12">
          ElephantApps için tasarlanmış ve geliştirilmiş web sitesi.
        </p>
      </div>
      <div>
        <p class="text-2xl font-light pt-20 ">Assign To Me</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/4395e0e7ff8246c90783bf134ae65040/f33e8/assigntome.webp"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-8 "
              src={
                "data:image/png;base64,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"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-1"
              src={
                "https://elephantapps.co/static/button_googleplay-58066b61794fb9b0f0b07511d1c841ae.png"
              }
              alt="elephantapps"
            />
          </div>
          <div class="  ">
            <img
              className=" "
              src={
                "https://elephantapps.co/static/f24ad0b4e5dc4921ec4119d82fc92e6a/aa5a5/projects_assign2me.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500 py-12">
          AssignToMe uygulaması tam size göre. Görevlerinizi, projelerinizi ve
          ekiplerinizi kolaylıkla yönetebilirsiniz. Artı butonuna tıklayarak
          görevinizi oluşturabilir ve birini arayabilirsiniz.
        </p>
      </div>
      <div>
        <p class="text-2xl font-light pt-20 ">Cancer Quiz</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/97def402f330803adb83b0eebddee338/f33e8/cancerquiz.webp"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-8 "
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfIAAACnCAMAAADdey4SAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUdwTLG0tbK0tbGztrS0tLGztrGzta+vr7K0trKztbOzt6+3t7KytbKztQAAAP///7K0tkJCQ1hXWZ2bnCQlJ9/d3T49PwMHCrGvsHh2eMfFxoqIiRUYGmhmaEtKTDExM3Jxc5+goQkLDllYWmVkZjg3OSMjJBcYGoCAgY+OkE0n8YoAAAAOdFJOUwC/j3Awz4AQ799AIFCfaHcKDgAAEXBJREFUeNrsnedinLgWgGMnduJkd0jUhSjOxin3/V/wDk0FFQRiMk36s94ZEHA+na4h7965xsfPz48PD5++5nGl49PDw+P7zx/fRY4Pj09ZZrcxnh4/LPP++P4lS+qWxsv7sK5/fNaM+Z/X17dveVzheHt9/aMZ+ecA9H9GDf/+9vP3IY8rH7+/vX0fNf0fn4r/Oxzw41cW162MXz8Gpv86Ff3LELT9yHK6rTFAf/riiNN7L/6aRXR747X36B/cxH9m+dzi+Oli/qUj/v2/LJ3bHP91cdwnw7Z/fMrEb5/5kx7DPWbi98D8URH/3Nn6TPy2mXeMP0vkLzlyu48Y7mUy7c85O7uXXO15jN26aD1L5PZHF7UPav4+19zuY3R1uPfSk2d53Imav/R1t6zk96TmH8acPPfO7mL8GgO4p69fv2dp3Mf4/vXr0xH5kfxbFsZ9jLcj7KHy9i0L4z7Gt74C16VoedfTnYzffZr2nFO0+0rTnt89ZOT3hfyhQ/4ni+Jexv865C+5pXJH47Wrv+Uu2p0h/5rT8vtLzHNafm+JeUaekeeRkeeRkeeRkV/fQEVRwJQJwHECcIIbg8d5rxt5CwTZcFoNpyFAU2XkV4MciWKjYLoHV6MkN428QgjdBnJUDsDSkRcFozeMvHtYdAPIqaS2B/ICVxn5hSNvcZGKfDgPNWww7hn5ZSMnmoKiJOQdnn751Bn5JSPXiReHVOSHCpvzoPr4fQmb0cFTAACx/jwc/2zG/x4/IqIsMGzcyCmA3be14T36DwvIW2Op8C6LIH7kx7OwORU53kB34tFawdqKSY7fdjEPPx5EFXJ6fEI8O5qIbgaOLhK5QZylIz+03USNFSWMh9DO12tXVueI7o8e7nROWTmQ13JCTfHVh0zhE/IjD3J1ljD0dvocE3/UguTRUoDECoYTjdOJkFdYR97sgPzA1KMas3P57YCFK08CJol1pwoVB9rImR4mUteHB+tDXDuRM8da756lUR9Xy8hb2ysS1+1cDnJmxNp0D+SN0t5+tWMomNLzWupDqbw+nK7dHd4RgKVmGTTkfNAdAbEGCvQmgQNeqpU1qmoJoS8wFdNUOnM43EAJmUtJXchLdfQYtVaD4QCAper5SZAbZl3ZtyTklUQOJFTKphXVTlQqTdRSXsNt0CkOLGfIkcr7eWGsnVquCCwdSIGRWibAERMWcD5VD5Uh447D4Zt+dCU/He6RmPb+MpCXBvJqF+QHqQVYC97l3xPJRgWMSB6n6YVy9Qo51zJAIf8+Bmlcu0ollbzSTANwKDmz/obKFlNnBmMhx9qVm2kpYy1VEJeF3FRyftgXOdJjdzIREqPyHP8L8KAEHf1Wntpq01QmcqxpDXUtUkmE6akidiDXr0SlQkPtNOgKbizk0xF8uoYRKxZJadwpkBuefGuk4UVurvHp6Se+3UFiWGdCCkYXkZSuRF4ZEmQOqynPMdaDsJEja6p2TtQZ51vIraO9R1wEcmooebs3cjNQxuOn1aBIqFtjZNB8LK15GLmZoOvTI9Dl4FhGVubiAG7kairu4hWH3LoGm9efLwp5o9/Z5vLUHLlUIPMLKayyd5ygswC0N6iVOm4NcoWElHMRI8NqIfvxgHuqHZAXF41cpDtyT5KGA8h5LyjWW+Wyc4ZEGeFNyGtbxBn5sitPSCXmyMvJhbsNe08YHYaAqe4O5QrPMnJmGfbeqpQAIUTlOWc07OXW+sZfQa72NaS0O2fIG7mCDE2ihR6jgXbw4m1Hu1RR3pbwjWtR4sbwrdwevjkNRXvpyHFal2nWVlHBvyFWoFLqvmehsnSkGZkwcneSplPAepLG9ed0JWlE5093Qg6SvORfQc6axFkM5ECv1WOlf1Qry9RDnbIdFZBplnABuV6KgdPfmlo10nfqpRjhK8XoU7FDNPImiLzSDYw45hEXhRwA0Ka7ne7BOepGw7FRmgYyLhx6S1RTqlFYjbmnYgE5ks0yKqSaclngBCpcorIVNhzpLrj2p2lTLSPvlysNIR9qcsNNwLQiezLyqgUdY4/bHjJbKACpNiAv3C3YsTlhNElG7R/Vf6i015HIx+CcQb0XMvSyIBB46Mkg7Ujcdzxc1bex9M7MBsoi8nGJlsiPfGwe1AAmVLF3QE60liRvA9/2TSmUglzbEuNonkpL22hV/jYWuXExZn3GaoVMa56SVc3TIPIDnvfL7aONMnbKht8E5JTPqJT6Hg7EsZVLMrIROZ4tF/klbmaqovc8DtHIDwB7llB/ENCQ1XKLBHJXmoC9GpeRV3gRubZFokzaF7MdeV04Bhyg0qYsnANGG6Ru89A4iP2EFYDjdiRtCYJ+v9H4vdoO1UcXQJ+XTodr5zddTASBHoRU3c8natS5J6C+6C/dmbRuApfs6TBVQw/WNQ/DXK6zev9Ip6MPzqPb3kvWicnaVuQIF54BQc0K/0iN5PM4U5LWFJsHz0K/RuS8KDLzu0KeRDwzv0LkTZE4sj+/MuQolfjePzXK49TIcSrxbNivDHmdSpxkqV8XcpqJ3xtynonfGfJUJQdZ5NeGPNGTwyzxq0NeJhHH9EbEhtqx4UNvHnl1HrOOpheCXUJ+1xpto5KT20YO0pR8613ytB8u7zmAbedwTW8YOTxPDQZfSvhH3HUoDG4XeZpd37phq72UWq3wPhqjN4q8Ok9pXeywbPYYoa0fuLpN5Og8dt2z7fGSiM+zkWkT19Ujb84Sr5NdQsB9rToTR56CeV98lfL+s4tCnhawo120qz2TpFrnS4QJdC/pjDwFOb2M1mvp2kh90F9cijPynZBP3oSdVYqtN05Tv6RobhC5OAfycvrdw1l7ccLvWCqHN78Z5PUZkFdShZLeI5c6cODtpMAGnA17wi7HWpZaxTmLrqGHoPaizsgTUmostYuccYMsCpoqZt1ZRr79jc2tJk3/PNOv10ata0QfADh+voXGI0dL0dbD6zNFQ1OQg7HRR+QVZOJmXE7ldnxM7iAn9pWJ9jS06d5Chg11OT4fG3/1DNCJkZO0GvsW5Fyz5sJbdNV3YCAYaHgAnRzQmyQQRSEnm9TCmBvNomDrylA9DbD3lqDZvzQEToo8cQs72W7Xob7i6hDyeYhpvv9cQ97Ou2IiIohc3tezhJzCxR/kKuTQuqzjdNyeEHnizrcN26DMzMzbn1EXYOHavkJO1rVGotftAnJP+5U4kXNLdO7T+emQJzZPN6RpwvAJwjePFAxbkIhETla2w1gs8zByEtNzmpC3lraQHZTpr26RWK/m1LS5xLeqp/nFUq4wAQFr9+00sV4/iJxENZ0m5GwuObJHl3Il8tRd7Gvzq2amWT4y0+cqO/BomQUEl3GLkjpeluF2RX3sLo8cRjWLCPp/ugEAWDr7RXD+NNNLCbH+5gYw/oMQayW7EnliyL56i+u8rs49xtWMYYeMq4WO3Rkm8uGVRpUeuZNI7WXh9MidpJSWpai4w8IYtlSAFjV1bTgX2dlBbL1k/+4O17W5OZ3H0q0nuHZbce3tJsQBTvt3kXjE1h3meEcKWoUcuLIIdZO1A7mgDn1jrho4PxHyxH3sa5nXluphd4rvi33LOUnguRO+rObUGSwzUEUjx84wVplraiEHrodh7r4HPRHyVGe+jnlpCc5j2X1bb6q5lIEvUhMR2blnJ1QJaBRy4tke1Mw/h857aT2BDFzpzdciJ8nIV7zAGdlP3roXjtcug5ndA97dNTiiRujtJHIagZz5fAecfQGdiis8aNFKXVr9y9NihwFWmhTiIEMjCyWlKU7gDc1BTN5NeWTPyIXce4F2tn0XOg2ON48s19WzVyMXezCP/BfoXY6bO5eNP/iauboA2LiGH6094QyrFpC3fjOCTQV2mmrkDdPqdYWu1chJscuIub025NHKSFyVeUXgl7uIrRdVAC6W7hyXAf75hYkTuoQEvC6brDOe618cgvcgjtcYFOK8vlOpWv/9giW5gzX3hhzYyzBy6CfTmHflRD6ZtwbNR7NuP8J65HwP5FFJpFshuesBA4kKdCKvA23C6OiyEV5/HkBO/JfGAeTLtW54KuTVHsirFS6EmWvaqYwBWtxYZcCvatWWtj4xSNDQDWG/T5uttktDntpaic4n2MIkbRxy05SDQBK7rd+n71ioQzcUmj4COT4j8h0CuJiAna5xDquRo92Q60228oTIizMiTy+6lusEGbGvajVyEJD76t+QNvYt3ZaWp6s52WdhkX19Odriy2f3ik7vyznwDXI65Itedg8lj4gSRULEzndFTmKQ7xSxJ/0jG5uR/41djzE/jKExebm5hwAENkYH8nI6pgt0QSAh5MKfH4KIvFycFXla1TXO5WC5Q8AehfeXAjyh+gYD9wfCbbYo5IHVllZ9+yvIaUoJLio6akNdYGEJz1/Vq03h+2vsNFRjX6jMRSGPqLGTAHIUsfX6hMhTXicRVwnmoQyeWKvH7zSwp5NWejtpbYgpCXuhqE4a8D4PDbnt7aHGLsi312Miu7o4aMYshVzul9ez/7dmDvfLw6En9podl3EqfQE/C0ZqYmnFoNMi32raI1+cRMK7eyzh+ar31dydAN+dwPCumOCmGRFVfVMPVXuWZfP/9s62O1kQjOP0YGrbOkynhprZalvf/xPeoPmAgsA63WfJ9X+xnW2y6voJcj0Ak8hj2ZMxNauE+vXReMeHVjVn02PCyCmS1Cp0dVCi2rdEmCw6KmIR4USiSeFCpMLHQzyaiEj8sUg8SpBHV8UYeVG/DRAlqjtk2KfF7noxXeEatSbtLfRKlZEhfpFbr664/+mEHzgWTWiK8S8lyNsruQMwiZHvexfy3wRkdHfwKlRVm9ngH/Kvwg6t3OX9Qzj3OwFytgSBvcCRaNRu9GMR6aG5Ki/2wjhBZ5wsF5qsqQuKRTebLOrSNSf56K7W3kjxnpONowc9yLvPFiqf9fHASVM5hoHiwkx3VEv7a1LGQxIRpgO4M5n3YbgXO68y5P2IZBQeAq79x/9Anpsy1x16EnWDAaK2gWoG0ZZIpMb+hKo2hEzkITTSE7FGbDW+e5J0J3IJc3b7R/cQF7i58knyYIJMFDDatIrwvU8PQ8Sk0CcVJ/1ine4gD6fHmgW2D0O+y4d9JWu2wUjioYEMFr6n6kDTYGTvTEumgz9dJk3AXLXd8kQAKoonPRpVN+GNM5FBEZ8oHZls1nAfcj7ang4GF+4Q81B/AaLWJh38UNwzbTEwSiqMVAeC/RjUPSUJdZcuDDqkwtUh4jjXh+ZYQ4wWd96LvK0DioigF3+Qm/0zk/wP0QktZtw0ud8iOUTy25DLl8d7Y7vlZNzNJKcu9Jc58H84cP8jGr3ydJ40IYrmj0ZO38IxCI7Sh2CVdjTMPuuk/JutnepVgAPTHustmrIil0XSb4N9UpDqysBgu5XbLlLNxHlq0TF9k1lIp9bF+A8ZW1uehpmoeSzZR0qz+eOR/wVppxwCwzVSUqPXekZbAXLrBMgBOSAH5IAckANyQA7IATkgB+SA/A8ivwByW3S5IS8BuS0qGXIfkNuF3EcLjK87kCW6YrxgyDGYwhZhhnwDyO1CvkEr+vUHbGGHfijsFdo+v2MOMnHLt2gGjjnIyC1HyMH4BMawQyeMHYp8Scl/gzVs0DdFvaTI1/T7Gcxhg84U9ZoiZ/E3cNNscdF8Rrxy06CbW9LJVxVy14Nubksn99wKeRWAK8Eic1dZhd5quexp/gU2mbe+2JP81skReqU/4U+wypz1ievIW6M3+uMJmM+Z+OnmkzdyHWA+f+KO20OOXjxgPnfi3gvitGbMYQ4335kb9tYIiZiDrzZT70xAnI7t7HkOcbjZ6VxhdV6QQO4brqFDXm02+q6B4zcXifXq1xecLl9QG/X0+nm/nGqe/iuSyt14uNW1LC/voCfUpSyvHUdv46IpuSsfg2YkfzUNvJ67Lx2w1DzkLNdIU+52s1wsPLDZs8pbLJabrbh//wNFzlig0hcQyQAAAABJRU5ErkJggg=="
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-1"
              src={
                "https://elephantapps.co/static/button_googleplay-58066b61794fb9b0f0b07511d1c841ae.png"
              }
              alt="elephantapps"
            />
          </div>
        </div>
      </div>
      <div>
        <p class="text-2xl font-light pt-20 ">iKampus</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/328614a942958b747f847d6e8d5e95b1/f33e8/ikampus.webp "
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-8 "
              src={
                "data:image/png;base64,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"
              }
              alt="elephantapps"
            />
            <img
              className="max-w-[116px] max-h-[95px] pt-1"
              src={
                "https://elephantapps.co/static/button_googleplay-58066b61794fb9b0f0b07511d1c841ae.png"
              }
              alt="elephantapps"
            />
          </div>
          <div class="  ">
            <img
              className=" "
              src={
                "https://elephantapps.co/static/cacb303cb7f6f02ab1c01874be7538f5/aa5a5/projects_ikampus.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>

        <p class="text-center text-stone-500 py-12">
          iKampüs Akıllı Okulum Mobil Uygulaması ile iKampüs web uygulamasına
          bulunan modüllerin daha hızlı ve daha kolay şekilde kullanılması
          amaçlanmıştır.
        </p>
      </div>

      <div>
        <p class="text-2xl font-light pt-20 ">ALMS Plus</p>

        <div class="grid flex sm:grid-flow-col ">
          <div class="py-8 ">
            <img
              className="max-w-[95px] max-h-[95px] "
              src={
                "https://elephantapps.co/static/73340ef5fbcf68c672ccf1a5e51918b5/f33e8/almsplus.webp"
              }
              alt="elephantapps"
            />
          </div>
        </div>
      </div>
     
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Islerimiz;
