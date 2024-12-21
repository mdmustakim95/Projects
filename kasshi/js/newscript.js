$(function() {

    let x = document.querySelector(".text-section");
    setTimeout(function() {
        if (x) { // Ensure the element exists before proceeding
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
        }
    }, 3500);

});
