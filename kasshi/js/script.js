
// This code is working but not hiding previous one 
/*

$(function() {
    $(".typing").typing({
        time: 200,
      });

      let x = document.querySelector(".text-section");
      setTimeout(function() {
        x.classList.remove("hide");
          function typingSequence() {
            $(".typing1").typing({
                time: 200,
                text: "The Art of Manifestation",
            });

            setTimeout(function () {
                $(".typing2").typing({
                    time: 200,
                    text: "This is text two",
                });
                $("p2");
            }, 2000);

            setTimeout(function () {
                $(".typing3").typing({
                    time: 200,
                    text: "This is text three",
                });
            }, 4000);

            setTimeout(function () {
                $(".typing4").typing({
                    time: 200,
                    text: "This is text four",
                });
            }, 6000);
        }

        // Start the sequence
        typingSequence();

      }, 3500);

});

*/
$(function() {
    let x = document.querySelector(".text-section");
    setTimeout(function() {
        if (x) {
            x.classList.remove("hide");

            function typingSequence() {
                // Typing 1
                // $(".typing1").typing({
                //     time: 200,
                //     text: "The Art of Manifestation",
                // });
                setTimeout(function () {
                    $(".typing1").typing({
                        time: 200,
                        text: "The Art of Manifestation",
                    });
                }, 1000);

                setTimeout(function () {
                    $(".typing1").hide();
                    $(".typing2").show().typing({
                        time: 200,
                        text: "The brand, the place & our concept is a Journey.",
                    });
                }, 5000);

                setTimeout(function () {
                    $(".typing2").hide();
                    $(".typing3").show().typing({
                        time: 200,
                        text: "Dedicated to creating beautiful, meaningful and spiritual mandala art.",
                    });
                }, 15000);

                setTimeout(function () {
                    $(".typing3").hide();
                    $(".typing4").show().typing({
                        time: 200,
                        text: "Our handcrafted pieces are infused with divine energy and designed to bring peace, harmony, and inspiration and manifestation into your life.",
                    });
                }, 25000);
            }

            // Start the sequence
            $(".typing").hide(); // Initially hide all
            $(".typing1").show(); // Show the first one
            typingSequence();
        }
    }, 3500);
});