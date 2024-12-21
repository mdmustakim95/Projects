$(function() {
    $(".typing").typing({
        time: 200,
      });

    //   $(".typing2").typing({
    //     time: 200,
    //     text: "Hello world this is second paragaraph"
    //   });

      let x = document.querySelector(".text-section");
      setTimeout(function() {
        x.classList.remove("hide");
        // $(".typing1").typing({
        //     time: 200,
        //     text:"The Art of Manifestation",
        //   });
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
                $("p2").hide(1500);
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

// $(function() {
//     // Initially hide the text section
//     $(".text-section").addClass("hide");

//     // Delay to remove the hide class and start typing for the first paragraph
//     setTimeout(function() {
//         $(".text-section").removeClass("hide");

//         // Typing effect for the first paragraph
//         $(".typing1").typing({
//             time: 200,
//             finish: function() {
//                 // After p1 typing is complete, hide it and show p2
//                 $(".typing1").hide();
//                 $(".typing2:first").show().typing({
//                     time: 200,
//                     finish: function() {
//                         // After p2 typing is complete, hide it and show p3
//                         $(".typing2:first").hide();
//                         $(".typing2:last").show().typing({
//                             time: 200,
//                         });
//                     },
//                 });
//             },
//         });
//     }, 3500);

//     // Initially hide p2 and p3
//     $(".typing2").hide();
//     $(".typing3").hide();

// });